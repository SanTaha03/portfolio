import { render, screen } from '@testing-library/react'
import { About } from '../about'

describe('About Section', () => {
  it('renders correctly', () => {
    render(<About />)
    expect(screen.getByText(/À propos de/i)).toBeInTheDocument()
    expect(screen.getByText(/TADIL Taha/i)).toBeInTheDocument()
    // Test section ID for navigation
    const section = screen.getByText(/À propos de/i).closest('section')
    expect(section).toHaveAttribute('id', 'about')
  })
})
