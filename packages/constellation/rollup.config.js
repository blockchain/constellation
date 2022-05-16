/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
/* eslint-disable  */

import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from "rollup-plugin-visualizer";

const packageJson = require('./package.json')

export default (args) => {
  const analyzeBundle = args.analyze_bundle ?? false
  const analyzeBundleJson = args.analyze_bundle_json ?? false

  delete args.analyze_bundle
  delete args.analyze_bundle_json
  
  const plugins = [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({ babelHelpers: 'runtime' }),
    terser(),
  ]

  if (analyzeBundle) {
    plugins.push(
      visualizer({
        sourcemap: true,
        open: true
      })
    )
  }

  if (analyzeBundleJson) {
    plugins.push(
      visualizer({
        sourcemap: true,
        json: true
      })
    )
  }
  return [
    {
      external: ['react', 'react-dom', '@babel/runtime'],
      input: 'src/index.ts',
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
      plugins,
    },
    {
      input: 'dist/esm/types/index.d.ts',
      output: [{ file: 'dist/index.d.ts', format: 'esm' }],
      plugins: [dts()],
    },
  ]
}
