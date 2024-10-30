// Projects.tsx

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center  " id="project ">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/cardetect.png"
          title="Car Detection-Traffic-video"
          description="The algorithm detects and tags light-coloured cars. Adjusts to parameters such as threshold values may be necessary for optimal performance on different videos."
          githubLink="https://github.com/your-username/next-website-repo"
          deployLink="https://your-next-website-deployed-link.com"
        />
        <ProjectCard
        src="/port.png"
        
          title="Personal Portfolio

          "
          description="
          TypeScript, Next.js, and Tailwind CSS, incorporating Motion UI for dynamic and visually appealing user interactions.."
          githubLink="https://github.com/smasoom/PersonalPortfolio"
          deployLink="https://personal-portfolio-mu-gray.vercel.app/"
        />
        <ProjectCard
          src="/Project3.png"
          // src="/food.jpeg"
          title=" Grafiny"
          description="Grafiny allows you to share/view notes, assignments, lab works and other resources published by user."
          githubLink="https://github.com/gdsc-nits-org/grafiny-client"
          deployLink="https://grafiny-nits.netlify.app/"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
            src="/article.png"
          title="Article Summarizer"
          description=" Web App offers an innovative solution for summarizing lengthy articles. ReactJS , Tailwind CSS  and PNPM Vite for efficient package management"
          githubLink="https://github.com/smasoom/ArticleInsight/tree/main/Synop_Sage"
          deployLink="https://summariser-eight.vercel.app/"
        />
        <ProjectCard
          src="/incand.jpeg"
          title="Summarize Article"
          description="
          
          Incandescence Website
          The website of Incandescence 2023, developed by GDSC NIT Silchar Team
         "
          githubLink="https://github.com/smasoom/incand-website"
          deployLink="incand.in"
        />
        <ProjectCard
         
          src="/food.jpeg"
          
          title="GoSpoon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          githubLink="https://github.com/smasoom/GoSpoon"
          deployLink="https://gospoon.netlify.app/"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
         src="/comment.png"
          title="Comment_Component"
          description="Infinitely Nested Comments System Using Javascript library React"
          githubLink="https://github.com/smasoom/Comment_Component"
          deployLink="https://comment-component-two.vercel.app/"
        />
        <ProjectCard
          src="/shadow.png"
          title="BoxShadow-Generator"
          description="A Customizable tool generating CSS box shadows.Developed using Frontend Javascript Library ReactJS and CSS, JS, Git Utilized responsive"
          githubLink="https://github.com/smasoom/BoxShadow-Generator"
          deployLink="https://boxshadowgenerate.netlify.app/"
        />
        <ProjectCard
          src="/datana.png"
          title="Student Result Analysis"
          description="Project using Python with libraries like Matplotlib, Seaborn, NumPy, and pandas allows for comprehensive data analysis and visualization. "
          githubLink="https://github.com/smasoom/Analyze-Student-Results"
          deployLink="https://github.com/smasoom/Analyze-Student-Results"
        />
      </div>
    </div>
  );
};

export default Projects;
