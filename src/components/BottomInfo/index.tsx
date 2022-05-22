import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material';
import GetQuoteSearchField from '@components/GetQuoteSearchField';

const BottomInfo = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main} sx={{ height: '360px' }}>
      <Container
        maxWidth='lg'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '360px'
        }}
      >
        <Typography color={'white'} fontSize={'42px'} fontWeight={700}>
          Get a free quote
        </Typography>
        <GetQuoteSearchField buttonBackgroundColor={theme.palette.secondary.main} />
      </Container>
    </Box>
  );
};
export default BottomInfo;
