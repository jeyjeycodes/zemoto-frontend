import { Box, Container, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Image from 'next/image';

const Hero = () => {
  const router = useRouter();

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
          <TextField
            variant='standard'
            hiddenLabel
            autoCapitalize={'uppercase'}
            placeholder={'Enter Registration'}
            sx={{
              borderRadius: 50,
              backgroundColor: 'white',
              paddingLeft: '20px',
              paddingRight: '10px',
              height: '56px',
              width: '400px',
              justifyContent: 'center',
              textTransform: 'uppercase',
              marginTop: '20px'
            }}
            InputProps={{
              style: {
                textTransform: 'uppercase'
              },
              autoCapitalize: 'uppercase',
              disableUnderline: true,
              endAdornment: (
                <Button
                  fullWidth={true}
                  sx={{ fontWeight: 600, maxWidth: 120 }}
                  onClick={() => router.push('get-quote')}
                >
                  Get quote
                </Button>
              )
            }}
          />
        </Box>
      </Container>

      <Image
        style={{ position: 'absolute', top: 100, right: 0 }}
        alt={'motorcycle'}
        src={'/resources/images/motorcycle.png'}
        width={450}
        height={450}
      />
    </Box>
  );
};

export default Hero;
