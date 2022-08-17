export default Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    // deprecated
    addEventListener: jest.fn(),

    addListener: jest.fn(),

    dispatchEvent: jest.fn(),

    matches: false,
    media: query,

    onchange: null,

    removeEventListener: jest.fn(),
    // deprecated
    removeListener: jest.fn(),
  })),
  writable: true,
})

// Mock required to help Storyshots render components with React Portals in snapshot tests
jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom')
  return { ...original, createPortal: (node: unknown) => node }
})
