import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectForm from './ProjectForm'

describe('ProjectForm', () => {
  it('shows validation error when required fields are missing', async () => {
    const user = userEvent.setup()
    const handleAddProject = vi.fn()

    render(<ProjectForm onAddProject={handleAddProject} />)

    await user.click(screen.getByRole('button', { name: /add project/i }))

    expect(screen.getByText(/please fill in the title, client, and description fields/i)).toBeInTheDocument()
    expect(handleAddProject).not.toHaveBeenCalled()
  })
})
