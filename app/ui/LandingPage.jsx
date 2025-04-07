"use client";
import { useEffect, useState } from "react";
import SideBar from "./SideBar"
import Header from "./Header";
export default function LandingPagev() {
  const [elts, setElts] = useState({
    text: null,
  });

  const texts = ["websites", "resposive desings", "platforms"];

  const morphTime = 1;
  const cooldownTime = 0.25;

  let textIndex = 0;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  useEffect(() => {
    const text = document.getElementById("text");
    setElts({ text });
  }, []);

  useEffect(() => {
    if (elts.text) {
      function doMorph() {
        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 2;
        }

        setMorph(fraction);
      }
      function setMorph(fraction) {
        fraction = 1 - fraction;
        elts.text.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text.textContent = texts[textIndex % texts.length];
      }

      function doCooldown() {
        morph = 0;

        elts.text.style.opacity = "0%";
      }

      function animate() {
        requestAnimationFrame(animate);

        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex = (textIndex + 1) % texts.length;
            elts.text.textContent = texts[textIndex];
          }

          doMorph();
        } else {
          doCooldown();
        }
      }

      animate();
    }
  }, [elts]);

  

  return (
    <div className="h-full"  id="home">
       
        {/* Right Col */}
        <div className="h-screen md:container mx-auto flex flex-col w-full justify-center lg:items-start overflow-y-hidden ">
          <h1 className="my-4 text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center md:text-left">
            Hi, My name is
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-sky-500 to-purple-500">
              &nbsp;Abdulla Kamal&nbsp;
            </span>
            ,
            <br />i develop and design&nbsp;
            <span id="text"></span>
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-black/60 dark:text-white/60">
            This poertfolio shows information about me!
          </p>
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
