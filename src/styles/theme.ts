export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#DC9202',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    darkGray: '#777',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteLarge: '(min-width: 1024px)',
    hgtLarge: '(max-heigth: 1000px)',
    hgtMinimun: '1000px',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
