import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { nanoid } from 'nanoid';
import { FC } from 'react';

interface FAQDropdown {
  id: number;
  question: string;
  answers: string[];
}

const faqDropdowns: FAQDropdown[] = [
  {
    id: 1,
    question: 'What do I need to sell my bike?',
    answers: [
      'Most recent V5 logbook registration certificate, registered to you or your business.',
      'All motorcycle keys. If some are missing, please inform us.',
      'Proof of finance settlement if the bike was purchased on finance.'
    ]
  },
  {
    id: 2,
    question: 'What happens once I’ve accepted your offer?',
    answers: [
      'Email (customerservice@zemoto.co.uk) our team, so we can arrange the best time to inspect and collect your bike.'
    ]
  },
  {
    id: 3,
    question: 'How will I receive payment for my motorcycle?',
    answers: ['We will issue the payment via bank transfer when collecting the bike.']
  },
  {
    id: 4,
    question: 'What if I don’t have the V5?',
    answers: [
      'You can get a V62 form from the post office to receive a new V5 certificate, as we do not accept motorcycles without the V5.'
    ]
  },
  {
    id: 5,
    question: 'Is my quotation fixed?',
    answers: [
      'You will be paid the price quoted, as long as the specialist confirms that the condition of the motorcycle matches the details provided.'
    ]
  },
  {
    id: 6,
    question: 'How much is the collection charge? ',
    answers: ['It’s completely FREE within 125 miles of London.']
  }
];

const FrequentlyAskedQuestions: FC = () => {
  return (
    <Box bgcolor={'#FAFAFA'} paddingY={[5, 5, 15]}>
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
              <List>
                {item.answers.map((answer, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={` - ${answer}`} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FrequentlyAskedQuestions;
