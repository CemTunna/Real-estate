import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Inter from './fonts/Inter-Regular.ttf';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#004594',
      dark: '#898686',
    },
    secondary: {
      light: '#707D90',
      main: '#6CC5F0',
      dark: '#59f66e',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Inter Regular'), local('Inter-Regular'), url(${Inter}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
  },
});

export function Theme(Component: any) {
  function Theme(props: object) {
    return (
      <ThemeProvider theme={theme}>
        <CacheProvider value={muiCache}>
          <CssBaseline />
          <Component {...props} />
        </CacheProvider>
      </ThemeProvider>
    );
  }

  return Theme;
}
