import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

import { FC } from 'react';

interface StepCard {
  stepNo: number;
  icon: JSX.Element;
  subtitle: string;
  description: string;
}

const stepCards: StepCard[] = [
  {
    stepNo: 1,
    icon: <TwoWheelerIcon sx={{ width: 57, height: 50 }} />,
    subtitle: 'We value',
    description:
      'Provide your motorcycle details and we will contact you within 24 hours to issue a quote and arrange a collection time.'
  },
  {
    stepNo: 2,
    icon: <SearchIcon sx={{ width: 57, height: 50 }} />,
    subtitle: 'We inspect',
    description: 'Our specialist will inspect the motorcycle and ensure that it matches the details provided.'
  },
  {
    stepNo: 3,
    icon: <CurrencyPoundIcon sx={{ width: 57, height: 50 }} />,
    subtitle: 'We pay',
    description: 'We will issue an instant bank transfer.'
  }
];

const HowItWorks: FC = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={'#FAFAFA'} paddingY={[5, 5, 15]}>
      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Typography alignSelf={'center'} mb={[1, 1, 5]} variant={'h4'}>
          How it works
        </Typography>
        <Box display={'flex'} flexDirection={['column', 'column', 'row']} sx={{ justifyContent: 'space-evenly' }}>
          {stepCards.map((item) => (
            <Box
              key={item.stepNo}
              padding={4}
              display={'flex'}
              flexDirection={'column'}
              sx={{ alignItems: 'center' }}
              flexGrow={1}
              flexBasis={0}
            >
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
