"use client";
import { useEffect, useState } from "react";
import {
  deleteProject,
  getProjectById,
  updateProject,
} from "../../lib/actions";
import { supabase } from "../../lib/supabaseClient";
import clsx from "clsx";

export default function UpdateForm({ id }: { id: number }) {
  const [file, setFile] = useState<File | null>(null);
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (file) {
      updateImage();
    }
  }, [file, selected]);

  async function fetchProject() {
    const project = await getProjectById(id);
    setForm({
      name: project.name,
      description: project.description,
      image: project.image,
    });
  }
  useEffect(() => {
    fetchProject();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Call your server action (API) directly
    await updateProject(id, formData);

    setForm({
      name: "",
      description: "",
      image: "",
    });
    // Re-enable the button after submission
    // Optionally reset the form: e.target.reset();
    // setSelected(false);
  }
  // Handle Form
  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const updateImage = async () => {
    if (!file) return;

     const oldPath = `uploads/${form.image}`;
    // 1. Delete old image (optional, you can skip this if replacing with same path)
    if (oldPath) {
      await supabase.storage.from("media").remove([oldPath]);
    }

    // 2. Upload new image
    const newPath = `uploads/${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("media")
      .upload(newPath, file);

    if (error) {
      console.error("Upload error:", error.message);
      return;
    }

    // 3. Get public URL
    const { data: urlData } = supabase.storage
      .from("media")
      .getPublicUrl(newPath);

    if (urlData?.publicUrl) {
      setForm((prev) => ({ ...prev, img: urlData.publicUrl }));
      setSelected(true);
      setLoading(false);
      console.log("New image URL:", urlData.publicUrl);

      // Optionally: save the new path or URL to your DB
    }
  };

  // Handle File Change And Store it in file useState
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setLoading(true);
  };
  return (
    <form
      // action={createProject}
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
          rows={5} // Increase the number of rows
          required
          wrap="soft"
          name="description"
          value={form.description}
          className="bg-slate-400/10 outline-1 outline-offset-2 outline-main/40 focus:outline-main w-[100%] pl-2 mt-2" // Add h-40 or larger
          onChange={handleFormChange}
        />
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
            {selected
              ? "Selected ✅"
              : loading
              ? "Uploading"
              : "Project Picture"}
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="bg-slate-400 rounded-xl w-40 hidden"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className={"w-full flex gap-5 "}>
        <button className="w-1/2  border-1 border-main/60 hover:bg-main/10 transition duration-300 text-white/80 px-4 py-2 rounded-sm transition duration-300 ease-in-out cursor-pointer text-center">
          Update Project
        </button>
        <button
          onClick={() => deleteProject(id)}
          className="w-1/2 border-1 border-red-500/80 text-white/80 px-4 py-2 rounded-sm hover:bg-red-500/10 transition duration-300 ease-in-out cursor-pointer"
        >
          Delete
        </button>
      </div>
    </form>
  );
}
