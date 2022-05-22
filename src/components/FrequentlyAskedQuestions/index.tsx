import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { nanoid } from 'nanoid';
import { FC } from 'react';

interface FAQDropdown {
  id: number;
  question: string;
  answer: string;
}

const faqDropdowns: FAQDropdown[] = [
  {
    id: 1,
    question: 'Can I part-exchange my car if it’s still on finance?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.'
  },
  {
    id: 2,
    question: 'Can I part-exchange my car if it’s still on finance?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.'
  },
  {
    id: 3,
    question: 'Can I part-exchange my car if it’s still on finance?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.'
  },
  {
    id: 4,
    question: 'Can I part-exchange my car if it’s still on finance?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.'
  }
];

const FrequentlyAskedQuestions: FC = () => {
  return (
    <Box bgcolor={'#FAFAFA'} paddingY={15}>
      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Typography alignSelf={'center'} mb={5} variant={'h4'}>
          Frequently asked questions
        </Typography>
        {faqDropdowns.map((item) => (
          <Accordion
            key={nanoid(5)}
            sx={{
              marginBottom: 2,
              borderRadius: '16px',
              borderWidth: 0,
              '&.MuiAccordion-root:before': {
                backgroundColor: 'transparent' // removes divider
              },
              boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.1)'
            }}
            square={true}
          >
            <AccordionSummary key={item.id} expandIcon={<ExpandMoreIcon color={'primary'} />}>
              <Typography fontWeight={600}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FrequentlyAskedQuestions;
