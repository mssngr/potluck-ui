import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true, // Whether to use css reset
  include: ['./*.{ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
  presets: [],
  globalCss: {
    '*': {
      boxSizing: 'border-box',
    },
  },
  theme: {
    extend: {
      keyframes: {
        buttonPop: {
          '0%': { transform: 'scale(0.98)' },
          '40%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
    tokens: {
      durations: {
        instant: { value: '100ms' },
        short: { value: '200ms' },
        medium: { value: '400ms' },
        long: { value: '600ms' },
      },
      easings: {
        easeOut: { value: [0, 0, 0.2, 1] },
      },
      fontSizes: {
        xs: { value: '0.75rem' },
        sm: { value: '0.875rem' },
        md: { value: '1rem' },
        lg: { value: '1.5rem' },
      },
      fontWeights: {
        thin: { value: 100 },
        hairline: { value: 100 },
        extralight: { value: 200 },
        ultralight: { value: 200 },
        light: { value: 300 },
        regular: { value: 400 },
        normal: { value: 400 },
        medium: { value: 500 },
        semibold: { value: 600 },
        demibold: { value: 600 },
        bold: { value: 700 },
        extrabold: { value: 800 },
        ultrabold: { value: 800 },
        black: { value: 900 },
        heavy: { value: 900 },
      },
      radii: {
        xs: { value: '0.125rem' },
        sm: { value: '0.25rem' },
        md: { value: '0.375rem' },
        lg: { value: '0.5rem' },
        xl: { value: '0.75rem' },
        xxl: { value: '1rem' },
      },
      sizes: {
        xs: { value: '0.5rem' },
        sm: { value: '1rem' },
        md: { value: '2rem' },
        lg: { value: '3rem' },
        xl: { value: '4rem' },
        full: { value: '100%' },
        min: { value: 'min-content' },
        max: { value: 'max-content' },
        fit: { value: 'fit-content' },
      },
      spacing: {
        xxs: { value: '0.25rem' },
        xs: { value: '0.5rem' },
        sm: { value: '0.75rem' },
        md: { value: '1rem' },
        lg: { value: '1.25rem' },
        xl: { value: '1.5rem' },
        xxl: { value: '2rem' },
        '3xl': { value: '3rem' },
      },
    },
  },
})
