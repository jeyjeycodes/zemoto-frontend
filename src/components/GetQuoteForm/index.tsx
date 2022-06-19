import { FC, useState } from 'react';
import { Avatar, Box, Button, Container, TextField, Typography, useTheme } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NumberChips from '@components/NumberChips';
import OptionsWithBox, { BoxType } from '@components/OptionsWithBox';
import YesOrNo from '@components/YesOrNo';
import ComponentsWithLabel from '@components/ComponentsWithLabel';
import ConditionSelect from '@components/ConditionSelect';

interface Props {
  regNumber: string;
}

const GetQuoteForm: FC<Props> = ({ regNumber: originalRegNumber }) => {
  const [regNumber, setRegNumber] = useState<string>(originalRegNumber);
  const [_registeredKeepers, setRegisteredKeepers] = useState<string>('');
  // const [condition, setCondition] = useState<>();
  const theme = useTheme();

  const getRegistrationDetails = async () => {
    const headers = { 'x-api-key': process.env.DVLA_API_KEY ?? '' };
    console.log(headers);

    const body = JSON.stringify({ registrationNumber: regNumber });
    const result = await fetch('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', {
      body,
      headers,
      method: 'POST'
    });
    // const result = await axios.post(
    //   'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
    //   {
    //     registrationNumber: regNumber
    //   },
    //   { headers }
    // );

    console.log(result);
  };

  return (
    <Container maxWidth={'md'} sx={{ marginTop: 10 }}>
      <Typography variant={'h2'}>Valuate your Motorcycle</Typography>
      <Typography>To get your guaranteed valuation price, start by telling us your registration.</Typography>
      <ComponentsWithLabel label={'Enter your registration'}>
        <>
          <Box display={'flex'} flexDirection={'row'} mt={1}>
            <TextField
              placeholder={'Enter Registration'}
              value={regNumber}
              onChange={(event) => setRegNumber(event.target.value)}
              inputProps={{
                style: { textTransform: 'uppercase' },
                sx: { '&::placeholder': { textTransform: 'none' } }
              }}
              fullWidth={true}
            />
            <Button sx={{ paddingX: 5, fontWeight: 600, marginLeft: 2 }} onClick={getRegistrationDetails}>
              Find
            </Button>
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
        </>
      </ComponentsWithLabel>

      <ComponentsWithLabel label={'Current mileage'}>
        <TextField placeholder={'Enter Mileage'} fullWidth={true} sx={{ marginTop: 1 }} />
      </ComponentsWithLabel>

      <ComponentsWithLabel label={'Number of registered keepers'}>
        <NumberChips onChangeValue={(value) => setRegisteredKeepers(value)} />
      </ComponentsWithLabel>

      <ComponentsWithLabel label={'How do you rate the bike’s overall condition'}>
        <ConditionSelect onChangeValue={(value) => console.log(value)} />
      </ComponentsWithLabel>

      <ComponentsWithLabel label={'Do you have outstanding finance?'}>
        <OptionsWithBox boxType={BoxType.Amount} onChangeValue={(value, boxValue) => console.log(value, boxValue)} />
      </ComponentsWithLabel>

      <ComponentsWithLabel label={'Do you have the most recent log book?'}>
        <YesOrNo onChangeValue={(value) => console.log(value)} />
      </ComponentsWithLabel>
      <ComponentsWithLabel label={'Does your bike require a red key?'}>
        <YesOrNo onChangeValue={(value) => console.log(value)} />
      </ComponentsWithLabel>
      <ComponentsWithLabel
        label={
          'Are there any mechanical or electrical issues we should be made aware of? (i.e. operational steering lock, engine noise, gearbox noise, overheating, misfiring, potential of M.O.T failure)'
        }
      >
        <OptionsWithBox boxType={BoxType.Multiline} onChangeValue={(value, boxValue) => console.log(value, boxValue)} />
      </ComponentsWithLabel>
    </Container>
  );
};

export default GetQuoteForm;
