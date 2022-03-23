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

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  svgr(),
  typescript({ tsconfig: './tsconfig.json' }),
  babel({ babelHelpers: 'runtime' }),
  terser(),
  //  dts(),
]

const external = ['react', 'react-dom', '@babel/runtime']

export default [
  {
    external,
    input: 'src/colors/index.ts',
    plugins,
    output: [
      {
        file: 'dist/cjs/colors/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/colors/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  {
    external,
    input: 'src/components/index.ts',
    plugins,
    output: [
      {
        file: 'dist/cjs/components/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/components/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  {
    external,
    input: 'src/hooks/index.ts',
    plugins,
    output: [
      {
        file: 'dist/cjs/hooks/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/hooks/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  {
    external,
    input: 'src/icons/index.ts',
    plugins,
    output: [
      {
        file: 'dist/cjs/icons/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/icons/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  {
    external,
    input: 'src/providers/index.ts',
    plugins,
    output: [
      {
        file: 'dist/cjs/providers/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/providers/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  {
    external,
    input: 'src/services/index.ts',
    plugins,
    output: [
      {
        file: 'dist/cjs/services/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/services/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  {
    external,
    input: 'src/utils/index.ts',
    plugins,
    output: [
      {
        file: 'dist/cjs/utils/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/utils/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  // {
  //   input: 'dist/esm/types/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  //   plugins: [dts()],
  // },
]
