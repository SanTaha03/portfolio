import '@testing-library/jest-dom'

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver

// Mock GSAP
jest.mock('gsap', () => ({
  registerPlugin: jest.fn(),
  to: jest.fn(),
  from: jest.fn(),
  fromTo: jest.fn(),
  timeline: jest.fn(() => ({
    to: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    fromTo: jest.fn().mockReturnThis(),
  })),
}))

jest.mock('@gsap/react', () => ({
  useGSAP: jest.fn(),
}))

// Mock Three.js / React Three Fiber components
// Since we are testing DOM interaction we don't need real 3D rendering
jest.mock('@react-three/fiber', () => ({
  ...jest.requireActual('@react-three/fiber'),
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="canvas-mock">{children}</div>
  ),
}))

jest.mock('@react-three/drei', () => ({
  ...jest.requireActual('@react-three/drei'),
  OrbitControls: () => null,
  Environment: () => null,
  ContactShadows: () => null,
  Float: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

// Mock ScrollTrigger
jest.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {}
}))
