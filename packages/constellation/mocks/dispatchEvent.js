const dispatchEventMock = (() => {
  const originalDispatchEvent = window.dispatchEvent

  return jest.fn(originalDispatchEvent)
})()

Object.defineProperty(window, 'dispatchEvent', { value: dispatchEventMock })

beforeEach(() => {
  jest.clearAllMocks()
})
