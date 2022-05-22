import { TextField } from '@mui/material';
import GetQuoteButton from '@components/GetQuoteButton';
import React from 'react';

interface Props {
  buttonBackgroundColor: string;
}

const GetQuoteSearchField: React.FC<Props> = ({ buttonBackgroundColor }) => {
  return (
    <TextField
      variant='standard'
      hiddenLabel
      autoCapitalize={'uppercase'}
      placeholder={'Enter Registration'}
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
        endAdornment: <GetQuoteButton buttonBackgroundColor={buttonBackgroundColor} />
      }}
    />
  );
};

export default GetQuoteSearchField;
