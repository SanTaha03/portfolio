import { render, screen } from '@testing-library/react'
import { Contact } from '../contact'

describe('Contact Section', () => {
  it('renders correctly', () => {
    render(<Contact />)

    // Vérification des textes principaux
    expect(screen.getByText(/Parlons de votre projet/i)).toBeInTheDocument()
    expect(screen.getByText(/contact@tahatadil.com/i)).toBeInTheDocument()

    // Vérification des champs du formulaire
    expect(screen.getByPlaceholderText(/John Doe/i)).toBeInTheDocument() // Input Nom
    expect(screen.getByPlaceholderText(/john@example.com/i)).toBeInTheDocument() // Input Email
    expect(screen.getByPlaceholderText(/Décrivez brièvement votre projet/i)).toBeInTheDocument() // Textarea
    
    // Vérification du bouton
    expect(screen.getByRole('button', { name: /Envoyer le message/i })).toBeInTheDocument()
  })
})
