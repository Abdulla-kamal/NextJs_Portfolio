"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../lib/ScrollReveal";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [firstProj, setFirstProj] = useState([]);
  const [show, setShow] = useState(false);
  async function fetchRepos() {
    try {
      const res = await axios.get(
        `https://api.github.com/users/Abdulla-Kamal/repos`
      );

      setRepos(res.data.slice(4));
      setFirstProj(res.data.slice(0, 6));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  const hash = Math.random().toString(36).substring(2); // Random string yo change cashing and updating images
  return (
    <ScrollReveal animationType="slide-up">
      <section className="pb-15" id="projects">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Projects
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            A curated collection of projects uploaded to GitHub.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {firstProj?.map((repo, index) => (
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
                {show &&
                  repos?.map((repo, index) => (
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
            {firstProj && show === false && (
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
    </ScrollReveal>
  );
}
