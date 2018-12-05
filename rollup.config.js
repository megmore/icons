import packages from './package.json'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import vuePlugin from 'rollup-plugin-vue'

const config = [
  {
    input: 'src/index.js',
    output: {
      file: packages.main,
      format: 'es'
    },
    plugins: [
      vuePlugin({
        compileTemplate: true,
        css: true
      }),
      resolve(),
      buble(),
    ]
  }
]

export default config
