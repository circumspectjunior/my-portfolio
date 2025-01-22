import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projectList = [
    { title: "Project 1", description: "Description of project 1", link: "#" },
    { title: "Project 2", description: "Description of project 2", link: "#" },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;
