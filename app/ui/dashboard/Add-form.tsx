"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { createProject } from "../../lib/actions"; // assumes you can pass an object
import { supabase } from "../../lib/supabaseClient";

export default function AddForm() {
  const [file, setFile] = useState<File | null>(null);
  const [selected, setSelected] = useState(false);
  const [oneClick, setOneClick] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [imageUrl, seimagetUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (file) {
      uploadImageToFireBase();
    }
  }, [file, selected]);

  //  Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setOneClick(true);

    if (!form.image) {
      alert("Please upload an image first.");
      setOneClick(false);
      return;
    }
   

    // ✅ Send the internal form object with the image URL
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("image", form.image);
    await createProject(formData);

    // Reset
    setForm({ name: "", description: "", image: "" });
    setSelected(false);
    setFile(null);
    setOneClick(false);
  }

  // Handle Main Form
  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Handle File Change And Store it in file useState
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setLoading(true);
  };

  //Uploading Image To Firebase
  async function uploadImageToFireBase() {
    if (!file) return;

    const filePath = `uploads/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("media") // Your bucket name
      .upload(filePath, file);

    if (error) {
      console.error("Upload error:", error.message);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("media")
      .getPublicUrl(filePath);

    if (publicUrlData?.publicUrl) {
      setForm((prev) => ({ ...prev, image: publicUrlData.publicUrl }));
      setLoading(false);
      setSelected(true);
      console.log("Uploaded Image URL:", publicUrlData.publicUrl);
      // Optionally: send the URL to your DB via API
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-120 md:w-100 mx-auto bg-white dark:bg-[url('/image.png')] flex flex-col justify-around items-center text-xl text-black/80 dark:text-white/80"
    >
      <div className="w-full flex flex-col justify-around h-20">
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          className="bg-slate-400/10 outline-1 outline-offset-2 outline-main/40 focus:outline-main h-15 w-[100%] pl-2 mt-2"
          onChange={handleFormChange}
        />
      </div>
      <div className="w-full flex flex-col justify-around">
        <label htmlFor="description">Project Description</label>
        <textarea
          id="multi-line"
          rows={5}
          required
          name="description"
          value={form.description}
          className="bg-slate-400/10 outline-1 outline-offset-2 outline-main/40 focus:outline-main w-[100%] pl-2 mt-2"
          onChange={handleFormChange}
        />
      </div>
      <div className="w-full flex flex-col justify-around items-center h-20">
        <label
          htmlFor="image"
          className={clsx(
            "cursor-pointer p-5 border border-dashed rounded-xl border-sky-500/40",
            {
              "border-sky-500/100": selected,
            }
          )}
        >
          {selected ? "Selected ✅" : loading ? "Uploading" : "Project Picture"}
        </label>
        <input
          type="file"
          id="image"
          name="image"
          required ={!loading}
          className="bg-slate-400 rounded-xl w-40 hidden"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
      </div>
      <button
        disabled={oneClick}
        className="cursor-pointer rounded-sm border-1 border-main/60 hover:bg-main/10 p-3 px-3"
      >
        Add Project
      </button>
    </form>
  );
}
