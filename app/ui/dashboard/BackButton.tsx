"use client"
import { useRouter } from "next/navigation";

export default function BackButton() {
     const router = useRouter()
    return(<button className="cursor-pointer" onClick={()=> router.back()}> {"<<"}Back</button>)
}