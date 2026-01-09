import { render, screen } from '@testing-library/react'
import { Services } from '../services'

describe('Services Section', () => {
  it('renders correctly', () => {
    render(<Services />)
    expect(screen.getByText('Développement Web')).toBeInTheDocument()
    expect(screen.getByText('Refonte Frontend')).toBeInTheDocument()
    expect(screen.getByText('Développement API')).toBeInTheDocument()
  })
})
