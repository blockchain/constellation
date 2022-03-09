const { readdirSync } = require('fs')

const findAllDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

module.exports = findAllDirectories