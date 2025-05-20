"use client"
import { useRouter } from "next/navigation";

export default function BackButton() {
     const router = useRouter()
    return(<button className="cursor-pointer border-1 border-main hover:bg-main/10 transition duration-300 p-2 rounded text-white/80 hover:text-white" onClick={()=> router.back()}> {"< "}Back</button>)
}