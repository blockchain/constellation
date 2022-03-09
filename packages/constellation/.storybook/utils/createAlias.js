const path = require("path")
const findAllDirectories = require("./findAllDirectories");

const createAlias = () => {
    const srcPath = path.resolve(__dirname, '..', '..', 'src');

    const srcFolders = findAllDirectories(srcPath)

    return srcFolders.reduce((alias, folderName) => {
        alias[folderName] = path.resolve(srcPath, folderName);
  
        return alias;
      }, {});
}

module.exports = createAlias