/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
/* eslint-disable  */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    //'postcss-prefixer': { prefix: 'constellation-' },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
