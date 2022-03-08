const createAlias = require("./utils/createAlias");

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
  webpackFinal: (config) => {
    config.resolve.alias = createAlias()
    
    return config;
  }
}
