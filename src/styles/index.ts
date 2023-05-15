import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primaryColor: '#',
      secondaryColor: '#',

      white: '#fff',
      black: '#000',
    },

    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '2rem',
      '2xl': '3rem',
    },
  },
})
