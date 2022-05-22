import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import ArticleIcon from '@mui/icons-material/Article';
import HandshakeIcon from '@mui/icons-material/Handshake';

interface StepCard {
  stepNo: number;
  icon: JSX.Element;
  subtitle: string;
  description: string;
}

const stepCards: StepCard[] = [
  {
    stepNo: 1,
    icon: <DirectionsBikeIcon sx={{ width: 57, height: 50 }} />,
    subtitle: 'We inspect your motorcycle',
    description: 'Our handover specialist will check your car is roadworthy and matches the details you gave.'
  },
  {
    stepNo: 2,
    icon: <ArticleIcon sx={{ width: 57, height: 50 }} />,
    subtitle: 'We collect your paperwork',
    description: 'Our handover specialist will check your car is roadworthy and matches the details you gave.'
  },
  {
    stepNo: 3,
    icon: <HandshakeIcon sx={{ width: 57, height: 50 }} />,
    subtitle: 'We take it from there',
    description: 'Our handover specialist will check your car is roadworthy and matches the details you gave.'
  }
];

const HowItWorks = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={'#FAFAFA'} paddingY={15}>
      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Typography alignSelf={'center'} mb={5} variant={'h4'}>
          How it works
        </Typography>
        <Box display={'flex'} flexDirection={'row'} sx={{ justifyContent: 'space-evenly' }}>
          {stepCards.map((item) => (
            <Box key={item.stepNo} padding={4} display={'flex'} flexDirection={'column'} sx={{ alignItems: 'center' }}>
              <Avatar
                variant={'rounded'}
                sx={{
                  backgroundColor: 'white',
                  color: theme.palette.secondary.main,
                  boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.1)',
                  height: '100px',
                  width: '100px',
                  borderRadius: '25px'
                }}
              >
                {item.icon}
              </Avatar>
              <Typography color={'secondary'} fontWeight={700} mt={3} fontSize={'16px'}>
                STEP {item.stepNo}
              </Typography>
              <Typography mt={2} fontWeight={700}>
                {item.subtitle}
              </Typography>
              <Typography mt={2} fontWeight={400} textAlign={'center'}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
