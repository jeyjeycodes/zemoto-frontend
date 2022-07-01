import { FC } from 'react';
import { Box } from '@mui/material';
import CustomAppBar from '@components/CustomAppBar';
import Footer from '@components/Footer';

interface Props {
  hideGetQuote?: boolean;
}

export const Main: FC<Props> = ({ children, hideGetQuote }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Box role='navigation'>
        <CustomAppBar hideGetQuote={hideGetQuote} />
      </Box>
      <Box role='main' flexGrow={1}>
        {children}
      </Box>
      <Box role='contentinfo'>
        <Footer />
      </Box>
    </Box>
  );
};
