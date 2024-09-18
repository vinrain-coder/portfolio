import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        <ProjectCard
          src="/NextWebsite.png"
          title="E-commerce Platform"
          description="Created a robust e-commerce platform with a dynamic product catalog, secure payments, and a mobile-friendly design for enhanced shopping experiences."
          url="#"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Blog Website"
          description="Developed a vibrant blog platform with intuitive navigation, customizable layouts, and SEO optimization for engaging content delivery."
          url="#"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="E-learning Platform"
          description="Designed an interactive e-learning portal featuring multimedia support, progress tracking, and user-friendly course management for seamless online education."
          url="#"
        />
      </div>
    </div>
  );
};

export default Projects;
