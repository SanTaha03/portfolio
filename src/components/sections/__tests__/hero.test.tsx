import { render, screen } from '@testing-library/react'
import { Hero } from '../hero'

// Nous utilisons déjà des mocks globaux pour GSAP et les composants 3D dans jest.setup.ts
// Mais pour ce test spécifique, nous nous assurons que le composant HeroScene (lazy loaded) est géré

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div data-testid="hero-scene-mock">Hero Scene</div>
  DynamicComponent.displayName = 'LoadableComponent'
  return DynamicComponent
})

describe('Hero Section', () => {
  it('renders without crashing even with GSAP and 3D', () => {
    render(<Hero />)
    // Comme le titre et les éléments sont animés, ils sont techniquement dans le DOM
    // même s'ils ont opacité 0 au début (géré par GSAP).
    // Après le mock de GSAP, ils devraient être rendus.
    
    // On vérifie la présence du conteneur scene 3D
    // Note: next/dynamic est asynchrone, donc le rendu immédiat pourrait ne pas l'avoir 
    // ou afficher le loading. Cependant, notre mock ci-dessus force un rendu immédiat.
    expect(screen.getByTestId('hero-scene-mock')).toBeInTheDocument()
  })
})
