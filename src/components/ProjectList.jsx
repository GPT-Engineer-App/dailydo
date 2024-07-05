import React from "react";
import { Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProjectList = () => {
  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
  ];

  return (
    <div className="space-y-2">
      {projects.map((project) => (
        <NavLink
          key={project.id}
          to={`/project/${project.id}`}
          className="flex items-center space-x-2 p-2 border rounded"
        >
          <span>{project.name}</span>
        </NavLink>
      ))}
      <button className="flex items-center space-x-2 p-2 border rounded">
        <Plus />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default ProjectList;