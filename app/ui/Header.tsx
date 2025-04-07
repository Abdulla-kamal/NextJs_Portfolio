"use client";

import { useEffect, useState } from "react";
import { Sun } from "@deemlol/next-icons";
import { Moon } from "@deemlol/next-icons";

const Header = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  useEffect(() => {
    if (localStorage.getItem("mode")) {
      localStorage.setItem("mode", mode);
    } else {
      localStorage.setItem("mode", mode);
    }

    const html = document.documentElement;
    if (mode === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [mode]);

  // Toggle Mode
  function toggleModes() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <header className="w-full fixed inset-0 container mx-auto p-5 z-1000 h-[100px]">
      {/* <input type="checkbox" className="" onClick={toggleModes} /> */}
      <div className="w-full   flex items-center justify-between xl:justify-between ">
        <button className="bg-main/55 rounded-md p-2 font-bold cursor-pointer xl:hidden w-[20%] ml-4">
          <a href="/cv.pdf" download="cv.pdf">
            CV
          </a>
        </button>
        <div onClick={toggleModes} className="cursor-pointer z-2000">
          {mode === "dark" ? (
            <Sun size={24} color="#FFFFFF" />
          ) : (
            <Moon size={24} color="#000000" />
          )}
        </div>
        <a
          className="hidden xl:flex text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          A
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-sky-500 to-purple-500">
            K
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
