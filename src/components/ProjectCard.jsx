import React from 'react'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-category">{project.category}</span>
        <span className="project-client">{project.client}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-meta">
        <span>{project.year}</span>
        {project.url && (
          <a href={project.url} target="_blank" rel="noreferrer">
            View case study
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
