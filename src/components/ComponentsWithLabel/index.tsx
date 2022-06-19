import { FC, ReactElement } from 'react';
import { Typography } from '@mui/material';

interface Props {
  label: string;
  children: ReactElement;
}

const ComponentsWithLabel: FC<Props> = ({ children, label }) => {
  return (
    <>
      <Typography color={'primary'} fontWeight={600} mt={4} mb={1}>
        {label}
      </Typography>
      {children}
    </>
  );
};

export default ComponentsWithLabel;
