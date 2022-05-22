import { Box, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import GetQuoteSearchField from '@components/GetQuoteSearchField';

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, #FF7E5F 0%, #FEB47B 100%)`
      }}
    >
      <Container sx={{ display: 'flex' }}>
        <Box mt={10} sx={{ display: 'flex', flexDirection: 'column', minHeight: 380, maxWidth: 700, flexGrow: 1 }}>
          <Typography color={'white'} fontSize={'64px'} fontWeight={700} lineHeight={1}>
            The best way to sell your motorcycle.
          </Typography>
          <Typography mt={'20px'} color={'white'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus
            commodo et. Integer cursus ipsum finibus mauris aliquet.
          </Typography>
          <GetQuoteSearchField buttonBackgroundColor={theme.palette.primary.main} />
        </Box>
      </Container>

      <Box sx={{ position: 'absolute', top: 100, right: 0 }}>
        <Image alt={'motorcycle'} src={'/resources/images/motorcycle.png'} width={450} height={450} />
      </Box>
    </Box>
  );
};

export default Hero;
