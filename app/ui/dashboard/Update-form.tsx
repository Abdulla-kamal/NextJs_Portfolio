"use client";
import { useEffect, useState } from "react";
import { deleteProject, getProjectById, updateProject } from "../../lib/actions";

export default function UpdateForm({ id }: { id: number }) {
  const [oneClick, setOneClick] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    img: "",
  });

  async function fetchProject() {
    const project = await getProjectById(id);
    setForm({
      name: project.name,
      description: project.description,
      img: project.img,
    });
  }
  useEffect(() => {
    fetchProject();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    setOneClick(true);

    const formData = new FormData(e.target);

    // Call your server action (API) directly
    await updateProject(id, formData);

    setOneClick(false);
    setForm({
      name: "",
      description: "",
      img: "",
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
