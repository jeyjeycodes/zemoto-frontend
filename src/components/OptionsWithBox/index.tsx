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
  TextField
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
}

const OptionsWithBox: FC<Props> = ({ onChange, value, boxType }) => {
  const { control } = useFormContext();

  return (
    <Box mb={5}>
      <RadioGroup value={value} onChange={onChange}>
        <FormControlLabel value='no' control={<Radio />} label='No' />
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
      </RadioGroup>
      {boxType === BoxType.Amount && value === 'yes' && (
        <Controller
          control={control}
          name={'outstandingFinanceAmount'}
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ mt: 1 }}>
              <InputLabel htmlFor='outlined-adornment-amount'>Outstanding Amount</InputLabel>
              <OutlinedInput
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
