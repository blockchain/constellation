import { createFont } from '../utils'

const { Provider: InterFontProvider } = createFont({
  style: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
})

export { InterFontProvider }
