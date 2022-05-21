import { Box, Container, Typography } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const Hero = () => {
  return (
    <Box sx={{ background: `linear-gradient(to top, ${cyan[500]}, ${cyan[900]})` }}>
      <Container maxWidth={'md'} style={{ flexGrow: 1 }}>
        <Typography variant="h1">Hello world</Typography>
      </Container>
    </Box>
  );
};
