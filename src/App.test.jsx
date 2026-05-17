import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the landing page and project list', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /showcase completed projects/i })).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: /search projects/i })).toBeInTheDocument()
    expect(screen.getByText(/projects available/i)).toBeInTheDocument()
  })

  it('allows adding a new project and filtering by search', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/project title/i), 'Launch identity')
    await user.type(screen.getByLabelText(/client name/i), 'Echo Labs')
    await user.type(screen.getByLabelText(/description/i), 'A brand refresh for a startup.')
    await user.click(screen.getByRole('button', { name: /add project/i }))

    expect(screen.getByText(/launch identity/i)).toBeInTheDocument()

    await user.type(screen.getByRole('searchbox', { name: /search projects/i }), 'Echo')
    expect(screen.getByText(/launch identity/i)).toBeInTheDocument()
  })
})
