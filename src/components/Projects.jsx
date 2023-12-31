import React from "react";

import cartimg from "../assets/images/cartimg.png";
import ProjectDescription from "./ProjectDescription";
const Projects = () => {
  const project = [
    {
      id: 1,
      title: "Analytics Features to Improve User Experience",
      description:
        "Create screens directly in Method oradd your imagesfrom Sketch or Figma.",
      image: cartimg,
    },
    {
      id: 2,
      title: "Analytics Features to Improve User Experience",
      description:
        "Create screens directly in Method oradd your imagesfrom Sketch or Figma.",
      image: cartimg,
    },
    {
      id: 3,
      title: "Analytics Features to Improve User Experience",
      description:
        "Create screens directly in Method oradd your imagesfrom Sketch or Figma.",
      image: cartimg,
    },
  ];
  return (
    <div className="p-4">
      <h1 className="text-center p-2">All Projects</h1>

      <div className="row text-center">
        {project.map((project, index) => {
          return (
            <ProjectDescription
              key={project.id || index}
              title={project.title}
              description={project.description}
              img={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
