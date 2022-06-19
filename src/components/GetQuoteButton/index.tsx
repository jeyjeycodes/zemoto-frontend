import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  buttonBackgroundColor: string;
  regNumber: string;
}

const GetQuoteButton: FC<Props> = ({ buttonBackgroundColor, regNumber }) => {
  const router = useRouter();

  return (
    <Button
      fullWidth={true}
      sx={{ fontWeight: 600, maxWidth: 120, background: buttonBackgroundColor }}
      onClick={() => router.push({ pathname: 'get-quote', query: { regNumber } })}
    >
      Get quote
    </Button>
  );
};

export default GetQuoteButton;
