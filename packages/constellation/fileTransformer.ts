// eslint-disable-next-line
const path = require('path')

/**
 * This custom transformer allows Jest/Storyshots to parse Icon svg files without throwing an invalid element error
 */
module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`
  },
}
