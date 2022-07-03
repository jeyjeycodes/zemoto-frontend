import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@src/theme';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        autoHideDuration={3000}
      >
        <CssBaseline />
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
export default MyApp;
