import { FC, useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface Props {
  onChangeValue: (value: string) => void;
}

const YesOrNo: FC<Props> = ({ onChangeValue }) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleChange = (event: any) => {
    onChangeValue(event.target.value);
    setValue(event.target.value);
  };
  return (
    <RadioGroup
      aria-labelledby='demo-controlled-radio-buttons-group'
      name='controlled-radio-buttons-group'
      value={value}
      onChange={handleChange}
    >
      <FormControlLabel value='no' control={<Radio />} label='No' />
      <FormControlLabel value='yes' control={<Radio />} label='Yes' />
    </RadioGroup>
  );
};

export default YesOrNo;
