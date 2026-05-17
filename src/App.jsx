import React, { useMemo, useState } from 'react'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import './App.css'

const initialProjects = [
  {
    id: 1,
    title: 'Brand vision refresh',
    client: 'Luna Labs',
    category: 'Branding',
    description: 'A full identity system with brand strategy, iconography, and landing page visuals.',
    year: 2025,
    url: 'https://example.com/brand-vision-refresh',
  },
  {
    id: 2,
    title: 'Interactive campaign launch',
    client: 'Volt Media',
    category: 'Campaign',
    description: 'Multi-channel launch experience with immersive visuals and social storytelling.',
    year: 2024,
    url: 'https://example.com/interactive-campaign',
  },
  {
    id: 3,
    title: 'E-commerce redesign',
    client: 'Arcadia Goods',
    category: 'Web Design',
    description: 'Modern storefront redesign optimized for conversions and product discovery.',
    year: 2024,
    url: 'https://example.com/e-commerce-redesign',
  },
  {
    id: 4,
    title: 'Mobile app UX update',
    client: 'Strive Health',
    category: 'UI/UX',
    description: 'Simplified flows, refreshed style system, and performance-focused interactions.',
    year: 2025,
    url: 'https://example.com/mobile-ux-update',
  },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) {
      return projects
    }

    return projects.filter(project => {
      return [project.title, project.client, project.category, project.description]
        .join(' ')
        .toLowerCase()
        .includes(query)
    })
  }, [projects, searchTerm])

  const handleAddProject = project => {
    setProjects(prev => [project, ...prev])
  }

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Creative agency portfolio</span>
          <h1>Showcase completed projects with a polished agency experience.</h1>
          <p>
            Build a living portfolio that can grow over time, highlight client work, and make it easy for
            collaborators to explore your best campaigns.
          </p>
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-value">{projects.length}</span>
            <p>Projects in the portfolio</p>
          </div>
          <div className="stat-card soft-card">
            <span className="stat-value">Responsive</span>
            <p>Designed for desktop and mobile</p>
          </div>
        </div>
      </header>

      <main>
        <ProjectForm onAddProject={handleAddProject} />

        <section className="projects-section">
          <div className="section-header">
            <div>
              <span className="section-label">Featured work</span>
              <h2>Browse the latest creative projects</h2>
            </div>
            <p>{filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} available</p>
          </div>

          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  )
}

export default App
