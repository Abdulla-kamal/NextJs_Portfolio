"use client"
import clsx from "clsx";
import SocialStack from "./SocialStack";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House } from "@deemlol/next-icons";
import { FolderPlus } from "@deemlol/next-icons";
import { Layout } from "@deemlol/next-icons";
import { Terminal } from "@deemlol/next-icons";
import { HelpCircle } from "@deemlol/next-icons";
import { useState } from "react";

export default function MobileMenu({ open, place }:{open:boolean, place:string}) {
  // To Handle Navigation In Dashboard Page 
  const pathName = usePathname();
  // To Handle Navigation In Home Page 
  const [selected, setSelected] = useState(0);
    const dshboardMenu = [
    {
      title: "Add Project",
      icon: <FolderPlus size={35} className="text-black dark:text-white" />,
      path: "/dashboard",
    },
    {
      title: "Show Projects",
      icon: <House size={35} className="text-black dark:text-white" />,
      path: "/dashboard/projects",
    },
  ];

   const homeMenu =  [
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
    <ul
      className={clsx(
        "w-full absolute bg-white-500/60 dark:bg-gray-900/60 text-black dark:text-white backdrop-blur-sm rounded-lg shadow-lg pt-10 p-4 flex flex-col gap-y-10 top-[100px] left-0 z-50 xl:hidden transition-opacity duration-300 ease-in-out",
        {
          "opacity-100 translate-y-0": open, // Fully visible and in place when open
          "opacity-0 -translate-y-5 pointer-events-none": !open, // Hidden and slightly moved up when closed
        }
      )}
    >
      {place ==="dashboard" ? (
        <>
        {dshboardMenu.map((i, index) => (
          <Link
            href={i.path}
            className="flex gap-10 w-[240px] cursor-pointer xs:hidden"
            key={index}
          >
            {i.icon}
            <span
              className={clsx(`rounded-md hover:text-2xl text-md   hover:pl-2`, {
                "text-xl text-main border-l-2 pl-2": i.path === pathName,
              })}
            >
              {i.title}
            </span>
          </Link>
        ))}
        </>
      ) : (
        <>
               {homeMenu.map((i, index) => (
                 <li
                   className="flex gap-10 w-[200px] cursor-pointer xs:hidden"
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
        </>
      )}
      <li className="flex items-end">
          <button className="border-1 border-main hover:bg-main/10 w-full rounded-md p-2 font-bold cursor-pointer h-10">
        <a href="/cv.pdf" download="cv.pdf" className="block">
          CV
        </a>
      </button>
      <SocialStack/>
      </li>
    </ul>
  );
}
