import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$black',
    '-webkit-font-smoothing': 'antialiased',
    color: '$white',
  },

  'body, input, textarea, button': {
    fontFamily: "'Montserrat', 'sans-serif'",
    fontWeight: 400,
  },
})
