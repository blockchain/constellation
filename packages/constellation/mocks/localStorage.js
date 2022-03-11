const localStorageMock = (() => {
  let store = {}

  return {
    clear: () => {
      store = {}
    },
    getItem: (key) => {
      return store[key]
    },
    removeItem: (key) => {
      delete store[key]
    },
    setItem: (key, value) => {
      store[key] = value.toString()
    },
  }
})()
Object.defineProperty(window, 'localStorage', { value: localStorageMock })

beforeEach(() => {
  localStorage.clear()
})
