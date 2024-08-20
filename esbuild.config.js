import * as esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['src/index.js'],
  platform: 'node',
  bundle: true,
  outdir: 'dist',
  format: 'esm',
  minify: true,
  sourcemap: true,
}).catch(() => process.exit(1));
