import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { FC } from 'react';

import ClickableLogo from '@components/ClickableLogo';

interface Props {
  hideGetQuote?: boolean;
}

const CustomAppBar: FC<Props> = ({ hideGetQuote }) => {
  const router = useRouter();

  return (
    <AppBar
      position='static'
      color={'secondary'}
      sx={{ display: 'flex', justifyContent: 'center', height: 80, borderBottom: '1px solid rgba(255,255,255,0.3)' }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <ClickableLogo sx={{ flexGrow: 1, mr: 2 }} />
          {!hideGetQuote && (
            <Box>
              <Button
                color={'secondary'}
                sx={{ my: 2, display: 'block', border: '2px solid white', fontWeight: 600 }}
                onClick={() => router.push('get-quote')}
              >
                Get Quote
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default CustomAppBar;
