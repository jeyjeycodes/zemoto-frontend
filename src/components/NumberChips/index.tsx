import { FC } from 'react';
import { Chip, Stack } from '@mui/material';

interface Props {
  onChange: (event: { target: { value: string } }) => void;
  value: string;
}

const NumberChips: FC<Props> = ({ onChange, value }) => {
  const clickedNumber = (chosenValue: string) => {
    onChange({ target: { value: chosenValue } });
  };

  return (
    <Stack flexGrow={1} spacing={2} direction={'row'}>
      {['1', '2', '3', '4', '5+'].map((item, i) => (
        <Chip
          sx={{ px: '10px' }}
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
