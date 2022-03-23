/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
/* eslint-disable  */

import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  svgr(),
  typescript({ tsconfig: './tsconfig.json' }),
  babel({ babelHelpers: 'runtime' }),
  terser(),
];

export default [
  {
    external: ['react', 'react-dom', '@babel/runtime'],
    input: 'src/index.ts',
    plugins,
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
  {
    external: ['react', 'react-dom', '@babel/runtime'],
    input: 'src/icons/index.ts',
    plugins,
    output: [
      {
        file: "dist/cjs/icons/index.js",
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: "dist/esm/icons/index.js",
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
]
