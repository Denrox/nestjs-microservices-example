import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    include: ['test/**/*.e2e-spec.ts'],
    setupFiles: ['./test/config.ts'],
    testTimeout: 1000,
    fileParallelism: false,
  },
});
