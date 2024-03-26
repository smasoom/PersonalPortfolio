// Projects.tsx

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center " id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubLink="https://github.com/your-username/next-website-repo"
          deployLink="https://your-next-website-deployed-link.com"
        />
        <ProjectCard
          src="/article.png"
          title="Summarize Article"
          description="Introducing a dynamic and user-friendly website dedicated to summarizing articles—your one-stop destination for concise and informative content."
          githubLink="https://github.com/your-username/article-summary-repo"
          deployLink="https://your-article-summary-deployed-link.com"
        />
        <ProjectCard
          src="/food.jpeg"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubLink="https://github.com/your-username/space-themed-repo"
          deployLink="https://your-space-themed-deployed-link.com"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubLink="https://github.com/your-username/next-website-repo"
          deployLink="https://your-next-website-deployed-link.com"
        />
        <ProjectCard
          src="/article.png"
          title="Summarize Article"
          description="Introducing a dynamic and user-friendly website dedicated to summarizing articles—your one-stop destination for concise and informative content."
          githubLink="https://github.com/your-username/article-summary-repo"
          deployLink="https://your-article-summary-deployed-link.com"
        />
        <ProjectCard
          src="/food.jpeg"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubLink="https://github.com/your-username/space-themed-repo"
          deployLink="https://your-space-themed-deployed-link.com"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubLink="https://github.com/your-username/next-website-repo"
          deployLink="https://your-next-website-deployed-link.com"
        />
        <ProjectCard
          src="/article.png"
          title="Summarize Article"
          description="Introducing a dynamic and user-friendly website dedicated to summarizing articles—your one-stop destination for concise and informative content."
          githubLink="https://github.com/your-username/article-summary-repo"
          deployLink="https://your-article-summary-deployed-link.com"
        />
        <ProjectCard
          src="/food.jpeg"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubLink="https://github.com/your-username/space-themed-repo"
          deployLink="https://your-space-themed-deployed-link.com"
        />
      </div>
    </div>
  );
};

export default Projects;
