import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

const baseThemeOptions: ThemeOptions = {
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
          color: 'white',
          borderRadius: 50
        }
      }
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        colorPrimary: {}
      }
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#5BC0BE'
    },
    secondary: {
      main: '#FF7E5F'
    }
  }
};

export const theme = responsiveFontSizes(createTheme(baseThemeOptions));
