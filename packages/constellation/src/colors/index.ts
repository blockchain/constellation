import blue from './palettes/blue'
import green from './palettes/green'
import grey from './palettes/grey'
import greyDark from './palettes/greyDark'
import orange from './palettes/orange'
import purple from './palettes/purple'
import red from './palettes/red'
import teal from './palettes/teal'
import white from './palettes/white'
import whiteDark from './palettes/whiteDark'

const colors = {
  ...blue,
  ...green,
  ...grey,
  ...orange,
  ...purple,
  ...red,
  ...teal,
  ...white,
}
const colorsDark = {
  ...colors,
  ...greyDark,
  ...whiteDark,
}

export { colors, colorsDark }
