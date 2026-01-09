import { render, screen } from '@testing-library/react'
import { Projects } from '../projects'

describe('Projects Section', () => {
  it('renders correctly', () => {
    render(<Projects />)
    expect(screen.getByText('E-commerce Dashboard')).toBeInTheDocument()
    expect(screen.getByText('SaaS Booking Platform')).toBeInTheDocument()
    expect(screen.getByText(/Vue.js/i)).toBeInTheDocument()
  })
})
