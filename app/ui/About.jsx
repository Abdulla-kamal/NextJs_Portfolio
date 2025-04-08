"use client";
import ScrollReveal from "../lib/ScrollReveal";
import { motion, useInView } from "framer-motion";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="container mx-auto pt-15 pb-15 z-100" id="about-me">
      <div className="flex flex-col gap-y-20 ">
            <ScrollReveal animationType="slide-up">
        <section className="ml-5 flex flex-col gap-y-5 md:w-3/4 max-sm:pr-2">
          <ScrollReveal >
            <h2 className=" font-bold text-4xl" style={{ margin: "0" }}>
              Abdulla Kamal
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-black/44 dark:text-white/44 text-lg m-0">
              Front-End Developer
            </h2>
          </ScrollReveal>
          <ScrollReveal animationType="slide-left">
            <p
              className="md:text-lg sm:text-sm mt-5"
              style={{ lineHeight: "2" }}
            >
              Hi, I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-sky-500 to-purple-500">
                &nbsp;Abdulla Kamal&nbsp;
              </span>
              , a passionate front-end developer based in Libya. I hold a degree
              in Computer Science from the University of Benghazi, and I’ve been
              immersed in coding and web design since embarking on my digital
              journey in 2020.
            </p>
          </ScrollReveal>
          <ScrollReveal animationType="slide-right">
            <p
              className="md:text-lg sm:text-sm mt-5"
              style={{ lineHeight: "2" }}
            >
              My programming career began with Java, but I soon found my calling
              in web development, mastering HTML, CSS, and JavaScript. I
              specialize in crafting responsive websites and am continuously
              working toward refining my skills to achieve greater
              professionalism in this field
            </p>
          </ScrollReveal>
          <ScrollReveal animationType="slide-left">
            <p
              className="md:text-lg sm:text-sm mt-5"
              style={{ lineHeight: "2" }}
            >
              Over the years, I’ve developed various projects, including
              training-focused games and interactive website pages—all of which
              are showcased in the projects section. I am currently open to work
              and excited to collaborate on new challenges that push creativity
              and innovation forward.
            </p>
          </ScrollReveal>
        </section>
        </ScrollReveal>
        {/* <section className="ml-5 flex flex-col gap-y-5 w-3/4 self-end text-center">
          <h2 className="text-white font-bold text-4xl ">A Quick Overview</h2>
          <p className="text-xl text-white/60">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-sky-500 to-purple-500">
              &nbsp;Abdulla Kamal&nbsp;
            </span>{" "}
            ,a Front-End Developer from Libya, I'm intersted in Code, Design,
            and learn new technologies.
          </p>
        </section> */}
      </div>
    </div>
  );
}
