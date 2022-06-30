import { FC } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface Props {
  onChange: (event: any, value: string) => void;
  value: string;
}

const YesOrNo: FC<Props> = ({ onChange, value }) => {
  return (
    <RadioGroup
      aria-labelledby='demo-controlled-radio-buttons-group'
      name='controlled-radio-buttons-group'
      value={value}
      onChange={onChange}
    >
      <FormControlLabel value='no' control={<Radio />} label='No' />
      <FormControlLabel value='yes' control={<Radio />} label='Yes' />
    </RadioGroup>
  );
};

export default YesOrNo;
