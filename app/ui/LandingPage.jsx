"use client";
import { useEffect, useState } from "react";
import ScrollReveal from "../lib/ScrollReveal";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const words = ["websites", "resposive desings", "platforms"];
export default function LandingPagev() {
  const [index, setIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % words.length;
      setDisplayedWord(words[nextIndex]);
      setIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="h-full" id="home">
      {/* Right Col */}
      <div className="h-screen md:container mx-auto flex flex-col w-full justify-center lg:items-start overflow-y-hidden ">
        <ScrollReveal animationType="flip-in">
          <h1 className="my-4 text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center md:text-left">
            Hi, My name is
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-sky-500 to-purple-500">
              &nbsp;Abdulla Kamal&nbsp;
            </span>
            ,
            <br />i develop and design&nbsp;
            <AnimatePresence mode="popLayout">
              {displayedWord.split("").map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}-${index}`} // ensure re-renders on word change
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: i * 0.05, // stagger each letter
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </AnimatePresence>
          </h1>
        </ScrollReveal>
        <ScrollReveal animationType="slide-right">
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-black/60 dark:text-white/60">
            This poertfolio shows information about me!
          </p>
        </ScrollReveal>
      </div>
      {/* Footer */}
      {/* <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a
            className="text-gray-500 no-underline hover:no-underline"
            href="#"
          >
            2020
          </a>
          -
          <a
            className="text-gray-500 no-underline hover:no-underline"
            href="https://www.tailwindtoolbox.com"
          >
            TailwindToolbox.com
          </a>
        </div> */}
    </div>
  );
}
