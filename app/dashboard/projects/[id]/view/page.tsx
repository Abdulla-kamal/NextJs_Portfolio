
import { getProjectById } from "../../../../lib/actions";
import BackButton from "../../../../ui/dashboard/BackButton";



export default async function page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
    const {id} = params;
    const project = await getProjectById(id);
   
  return (
  <div className="h-screen w-24 xl:w-1/4 p-12 overflow-hidden flex flex-col items-center justify-between fixed  max-xl:hidden z-900">
    <BackButton/>
      <div className="flex flex-col justify-center gap-y-15 text-2xl">
        <h1>Project : {project.name}</h1>
        <p>Project Id : {id}</p>
        <p>Description : {project.description}</p>
      </div>
    </div>
  );
}
