import { Box, Container, Typography, useTheme } from '@mui/material';

// interface FAQDropdown {
//   id: number;
//   question: string;
//   answer: string;
// }

// const faqDropdowns: FAQDropdown[] = [
//   {
//     id: 1,
//     question: 'Can I part-exchange my car if it’s still on finance?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.'
//   },
//   {
//     id: 2,
//     question: 'Can I part-exchange my car if it’s still on finance?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.'
//   },
//   {
//     id: 3,
//     question: 'Can I part-exchange my car if it’s still on finance?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.'
//   },
//   {
//     id: 4,
//     question: 'Can I part-exchange my car if it’s still on finance?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.'
//   }
// ];

const FrequentlyAskedQuestions = () => {
  return (
    <Box bgcolor={'#FAFAFA'} paddingY={15}>
      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Typography alignSelf={'center'} mb={5} variant={'h4'}>
          Frequently asked questions
        </Typography>
      </Container>
    </Box>
  );
};

export default FrequentlyAskedQuestions;
