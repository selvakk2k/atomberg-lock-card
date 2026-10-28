import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/atomberg-lock-card.ts',
  output: {
    file: 'dist/atomberg-lock-card.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    typescript(),
    terser(),
  ],
};
