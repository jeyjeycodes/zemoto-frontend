import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import { nanoid } from 'nanoid';
import StarIcon from '@mui/icons-material/Star';
import { FC } from 'react';

interface ReviewCard {
  id: number;
  review: string;
  name: string;
  date: string;
  stars: JSX.Element[];
}

const reviewCards: ReviewCard[] = [
  {
    id: 1,
    review: 'Very easy, simple, and efficient. It was great that they were able to work around my busy schedule.',
    name: 'David',
    date: '6 August 2021',
    stars: [
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />
    ]
  },
  {
    id: 2,
    review:
      'Great service! I was concerned that this process would take too long, but they were able to inspect and collect my motorcycle within 24 hours.',
    name: 'Millie',
    date: '10 November 2021',
    stars: [
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />
    ]
  },
  {
    id: 3,
    review:
      'Zaki, who collected my bike, was very friendly. He arrived on time, inspected my motorbike, and paid me exactly what was quoted. I will recommend this service to my friends. This is definitely how I will be selling my bikes from now on.',
    name: 'Andrei',
    date: '18 February 2022',
    stars: [
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />
    ]
  }
];

const Reviews: FC = () => {
  const theme = useTheme();

  return (
    <Box paddingY={15}>
      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Typography alignSelf={'center'} mb={5} variant={'h4'}>
          Reviews
        </Typography>
        <Box display={'flex'} flexDirection={'row'} sx={{ justifyContent: 'space-evenly' }}>
          {reviewCards.map((item) => (
            <Box
              key={item.id}
              bgcolor={'#FAFAFA'}
              margin={4}
              padding={3}
              borderRadius={'25px'}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'flex-start'}
              flexGrow={1}
              flexBasis={0}
            >
              <Box
                display={'flex'}
                flexDirection={'row'}
                bgcolor={'white'}
                borderRadius={50}
                justifyContent={'flex-start'}
              >
                {item.stars.map((icon) => (
                  <Avatar key={nanoid(5)} sx={{ backgroundColor: 'transparent', color: theme.palette.primary.main }}>
                    {icon}
                  </Avatar>
                ))}
              </Box>
              <Typography mt={2} fontWeight={400} color={'#626262'} fontSize={'16px'} flexGrow={1}>
                {item.review}
              </Typography>
              <Typography mt={5} fontWeight={600} fontSize={'18px'}>
                {item.name}
              </Typography>
              <Typography color={'#9B9B9B'} mt={'1px'} fontWeight={600} fontSize={'16px'}>
                {item.date}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;
