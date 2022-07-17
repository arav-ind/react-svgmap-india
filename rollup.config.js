import babel from "rollup-plugin-babel"
import external from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"

export default [
  {
    input: "./src/index.js",
    output: [
      { file: "dist/index.js", format: "cjs", exports: "default" },
      { file: "dist/index.es.js", format: "es", exports: "default" },
    ],
    plugins: [
      babel({ exclude: "node_modules/**", presets: ["@babel/preset-react"] }),
      external(),
      resolve(),
      terser(),
    ],
  },
]
