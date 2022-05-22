import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  buttonBackgroundColor: string;
}

const GetQuoteButton: FC<Props> = ({ buttonBackgroundColor }) => {
  const router = useRouter();

  return (
    <Button
      fullWidth={true}
      sx={{ fontWeight: 600, maxWidth: 120, background: buttonBackgroundColor }}
      onClick={() => router.push('get-quote')}
    >
      Get quote
    </Button>
  );
};

export default GetQuoteButton;
