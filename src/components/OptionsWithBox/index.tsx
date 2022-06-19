import { FC, useState } from 'react';
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

export enum BoxType {
  Amount,
  Multiline
}

interface Props {
  onChangeValue: (value: string, boxValue: string | undefined) => void;
  boxType: BoxType;
}

const OptionsWithBox: FC<Props> = ({ onChangeValue, boxType }) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [outstandingAmount, setOutstandingAmount] = useState<number>(0);
  const [multilineValue, setMultilineValue] = useState<string>('');
  const handleChange = (event: any, value: string) => {
    console.log(event, value);
    setValue(value);
    onChangeValue(value, undefined);
  };

  const handleAmountChange = (event: any) => {
    setOutstandingAmount(event.target.value);
    console.log(event);
  };

  const handleMultilineValue = (event: any) => {
    setMultilineValue(event.target.value);
    console.log(event);
  };
  return (
    <Box mb={5}>
      <RadioGroup
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value='no' control={<Radio />} label='No' />
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
      </RadioGroup>
      {boxType === BoxType.Amount && value === 'yes' && (
        <FormControl sx={{ mt: 1 }}>
          <InputLabel htmlFor='outlined-adornment-amount'>Outstanding Amount</InputLabel>
          <OutlinedInput
            inputMode={'numeric'}
            id='outlined-adornment-amount'
            value={outstandingAmount}
            onChange={handleAmountChange}
            startAdornment={<InputAdornment position='start'>£</InputAdornment>}
            label='Outstanding Amount'
          />
        </FormControl>
      )}
      {boxType === BoxType.Multiline && value === 'yes' && (
        <TextField
          id='standard-multiline-static'
          label='Issues'
          multiline
          rows={4}
          value={multilineValue}
          onChange={handleMultilineValue}
          variant='outlined'
          fullWidth
        />
      )}
    </Box>
  );
};

export default OptionsWithBox;
