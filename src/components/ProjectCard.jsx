import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Run Project</a>}
    </div>
  );
};

export default ProjectCard;
