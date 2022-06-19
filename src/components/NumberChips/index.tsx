import { FC, useState } from 'react';
import { Chip, Stack } from '@mui/material';

interface Props {
  onChangeValue: (value: string) => void;
}

const NumberChips: FC<Props> = ({ onChangeValue }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const clickedNumber = (chosenValue: string) => {
    setSelectedValue(chosenValue);
    onChangeValue(chosenValue);
  };

  return (
    <Stack flexGrow={1} spacing={2} direction={'row'}>
      {['1', '2', '3', '4', '5+'].map((item, i) => (
        <Chip
          sx={{ px: '10px' }}
          key={i}
          label={item}
          variant={item === selectedValue ? 'filled' : 'outlined'}
          onClick={() => clickedNumber(item)}
          color={item === selectedValue ? 'primary' : 'default'}
        />
      ))}
    </Stack>
  );
};

export default NumberChips;
