import Header from "./ui/Header";
import LandingPage from "./ui/LandingPage";
import About from "./ui/About";
import Projects from "./ui/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" mx-auto flex flex-col flex-wrap justify-between xl:ml-[400px] ">
        <LandingPage />
        <About />
        <Projects />
        {/* <Test/> */}
      </div>
    </>
  );
}
