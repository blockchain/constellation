import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const packageJson = require('./package.json')

const config = [
  {
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
    external: [/@babel\/runtime/, 'react'],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
      filesize(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

export default config;