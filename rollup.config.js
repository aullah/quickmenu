import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

const config = {
    input: 'src/js/QuickMenu.js',
    output: [
        {
            file: 'dist/js/quickmenu.bundle.min.js',
            format: 'iife',
            name: 'QuickMenu',
            sourcemap: true,
        },
        {
            file: 'dist/js/quickmenu.min.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        terser()
    ]
};

export default config;
