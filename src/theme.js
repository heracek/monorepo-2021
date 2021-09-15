import { dark as theTheme } from '@mdx-deck/themes';

const heading = {
  letterSpacing: 0,
  textAlign: 'center',
  marginRight: [3, 4, 5],
  marginLeft: [3, 4, 5],
  fontWeight: 400,
};

export const theme = {
  ...theTheme,
  googleFont:
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=Roboto+Slab:wght@400;800&display=swap',
  fonts: {
    body: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
    heading:
      '"Roboto Slab","Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  colors: {
    ...(theTheme?.colors || {}),
    lightgray: '#aaa',
  },
  styles: {
    ...(theTheme?.styles || {}),
    Slide: {
      ...(theTheme?.styles?.Slide || {}),
      fontFamily: 'body',
      fontWeight: 300,
      fontSize: [3, 4, 5, 6],
      letterSpacing: '-0.02em',
    },
    h1: heading,
    h2: heading,
    h3: heading,
    h4: heading,
    h5: heading,
    h6: heading,
    a: {
      color: 'primary',
      '&:visited': {
        color: 'primary',
      },
    },
    code: {
      fontSize: '0.7em',
    },
    inlineCode: {
      ...(theTheme?.styles?.inlineCode || {}),
      fontSize: '1.07em',
      color: '#ddd',
    },
    pre: {
      ...(theTheme?.styles?.pre || {}),
      paddingLeft: '12px',
      paddingRight: '12px',
      color: '#ddd',
    },
    strong: {
      fontWeight: '700',
    },
  },
};
