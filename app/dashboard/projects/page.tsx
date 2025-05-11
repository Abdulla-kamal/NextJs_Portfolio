import { getAllProjects } from "../../lib/actions";
import ProjectsTable from "../../ui/dashboard/Projects-table";

export default async function page() {
  const projects = await getAllProjects();
  // console.log(projects);
  return <ProjectsTable projects={projects} />;
}
