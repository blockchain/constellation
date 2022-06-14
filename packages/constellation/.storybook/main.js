module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode', '@chakra-ui/storybook-addon'],
  features: {
    emotionAlias: false,
  },
}
