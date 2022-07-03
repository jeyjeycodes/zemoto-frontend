import { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Props {
  onChange: (event: any) => void;
  value: string;
  hasErrors: boolean;
}

enum Condition {
  Showroom,
  Good,
  Average,
  BelowAverage,
  Poor
}

interface ConditionItem {
  value: Condition;
  label: string;
}

const conditions: ConditionItem[] = [
  {
    value: Condition.Showroom,
    label: 'Showroom condition (like new)'
  },
  {
    value: Condition.Good,
    label: 'Good (some light scratches)'
  },
  {
    value: Condition.Average,
    label: 'Average (general wear and tear, with some scratches)'
  },
  {
    value: Condition.BelowAverage,
    label: 'Below average (noticeable scratches, cracks, dents, rust, pitting, and faded paint)'
  },
  {
    value: Condition.Poor,
    label: 'Poor (visible scuffs, cracks, dents, rust, pitting, faded paint, and missing and/or broken parts)'
  }
];

export const ConditionSelect: FC<Props> = ({ onChange, value, hasErrors }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id='condition-label'>Condition</InputLabel>
      <Select
        labelId='condition-label'
        id='condition-select'
        value={value}
        error={hasErrors}
        label='Condition'
        onChange={onChange}
      >
        {conditions.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ConditionSelect;
