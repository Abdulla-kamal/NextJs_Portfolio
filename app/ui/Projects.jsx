"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../lib/ScrollReveal";
import { fetchProjects } from "../lib/data";



export default function Projects({repos}) {
  const [show, setShow] = useState(false);
console.log(repos)
  // const repos = async function(){
  //   const data = await fetchProjects();
  //   console.log(data)
  //   return data ? data : [];
  // };
  // console.log(s);

  const hash = Math.random().toString(36).substring(2); // Random string yo change cashing and updating images
  return (
    <section className="pb-15" id="projects">
      <div className="container px-6 py-10 mx-auto">
        <ScrollReveal animationType="slide-up">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Projects
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            A curated collection of projects uploaded to GitHub.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {repos?.slice(0, 6)?.map((repo, index) => (
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url(https://opengraph.githubassets.com)`,
                backgroundSize: "contain", // Change this line
                backgroundPosition: "center", // Add this line
                backgroundRepeat: "no-repeat", // Add this line
              }}
              key={index}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Jumb to project
                </h2>
                <a
                  href={repo.html_url}
                  className="mt-2 text-lg tracking-wider text-blue-400 uppercase hover:underline hover:decoration-solid"
                >
                  {repo.name}
                </a>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              key="card-wrapper"
              className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {repos?.slice(4)?.map((repo, index) => (
                <div
                  className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                  style={{
                    backgroundImage: `url(https://opengraph.githubassets.com/${hash}/${repo.owner.login}/${repo.name})`,
                    backgroundSize: "contain", // Change this line
                    backgroundPosition: "center", // Add this line
                    backgroundRepeat: "no-repeat", // Add this line
                  }}
                  key={index}
                >
                  <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                      Jumb to project
                    </h2>
                    <a
                      href={repo.html_url}
                      className="mt-2 text-lg tracking-wider text-blue-400 uppercase hover:underline hover:decoration-solid"
                    >
                      {repo.name}
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex">
          {repos && show === false && (
            <button
              className="w-50 mx-auto text-center cursor-pointer text-blue-400 hover:underline  "
              onClick={() => setShow((prev) => !prev)}
            >
              Show more projects ...
            </button>
          )}
          {show && (
            <button
              className="w-50 mx-auto text-center cursor-pointer text-blue-400 hover:underline "
              onClick={() => setShow((prev) => !prev)}
            >
              Show less{" "}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
