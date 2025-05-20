"use client";
import Link from "next/link";


export default function EditButton({
  classProperty,
}: {
  classProperty: string;
}) {

  return (
    <div className={"w-full block " + classProperty}>
      <Link href={"view/update"} className="block w-full  border-1 border-main/60 hover:bg-main/10 transition duration-300 text-white/80 px-4 py-2 rounded-sm transition duration-300 ease-in-out cursor-pointer text-center">
    
        Edit
    
      </Link>
    </div>
  );
}
