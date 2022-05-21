import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const baseThemeOptions: ThemeOptions = {
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: 'Poppins',
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
          fontSize: '1rem'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: cyan[900]
        }
      }
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: cyan[500]
    },
    secondary: {
      main: '#171A21'
    }
  }
};

export const theme = responsiveFontSizes(createTheme(baseThemeOptions));
