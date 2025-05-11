"use client";
import Image from "next/image";
import ScrollReveal from "../../lib/ScrollReveal";
import SocialStack from "../SocialStack";
import { House } from "@deemlol/next-icons";
import { FolderPlus } from "@deemlol/next-icons";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSideNav() {
  const pathName = usePathname();
  const sideMenu = [
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
  return (
    <div className="h-screen w-24 xl:w-1/4 p-12 overflow-hidden flex flex-col items-center justify-between fixed  max-xl:hidden z-900">
      <ScrollReveal animationType="scale-fade">
        <Image
          className="mx-auto  transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 m w-[100px]"
          width={100}
          height={100}
          src="/welcome.webp"
          alt="Avatar"
        />
      </ScrollReveal>

      <ul className=" flex flex-col justify-center gap-y-15 text-2xl">
        {sideMenu.map((i, index) => (
          <Link
            href={i.path}
            className="flex gap-10 w-[240px] mx-auto cursor-pointer xs:hidden"
            key={index}
          >
            {i.icon}
            <span
              className={clsx(`rounded-md hover:text-2xl   hover:pl-2`, {
                "text-2xl text-main border-l-2 pl-2": i.path === pathName,
              })}
            >
              {i.title}
            </span>
          </Link>
        ))}
      </ul>
      <SocialStack />
    </div>
  );
}
