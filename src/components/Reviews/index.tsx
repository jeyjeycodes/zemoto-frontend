import { Avatar, Box, Container, Typography, useTheme } from '@mui/material';
import { nanoid } from 'nanoid';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
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
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.',
    name: 'James Smith',
    date: '6 August 2021',
    stars: [
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarBorderIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />
    ]
  },
  {
    id: 2,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.',
    name: 'James Smith',
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
    id: 3,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante felis, nec dapibus tellus commodo et. Integer cursus ipsum finibus mauris aliquet.',
    name: 'James Smith',
    date: '6 August 2021',
    stars: [
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />,
      <StarHalfIcon key={nanoid(5)} sx={{ width: '20px', height: '20px' }} />
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
              <Typography mt={2} fontWeight={400} color={'#626262'} fontSize={'16px'}>
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
