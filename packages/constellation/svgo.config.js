/* eslint-disable no-param-reassign */

module.exports = {
  plugins: [
    {
      fn: () => {
        return {
          element: {
            enter: (node) => {
              if (
                node.name === 'svg' &&
                node.attributes.width != null &&
                node.attributes.height != null
              ) {
                node.attributes.fill = '#98A1B2'
                node.attributes.height = '100%'
                node.attributes.width = '100%'
              }
            },
          },
        }
      },
      name: 'setFillToGreyAndWidthHeight100',
      type: 'visitor',
    },
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
}
