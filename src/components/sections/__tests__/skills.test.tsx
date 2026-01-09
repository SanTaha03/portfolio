import { render, screen } from '@testing-library/react'
import { Skills } from '../skills'

describe('Skills Section', () => {
  it('renders correctly', () => {
    render(<Skills />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText(/Vue.js/i)).toBeInTheDocument()
    expect(screen.getByText(/Laravel/i)).toBeInTheDocument()
  })
})
