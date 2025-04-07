"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  console.log("Fetching GitHub repos...");

  const username = "Abdulla-Kamal"; // Replace with your GitHub username
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("Fetched Data:", data); // Debugging log

    return {
      props: { repos: data || [] },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return { props: { repos: [] } };
  }
}

export default function Projects() {
  const [repos, setRepos] = useState();
  async function fetchRepos() {
    try {
      const res = await axios.get(
        `https://api.github.com/users/Abdulla-Kamal/repos`
      );
      setRepos(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchRepos();
  }, []);

  const hash = Math.random().toString(36).substring(2); // Random string yo change cashing and updating images
  return (
    <section className="" id="projects">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Projects
        </h1>
        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          A curated collection of projects uploaded to GitHub.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {repos?.map((repo, index) => (
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
                <a href={repo.html_url} className="mt-2 text-lg tracking-wider text-blue-400 uppercase hover:underline hover:decoration-solid">
                  {repo.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
