import { Box, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import GetQuoteSearchField from '@components/GetQuoteSearchField';
import { FC } from 'react';

const Hero: FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, #FF7E5F 0%, #FEB47B 100%)`
      }}
    >
      <Container sx={{ display: 'flex' }}>
        <Box mt={10} sx={{ display: 'flex', flexDirection: 'column', minHeight: 380, maxWidth: 700, flexGrow: 1 }}>
          <Typography color={'white'} variant={'h2'} fontWeight={700} lineHeight={1}>
            The best way to sell your Motorcycle.
          </Typography>
          <Typography mt={'20px'} color={'white'} fontWeight={500} fontSize={20}>
            Get a free personalised valuation of your Motorcycle from our trusted team within 24 hours, fast and easy.
          </Typography>
          <GetQuoteSearchField buttonBackgroundColor={theme.palette.primary.main} />
        </Box>
      </Container>

      <Box sx={{ position: 'absolute', top: 100, right: 0, display: { xs: 'none ', xl: 'flex' } }}>
        <Image alt={'motorcycle'} src={'/resources/images/motorcycle.png'} width={450} height={450} />
      </Box>
    </Box>
  );
};

export default Hero;
