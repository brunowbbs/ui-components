import { resolve } from 'path';

import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { defineConfig } from 'tsup';

/**
 * @param {Parameters<typeof defineConfig>[0] & { injectReact?: boolean }} options
 * @returns {void}
 */

export const tsup = ({
  entry = ['lib/index.ts'],
  injectReact,
  ...options
} = {}) =>
  defineConfig({
    entry,
    platform: 'node',
    format: ['cjs', 'esm'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    esbuildPlugins: [nodeExternalsPlugin()],
    inject: injectReact && [resolve(__dirname, 'lib/inject.js')],
    ...options,
  });
