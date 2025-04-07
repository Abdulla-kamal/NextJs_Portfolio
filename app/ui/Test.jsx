import { AlarmClock } from "@deemlol/next-icons";

export default function Test() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap  text-black gap-5 m-0 justify-center p-15">
        <div className="flex rounded-xl bg-white items-center justify-around gap-15 p-5">
          <img className="size-50 shadow-xl" src="/welcome.webp" alt="" />
          <div className="flex flex-col gap-y-5 p-5 ">
            <h2 className="text-black font-bold text-2xl">Erin Lindford</h2>
            <p className="text-black opacity-60">Product Engineer</p>
            <button className="bg-sky-400 rounded-md hover:bg-sky-700 hover:text-white transition p-3 " style={{cursor:'pointer'}}>Click Heree</button>
          </div>
        </div>
        <div className="flex rounded-xl bg-white items-center justify-around gap-15 p-5">
          <img className="size-50 shadow-xl" src="/welcome.webp" alt="" />
          <div className="flex flex-col gap-y-5 p-5 ">
            <h2 className="text-black font-bold text-2xl">Erin Lindford</h2>
            <p className="text-black/60">Product Engineer</p>
            <button className="bg-sky-400 rounded-md hover:bg-sky-700 hover:text-white transition p-3" style={{cursor:'pointer'}}>Click Heree</button>
          </div>
        </div>
        <div className="flex rounded-xl bg-white items-center justify-around gap-15 p-5">
          <img className="size-50 shadow-xl" src="/welcome.webp" alt="" />
          <div className="flex flex-col gap-y-5 p-5 ">
            <h2 className="text-black font-bold text-2xl">Erin Lindford</h2>
            <p className="text-black opacity-60">Product Engineer</p>
            <button className="bg-cyan-600  rounded-md hover:bg-sky-700 hover:text-white transition p-3" style={{cursor:'pointer'}}>Click Heree</button>
          </div>
        </div>
        <div className="flex rounded-xl bg-white items-center justify-around gap-15 p-5">
          <img className="size-50 shadow-xl" src="/welcome.webp" alt="" />
          <div className="flex flex-col gap-y-5 p-5 ">
            <h2 className="text-black font-bold text-2xl">Erin Lindford</h2>
            <p className="text-black opacity-60">Product Engineer</p>
            <button className="bg-sky-400 rounded-md hover:bg-sky-700 hover:text-white transition p-3" style={{cursor:'pointer'}}>Click Heree</button>
          </div>
        </div>
        <div className="flex rounded-xl bg-white items-center justify-around gap-15 p-5">
          <img className="size-50 shadow-xl" src="/welcome.webp" alt="" />
          <div className="flex flex-col gap-y-5 p-5 ">
            <h2 className="text-black font-bold text-2xl">Erin Lindford</h2>
            <p className="text-black opacity-60">Product Engineer</p>
            <button className="bg-sky-400 rounded-md hover:bg-sky-700 hover:text-white transition p-3" style={{cursor:'pointer'}}>Click Heree</button>
          </div>

       
      </div>

      <div className="flex gap-5 bg-zinc-700 h-[fit-content] p-[20px] rounded-md ">
          <AlarmClock size={24} color="#FFFFFF" className="before:w-full before:h-full before:bg-white/60"/>
          <div className="flex flex-col gap-5">
          <p className="text-white/60"><span className="font-bold text-white/100"></span> mentioned you in Logo redesign</p>
          </div>
          </div>
      </div>
    </>
  );
}
