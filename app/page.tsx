import Header from "./ui/Header";
import LandingPage from "./ui/LandingPage";
import About from "./ui/About";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";
import { fetchProjects } from "./lib/data";





export default async function Home() {
  const data = await fetchProjects();
  return (
    <>
      <Header />
      <div className="max-sm:container mx-auto mx-auto flex flex-col flex-wrap justify-between xl:ml-[400px] ">
        <LandingPage />
        <About />
        <Projects repos={data}/>
        <Skills/>
        {/* <Test/> */}
      </div>
    </>
  );
}
