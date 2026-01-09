import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock des sections pour isoler le test de la page principale
jest.mock('@/components/sections/hero', () => ({
  Hero: () => <div data-testid="hero-section">Hero Section</div>
}))
jest.mock('@/components/sections/about', () => ({
  About: () => <div data-testid="about-section">About Section</div>
}))
jest.mock('@/components/sections/skills', () => ({
  Skills: () => <div data-testid="skills-section">Skills Section</div>
}))
jest.mock('@/components/sections/services', () => ({
  Services: () => <div data-testid="services-section">Services Section</div>
}))
jest.mock('@/components/sections/projects', () => ({
  Projects: () => <div data-testid="projects-section">Projects Section</div>
}))
jest.mock('@/components/sections/contact', () => ({
  Contact: () => <div data-testid="contact-section">Contact Section</div>
}))

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />)

    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('skills-section')).toBeInTheDocument()
    expect(screen.getByTestId('services-section')).toBeInTheDocument()
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
  })
})
