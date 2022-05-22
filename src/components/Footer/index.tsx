import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <AppBar
      position='static'
      color={'primary'}
      sx={{ display: 'flex', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.3)' }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Typography
            noWrap
            component='div'
            sx={{ flexGrow: 1, mr: 2, color: 'white', fontWeight: 700, fontSize: '24px' }}
          >
            ZEMOTO
          </Typography>
          <Box>
            <Typography fontSize={'16px'} fontWeight={700} color={'white'} sx={{ my: 2, display: 'block' }}>
              Jeylanis Ltd Copyright 2022
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;
