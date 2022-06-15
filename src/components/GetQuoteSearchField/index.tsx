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
      autoCapitalize={'uppercase'}
      placeholder={'Enter Registration'}
      value={regNumber}
      onChange={(event) => setRegNumber(event.target.value)}
      sx={{
        borderRadius: 50,
        backgroundColor: 'white',
        paddingLeft: '20px',
        paddingRight: '10px',
        height: '56px',
        width: '400px',
        justifyContent: 'center',
        textTransform: 'uppercase',
        marginTop: '20px'
      }}
      InputProps={{
        style: {
          textTransform: 'uppercase'
        },
        autoCapitalize: 'uppercase',
        disableUnderline: true,
        endAdornment: <GetQuoteButton buttonBackgroundColor={buttonBackgroundColor} regNumber={regNumber} />
      }}
    />
  );
};

export default GetQuoteSearchField;
