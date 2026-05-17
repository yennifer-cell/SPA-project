import React, { useState } from 'react'

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('')
  const [client, setClient] = useState('')
  const [category, setCategory] = useState('Branding')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (!title.trim() || !client.trim() || !description.trim()) {
      setError('Please fill in the title, client, and description fields.')
      return
    }

    onAddProject({
      id: Date.now(),
      title: title.trim(),
      client: client.trim(),
      category,
      description: description.trim(),
      url: url.trim(),
      year: new Date().getFullYear(),
    })

    setTitle('')
    setClient('')
    setCategory('Branding')
    setDescription('')
    setUrl('')
    setError('')
  }

  return (
    <section className="form-card">
      <div className="form-header">
        <h2>Add a new project</h2>
        <p>Keep the portfolio fresh by adding new campaigns and client work.</p>
      </div>
      <form onSubmit={handleSubmit} className="project-form">
        <label>
          Project title
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g. Product launch redesign"
            aria-label="Project title"
          />
        </label>
        <label>
          Client name
          <input
            type="text"
            value={client}
            onChange={e => setClient(e.target.value)}
            placeholder="e.g. Nova Studio"
            aria-label="Client name"
          />
        </label>
        <label>
          Category
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>Branding</option>
            <option>Web Design</option>
            <option>Campaign</option>
            <option>UI/UX</option>
          </select>
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Describe the problem solved and the visual direction."
            rows="4"
            aria-label="Project description"
          />
        </label>
        <label>
          URL (optional)
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://example.com"
            aria-label="Project URL"
          />
        </label>
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="primary-button">
          Add project
        </button>
      </form>
    </section>
  )
}

export default ProjectForm
