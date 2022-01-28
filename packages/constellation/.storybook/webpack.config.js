const path = require('path')

const pathToInlineSvg = path.resolve(__dirname, '../src/components/Icon/icons')

module.exports = ({ config }) => {
  const rules = config.module.rules

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find(rule => rule.test.test('.svg'))
  fileLoaderRule.exclude = pathToInlineSvg

  rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: [{
      loader: '@svgr/webpack'
    }],
  })

  return config
}