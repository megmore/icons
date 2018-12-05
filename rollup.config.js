import packages from './package.json'
// import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import VuePlugin from 'rollup-plugin-vue'

const config = [
  {
    input: 'src/index.js',
    output: {
      file: packages.main,
      format: 'es'
    },
    plugins: [
      VuePlugin({
        compileTemplate: true,
        css: true
      }),
      resolve(),
      buble(),
    ]
  }
]

export default config
