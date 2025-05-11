import clsx from "clsx";
import SocialStack from "./SocialStack";

export default function MobileMenu({ open, place }) {
  return (
    <ul
      className={clsx(
        "w-full absolute bg-white-500/60 dark:bg-gray-900/60 text-black dark:text-white backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col gap-y-2 top-[100px] left-0 z-50 xl:hidden transition-opacity duration-300 ease-in-out",
        {
          "opacity-100 translate-y-0": open, // Fully visible and in place when open
          "opacity-0 -translate-y-5 pointer-events-none": !open, // Hidden and slightly moved up when closed
        }
      )}
    >
      {place ==="dashboard" ? (
        <>
          <li>Add Project</li>
          <li>Show Project</li>
        </>
      ) : (
        <>
          <li>Homw</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Skills</li>
        </>
      )}
      <li className="flex items-end">
          <button className="bg-main w-full rounded-md p-2 font-bold cursor-pointer h-10  ">
        <a href="/cv.pdf" download="cv.pdf" className="block">
          CV
        </a>
      </button>
      <SocialStack/>
      </li>
    </ul>
  );
}
