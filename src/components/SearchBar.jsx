import React from 'react'

function SearchBar({ searchTerm, onSearch }) {
  return (
    <label className="search-bar">
      <span>Search projects</span>
      <input
        type="search"
        value={searchTerm}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search by title, client, or category"
        aria-label="Search projects"
      />
    </label>
  )
}

export default SearchBar
