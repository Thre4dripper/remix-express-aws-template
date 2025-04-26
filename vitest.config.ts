import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ['**/tests/unit/**/*.test.{ts,tsx}'],
    exclude: [
      ...configDefaults.exclude,
      'tests/e2e/**/*',
      'playwright-report/**/*',
      'coverage/**/*',
      '**/build/**',
    ],
    environment: 'jsdom',
    coverage: {
      include: ['**/app/**/*.{ts,tsx}', '**/tests/**/*.{ts,tsx}'],
      exclude: ['**/tests/**/*.test.{ts,tsx}'],
      all: true,
    },
  },
})
