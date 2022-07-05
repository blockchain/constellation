import { createFont } from '../utils'

const { Provider: InterFontProvider } = createFont({
  fontStyles: {
    italic: {
      fontFeatureSettings: "'zero' on, 'ss01' on",
      fontStyle: 'italic',
    },
    numeric: {
      fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
      fontStyle: 'normal',
    },
    regular: {
      fontFeatureSettings: "'zero' on, 'ss01' on",
      fontStyle: 'normal',
    },
  },
  style: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
})

export { InterFontProvider }
