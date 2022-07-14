/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
/* eslint-disable  */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-prefix-selector': {
      transform: (prefix, selector) => {
        if (selector.startsWith('.constellation .mode-')) {
          const selectorParts = selector.split(' ')

          return `${selectorParts[1]} ${selectorParts[0]} ${selectorParts[2]},\n${selectorParts[1]} ${selectorParts[0]}${selectorParts[2]}`
        } else if (selector.startsWith('.constellation')) {
          return `${selector},\n.constellation${selector.replace('.constellation ', '')}`
        }

        return selector
      },
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
