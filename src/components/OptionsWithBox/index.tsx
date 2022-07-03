import { FC } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export enum BoxType {
  Amount,
  Multiline
}

interface Props {
  onChange: (event: any, value: string) => void;
  value: string;
  boxType: BoxType;
  hasErrors: boolean;
}

const OptionsWithBox: FC<Props> = ({ onChange, value, boxType, hasErrors }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Box mb={5}>
      <RadioGroup value={value} onChange={onChange}>
        <FormControlLabel value='no' control={<Radio />} label='No' />
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
      </RadioGroup>
      {hasErrors && <Typography color={'error'}>Please select one option</Typography>}
      {boxType === BoxType.Amount && value === 'yes' && (
        <Controller
          control={control}
          name={'outstandingFinanceAmount'}
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ mt: 1 }}>
              <InputLabel error={!!errors.outstandingFinanceAmount} htmlFor='outlined-adornment-amount'>
                Outstanding Amount
              </InputLabel>
              <OutlinedInput
                error={!!errors.outstandingFinanceAmount}
                inputMode={'numeric'}
                id='outlined-adornment-amount'
                value={value}
                onChange={onChange}
                startAdornment={<InputAdornment position='start'>£</InputAdornment>}
                label='Outstanding Amount'
              />
            </FormControl>
          )}
        />
      )}
      {boxType === BoxType.Multiline && value === 'yes' && (
        <Controller
          control={control}
          name={'issues'}
          render={({ field: { onChange, value } }) => (
            <TextField
              error={!!errors.issues}
              id='standard-multiline-static'
              label='Issues'
              multiline
              rows={4}
              value={value}
              onChange={onChange}
              variant='outlined'
              fullWidth
            />
          )}
        />
      )}
    </Box>
  );
};

export default OptionsWithBox;
