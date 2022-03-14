const createMatchMediaMock = () => {
  const originalMatchMedia = window.matchMedia

  return {
    mock: ({ matches = false } = {}) => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        addEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
        matches,
        media: query,
        onchange: null,
        removeEventListener: jest.fn(),
      }))
    },
    reset: () => {
      window.matchMedia = originalMatchMedia
    },
  }
}

export { createMatchMediaMock }
