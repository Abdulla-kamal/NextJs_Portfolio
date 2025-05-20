"use client";
import { useRouter } from "next/navigation";
import { Project } from "../../lib/types";

type ProjectsTableProps = {
  projects: Project[];
};
export default function ProjectsTable({ projects }: ProjectsTableProps) {
  const router = useRouter();
  function handleRowClick(id: number) {
    router.push(`/dashboard/projects/${id}/view`);
  }
  return (
    <div className="p-6 max-xl:w-full mt-10">
      <h1 className="text-2xl font-bold mb-4">All Projects</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-sky-500/10 text-gray-100">
            <tr>
              <th className="px-4 py-5 text-left">ID</th>
              <th className="px-4 py-5 text-left">Name</th>
              <th className="px-4 py-5 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project) => (
              <tr
                key={project.id}
                className="border-b border-main/10 cursor-pointer hover:border-main"
                onClick={() => handleRowClick(project.id)}
              >
                <td className=" px-4 py-5">{project.id}</td>
                <td className=" px-4 py-5">{project.name}</td>
                <td className=" px-4 py-5">{project.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
