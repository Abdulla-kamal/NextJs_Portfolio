import Image from "next/image";
import ScrollReveal from "../lib/ScrollReveal";

export default function Skills() {
  const skills = [
    {
      name: "Html",
      description: "Hyper Text Mark Up Language",
      img: "/skills/html.png",
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      name: "CSS3",
      description: "Cascading Style Sheet",
      img: "/skills/css.png",
      link:'https://www.w3schools.com/Css/'
    },
    {
      name: "JavaScript",
      description: "Scriting Language",
      img: "/skills/js.png",
       link:'https://www.w3schools.com/Js/'
    },
    {
      name: "React",
      description: "JavaScript Framework",
      img: "/skills/react.png",
       link:'https://react.dev/'
    },
    {
      name: "tailwindCss",
      description: "Css Framework",
      img: "/skills/tailwindCss.png",
       link:'https://tailwindcss.com/'
    },
    {
      name: "Material UI (MUI)",
      description: "Popular React Component Library",
      img: "/skills/material_ui.png",
      link:'https://mui.com/material-ui/'
    },
    {
      name: "Git",
      description: "Version Control System",
      img: "/skills/git.png",
       link:'https://git-scm.com/'
    },
    {
      name: "SASS",
      description: "Syntactically Awesome Style Sheets",
      img: "/skills/sass.png",
       link:'https://sass-lang.com/'
    },
  ];

  return (
        <ScrollReveal animationType="slide-up">
    <section className="pb-15 pl-5" id="skills">
      <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Skills
      </h2>
      <p className="mt-4 text-gray-500 dark:text-gray-300">
        Technologies and Tools Empowering My Frontend Projects
      </p>
      {/* Skills Container  */}
      <div className="mt-20 flex space-x-4 flex-wrap justify-around gap-y-20">
        {skills.map((skill, index) => (
          <div
            className="flip-card w-1/2 bg-blue-500 text-white p-4"
            key={index}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Image src={skill.img} alt="html" width={200} height={200} />
              </div>
              <div className="flip-card-back flex flex-col text-center">
                <h2 className="mt-4 text-xl text-black dark:text-white font-semibold uppercase">
                  {skill.name}
                </h2>

                <a
                  href={skill.link}
                  className="mt-2 text-lg font-thin tracking-wider text-blue-400 capitalize hover:underline hover:decoration-solid"
                >
                  {skill.description}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </ScrollReveal>
  );
}
