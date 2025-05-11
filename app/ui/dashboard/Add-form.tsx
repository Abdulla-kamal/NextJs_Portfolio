"use client";
import clsx from "clsx";
import { createProject } from "../../lib/actions";
import { useState } from "react";

export default function AddForm() {
  const [selected, setSelected] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  return (
    <form
      action={createProject}
      className="h-120 md:w-100 mx-auto bg-white dark:bg-[url('/image.png')] flex flex-col justify-around items-center text-xl text-black/80 dark:text-white/80"
    >
      <div className="w-full flex flex-col justify-around h-20">
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-slate-400/10 outline-1 outline-offset-2 outline-sky-500/40 focus:outline-sky-500/100 h-15 w-[100%] pl-2 mt-2"
        />
      </div>
      <div className="w-full flex flex-col justify-around h-20">
        <label htmlFor="description">Project Description</label>
        <input
          type="text"
          id="description"
          name="description"
          className="bg-slate-400/10 outline-1 outline-offset-2 outline-sky-500/40 focus:outline-sky-500/100 h-15 w-[100%] pl-2 mt-2"
        />
      </div>
      <div className="w-full flex flex-col justify-around items-center  h-20">
        <label
          htmlFor="img"
          className={clsx(
            "cursor-pointer p-5 border border-dashed rounded-xl border-sky-500/40",
            {
              "border-sky-500/100": selected,
            }
          )}
        >
          {selected ? "Selected ✅" : "Project Picture"}
        </label>
        <input
          type="file"
          id="img"
          name="img"
          className="bg-slate-400  rounded-xl w-40 hidden"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
      </div>
      <button className="cursor-pointer rounded-md bg-main p-2 p-x-3">
        Add Project
      </button>
    </form>
  );
}
