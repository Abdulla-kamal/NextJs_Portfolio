"use client";
import { House } from "@deemlol/next-icons";
import { Terminal } from "@deemlol/next-icons";
import { HelpCircle } from "@deemlol/next-icons";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Layout } from "@deemlol/next-icons";
import ScrollReveal from "../lib/ScrollReveal";
import SocialStack from "./SocialStack";

export default function SideBar() {
  const [selected, setSelected] = useState(0);

  const sidMenu = [
    {
      title: "Home",
      icon: <House size={35} className="text-black dark:text-white" />,
      sectionId: "home",
    },
    {
      title: "About Me",
      icon: <HelpCircle size={35} className="text-black dark:text-white" />,
      sectionId: "about-me",
    },
    {
      title: "Projects",
      icon: <Layout size={35} className="text-black dark:text-white" />,
      sectionId: "projects",
    },
    {
      title: "Skills",
      icon: <Terminal size={35} className="text-black dark:text-white" />,
      sectionId: "skills",
    },
  ];

  return (
    <div
      className="h-screen w-24 xl:w-1/4 p-12 overflow-hidden flex flex-col items-center justify-between fixed  max-xl:hidden z-900
"
    >
      <ScrollReveal animationType="scale-fade">
        <Image
          className="mx-auto  transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 m w-[100px]"
          width={100}
          height={100}
          src="/welcome.webp"
          alt="Avatar"
        />
      </ScrollReveal>
      <ul className="text-xl p-5 flex flex-col gap-y-5 w-full mt-4">
        {sidMenu.map((i, index) => (
          <li
            className="flex gap-10 w-[200px] mx-auto cursor-pointer xs:hidden"
            key={i.title}
            data-section-id={i.sectionId}
            onClick={() => {
              setSelected(index);
              const section = document.getElementById(i.sectionId);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {i.icon}
            <span
              className={clsx(`rounded-md hover:text-2xl hover:pl-2`, {
                "text-2xl text-main border-l-2 pl-2": selected === index,
              })}
            >
              {i.title}
            </span>
          </li>
        ))}
      </ul>
      {/* Socials Acounts  */}
      <SocialStack />
      <button className="bg-main w-full rounded-md p-2 font-bold cursor-pointer">
        <a href="/cv.pdf" download="cv.pdf" className="block">
          CV
        </a>
      </button>
    </div>
  );
}
