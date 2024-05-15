import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    url: 'https://github.com/yourusername/project1',
    demoUrl: 'https://yourusername.github.io/project1-demo'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
