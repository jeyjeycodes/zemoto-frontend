import { FC, useState } from 'react';
import { Avatar, Box, Button, Container, TextField, Typography, useTheme } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

interface Props {
  regNumber: string;
}

const GetQuoteForm: FC<Props> = ({ regNumber: originalRegNumber }) => {
  const [regNumber, setRegNumber] = useState<string>(originalRegNumber);
  const theme = useTheme();

  return (
    <Container maxWidth={'md'} sx={{ marginTop: 10 }}>
      <Typography variant={'h2'}>Valuate your Motorcycle</Typography>
      <Typography>To get your guaranteed valuation price, start by telling us your registration.</Typography>
      <Typography color={'primary'} fontWeight={600} mt={4}>
        Enter your registration
      </Typography>
      <Box display={'flex'} flexDirection={'row'} mt={1}>
        <TextField
          placeholder={'Enter Registration'}
          value={regNumber}
          onChange={(event) => setRegNumber(event.target.value)}
          fullWidth={true}
        />
        <Button sx={{ paddingX: 5, fontWeight: 600, marginLeft: 2 }}>Find</Button>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row'}
        mt={4}
        bgcolor={'#FAFAFA'}
        padding={2}
        alignItems={'center'}
        borderRadius={'16px'}
      >
        <Avatar sx={{ backgroundColor: 'transparent', color: theme.palette.primary.main }}>
          <DirectionsCarIcon />
        </Avatar>
        <Typography sx={{ paddingX: 5, fontWeight: 600, marginLeft: 2 }}>SOME CAR DETAILS</Typography>
      </Box>

      <Typography color={'primary'} fontWeight={600} mt={4}>
        Current mileage
      </Typography>
      <TextField placeholder={'Enter Mileage'} fullWidth={true} sx={{ marginTop: 1 }} />
    </Container>
  );
};

export default GetQuoteForm;
