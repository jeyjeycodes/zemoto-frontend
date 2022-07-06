import { TextField } from '@mui/material';
import GetQuoteButton from '@components/GetQuoteButton';
import { FC, useState } from 'react';

interface Props {
  buttonBackgroundColor: string;
}

const GetQuoteSearchField: FC<Props> = ({ buttonBackgroundColor }) => {
  const [regNumber, setRegNumber] = useState<string>('');
  return (
    <TextField
      variant='standard'
      hiddenLabel
      placeholder={'Enter Registration'}
      value={regNumber}
      onChange={(event) => setRegNumber(event.target.value)}
      sx={{
        borderRadius: 50,
        backgroundColor: 'white',
        paddingLeft: '20px',
        paddingRight: '10px',
        height: '56px',
        width: ['320px', '400px'],
        justifyContent: 'center',
        marginTop: '20px'
      }}
      inputProps={{ style: { textTransform: 'uppercase' }, sx: { '&::placeholder': { textTransform: 'none' } } }}
      InputProps={{
        disableUnderline: true,
        endAdornment: <GetQuoteButton buttonBackgroundColor={buttonBackgroundColor} regNumber={regNumber} />
      }}
    />
  );
};

export default GetQuoteSearchField;
