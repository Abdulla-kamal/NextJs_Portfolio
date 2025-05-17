"use client";

import { useEffect, useState } from "react";
import { Sun } from "@deemlol/next-icons";
import { Moon } from "@deemlol/next-icons";
import clsx from "clsx";
import MobileMenu from "./Mobile-menu";

const Header = ({ isProjectViewPage, place }: { isProjectViewPage: boolean, place:string }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  // Open And Close Mobile Menu
  const [open, setOpen] = useState<boolean>(false);
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

  // Toggle open and close mobile menu
  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <header
      className={clsx("w-full fixed inset-0  mx-auto p-5 z-1000 h-[100px]", {
        hidden: isProjectViewPage,
      })}
    >
      {/* <input type="checkbox" className="" onClick={toggleModes} /> */}
      <div className="w-full   flex items-center justify-between xl:justify-between h-[40px]">
        <button
          className="rounded-md p-2 font-bold cursor-pointer xl:hidden w-[70px] ml-4 flex flex-col justify-center gap-y-2 relative"
          onClick={toggleMenu}
        >
          <span
            className={clsx(
              "bg-main h-[2px] w-full transition-transform duration-300 ease-in-out",
              {
                "rotate-45  translate-y-2": open,
              }
            )}
          ></span>
          <span
            className={clsx(
              "bg-main h-[2px] w-full transition-transform duration-300 ease-in-out",
              {
                "-rotate-45": open,
              }
            )}
          ></span>
          <span
            className={clsx(
              "bg-main h-[2px] w-full transition-opacity duration-300 ease-in-out",
              {
                hidden: open,
              }
            )}
          ></span>
        </button>
        {/* Mobile Menu  */}
        <MobileMenu open={open} place={place} />
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
