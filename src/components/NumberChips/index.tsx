import { FC } from 'react';
import { Chip, Stack } from '@mui/material';

interface Props {
  onChange: (event: { target: { value: string } }) => void;
  value: string;
  hasErrors: boolean;
}

const NumberChips: FC<Props> = ({ onChange, value, hasErrors }) => {
  const clickedNumber = (chosenValue: string) => {
    onChange({ target: { value: chosenValue } });
  };

  return (
    <Stack spacing={2} direction={'row'}>
      {['1', '2', '3', '4', '5+'].map((item, i) => (
        <Chip
          sx={{ px: ['10px', '10px', '20px'], borderColor: hasErrors ? 'red' : undefined }}
          key={i}
          label={item}
          variant={item === value ? 'filled' : 'outlined'}
          onClick={() => clickedNumber(item)}
          color={item === value ? 'primary' : 'default'}
        />
      ))}
    </Stack>
  );
};

export default NumberChips;
