import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  if (!projects.length) {
    return (
      <div className="empty-state">
        <h3>No matching projects yet</h3>
        <p>Try a different search term or add a new project to showcase here.</p>
      </div>
    )
  }

  return (
    <div className="project-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
