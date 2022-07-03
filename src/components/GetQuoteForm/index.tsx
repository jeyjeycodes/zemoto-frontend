import { FC, useState } from 'react';
import { Avatar, Box, Button, Container, TextField, Typography, useTheme } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ErrorIcon from '@mui/icons-material/Error';
import NumberChips from '@components/NumberChips';
import OptionsWithBox, { BoxType } from '@components/OptionsWithBox';
import YesOrNo from '@components/YesOrNo';
import ComponentsWithLabel from '@components/ComponentsWithLabel';
import ConditionSelect from '@components/ConditionSelect';
import axios from 'axios';
import { VehicleDetails } from '@src/models/vehicleDetails';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { quotationSchema } from '@src/utils/validation';
import FormCompleteDialog from '@components/dialogs/FormCompleteDialog';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

interface Props {
  registrationNumber?: string;
}

export type QuotationFormData = {
  customerName: string;
  customerEmail: string;
  registrationNumber: string;
  mileage: number;
  noOfKeepers: string;
  condition: string;
  hasOutstandingFinance: string;
  outstandingFinanceAmount: number;
  hasMostRecentLogBook: string;
  requiresRedKey: string;
  hasIssues: string;
  issues: string;
};

const GetQuoteForm: FC<Props> = ({ registrationNumber: regNumber }) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [registrationNumber, setRegistrationNumber] = useState<string>(regNumber ?? '');
  const [vehicleInfo, setVehicleInfo] = useState<VehicleDetails | undefined>(undefined);
  const [failedToGetVehicleInfo, setFailedToGetVehicleInfo] = useState<boolean>(false);
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
  const theme = useTheme();
  const methods = useForm<QuotationFormData>({
    resolver: yupResolver(quotationSchema),
    defaultValues: {
      hasIssues: '',
      hasOutstandingFinance: '',
      hasMostRecentLogBook: '',
      registrationNumber,
      requiresRedKey: '',
      noOfKeepers: '',
      condition: '',
      customerName: '',
      customerEmail: '',
      mileage: 0,
      issues: '',
      outstandingFinanceAmount: 0
    }
  });

  //TODO: add info given by zaki
  //TODO: load vehicle details on loading page
  //TODO: logo
  //TODO: SEO
  //TODO: main zemoto go back to home page
  //TODO: remove jeylanis ltd and add zemoto

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = methods;

  const getRegistrationDetails = async () => {
    try {
      setVehicleInfo(undefined);
      setFailedToGetVehicleInfo(false);
      const result = await axios.post('/api/get-vehicle-details', { registrationNumber });
      const vehicleDetails: VehicleDetails = result.data;
      setVehicleInfo(vehicleDetails);
    } catch (e) {
      console.log('There was an error!!');
      setFailedToGetVehicleInfo(true);
    }
  };

  const submitForm = async (quotationFormData: QuotationFormData) => {
    if (!vehicleInfo) {
      enqueueSnackbar('Missing vehicle details. Please go under vehicle registration and press "Find"', {
        variant: 'error'
      });
      return;
    }
    await axios.post('/api/send-emails', { quotationFormData, vehicleDetails: vehicleInfo });
    setCompleteDialogOpen(true);
  };

  const handleDialogClose = async () => {
    setCompleteDialogOpen(false);
    await router.push('/');
  };
  return (
    <FormProvider {...methods}>
      <Container maxWidth={'md'} sx={{ marginTop: 10 }}>
        <Typography variant={'h2'}>Valuate your Motorcycle</Typography>
        <Typography>To get your guaranteed valuation price, start by telling us your registration.</Typography>
        <ComponentsWithLabel label={'Enter your details'}>
          <Box display={'flex'} flex={1}>
            <Controller
              control={control}
              name={'customerName'}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors.customerName}
                  style={{ flexGrow: 1, marginRight: 20 }}
                  placeholder={'Full name'}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name={'customerEmail'}
              render={({ field: { onChange, value } }) => (
                <TextField
                  error={!!errors.customerEmail}
                  style={{ flexGrow: 3 }}
                  placeholder={'Email'}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Box>
        </ComponentsWithLabel>

        <ComponentsWithLabel label={'Enter your registration'}>
          <>
            <Box display={'flex'} flexDirection={'row'} mt={1}>
              <Controller
                control={control}
                name={'registrationNumber'}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    error={!!errors.registrationNumber}
                    placeholder={'Enter Registration'}
                    value={value}
                    onChange={(event) => {
                      setRegistrationNumber(event.target.value);
                      onChange(event);
                    }}
                    inputProps={{
                      style: { textTransform: 'uppercase' },
                      sx: { '&::placeholder': { textTransform: 'none' } }
                    }}
                    fullWidth={true}
                  />
                )}
              />

              <Button sx={{ paddingX: 5, fontWeight: 600, marginLeft: 2 }} onClick={getRegistrationDetails}>
                Find
              </Button>
            </Box>
            {!!vehicleInfo && !failedToGetVehicleInfo && (
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
                <Typography sx={{ paddingX: 5, fontWeight: 600, marginLeft: 2 }}>
                  Make: {vehicleInfo.make}, Color: {vehicleInfo.colour}, Year: {vehicleInfo.yearOfManufacture}, Engine
                  size: {vehicleInfo.engineCapacity}
                </Typography>
              </Box>
            )}
            {!vehicleInfo && failedToGetVehicleInfo && (
              <Box
                display={'flex'}
                flexDirection={'row'}
                mt={4}
                bgcolor={'#FAFAFA'}
                padding={2}
                alignItems={'center'}
                borderRadius={'16px'}
                border={2}
                borderColor={'red'}
              >
                <Avatar sx={{ backgroundColor: 'transparent', color: 'red' }}>
                  <ErrorIcon />
                </Avatar>
                <Typography sx={{ paddingX: 5, fontWeight: 600, marginLeft: 2 }}>
                  There was an issues receiving details for: {registrationNumber}
                </Typography>
              </Box>
            )}
          </>
        </ComponentsWithLabel>

        <ComponentsWithLabel label={'Current mileage'}>
          <Controller
            control={control}
            name={'mileage'}
            render={({ field: { onChange, value } }) => (
              <TextField
                error={!!errors.mileage}
                placeholder={'Enter Mileage'}
                fullWidth={true}
                sx={{ marginTop: 1 }}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </ComponentsWithLabel>

        <ComponentsWithLabel label={'Number of registered keepers'}>
          <Controller
            control={control}
            name={'noOfKeepers'}
            render={({ field: { onChange, value } }) => (
              <NumberChips onChange={onChange} value={value} hasErrors={!!errors.noOfKeepers} />
            )}
          />
        </ComponentsWithLabel>

        <ComponentsWithLabel label={'How do you rate the bike’s overall condition'}>
          <Controller
            control={control}
            name={'condition'}
            render={({ field: { onChange, value } }) => (
              <ConditionSelect onChange={onChange} value={value} hasErrors={!!errors.condition} />
            )}
          />
        </ComponentsWithLabel>

        <ComponentsWithLabel label={'Do you have outstanding finance?'}>
          <Controller
            name={'hasOutstandingFinance'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <OptionsWithBox
                boxType={BoxType.Amount}
                onChange={onChange}
                value={value}
                hasErrors={!!errors.hasOutstandingFinance}
              />
            )}
          />
        </ComponentsWithLabel>

        <ComponentsWithLabel label={'Do you have the most recent log book?'}>
          <Controller
            control={control}
            name={'hasMostRecentLogBook'}
            render={({ field: { onChange, value } }) => (
              <YesOrNo onChange={onChange} value={value} hasErrors={!!errors.hasMostRecentLogBook} />
            )}
          />
        </ComponentsWithLabel>
        <ComponentsWithLabel label={'Does your bike require a red key?'}>
          <Controller
            control={control}
            name={'requiresRedKey'}
            render={({ field: { onChange, value } }) => (
              <YesOrNo onChange={onChange} value={value} hasErrors={!!errors.requiresRedKey} />
            )}
          />
        </ComponentsWithLabel>
        <ComponentsWithLabel
          label={
            'Are there any mechanical or electrical issues we should be made aware of? (i.e. operational steering lock, engine noise, gearbox noise, overheating, misfiring, potential of M.O.T failure)'
          }
        >
          <Controller
            name={'hasIssues'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <OptionsWithBox
                boxType={BoxType.Multiline}
                onChange={onChange}
                value={value}
                hasErrors={!!errors.hasIssues}
              />
            )}
          />
        </ComponentsWithLabel>
        <Button sx={{ mb: 5 }} variant='contained' fullWidth onClick={handleSubmit(submitForm)}>
          Submit
        </Button>
        <FormCompleteDialog onClose={handleDialogClose} open={completeDialogOpen} />
      </Container>
    </FormProvider>
  );
};

export default GetQuoteForm;
