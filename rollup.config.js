const pkg = require("./package.json");
import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

const name = "QuickMenu";
const config = {
    input: 'src/js/QuickMenu.js',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: name,
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            name: name,
            sourcemap: true,
        },
    ],
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        terser()
    ]
};

export default config;
