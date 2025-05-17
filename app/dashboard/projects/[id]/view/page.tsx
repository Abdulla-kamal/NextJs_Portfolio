import Image from "next/image";
import { getProjectById } from "../../../../lib/actions";
import BackButton from "../../../../ui/dashboard/BackButton";

export default async function page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const { id } = params;
  const project = await getProjectById(id);

  return (
    <div className="w-full">
      <BackButton />
      <div className="h-screen w-[95%] overflow-hidden flex items-center gap-15 max-xl:flex-col m-auto z-900">
        {/* Left Side  */}
        <div className="h-screen w-1/2 flex flex-col items-center justify-center gap-40 max-xl:w-full">
          <h1 className="text-2xl font-bold text-white/60">{project.name}</h1>
          <p className="text-lg">
            {project.description} Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Officia ea sint quod animi harum enim, suscipit
            quae porro architecto ad eveniet tempora.
          </p>
        </div>
        {/* Right Side  */}
        <div className="w-1/2 overflow-hidden flex items-center justify-center max-xl:w-full"> 
          <Image
            className="transform transition hover:scale-120 duration-700 ease-in-out w-full"
            width={200}
            height={200}
            src="/test.png"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}
