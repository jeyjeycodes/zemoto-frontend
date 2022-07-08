import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@components/Hero';
import { Main } from '@components/Layout/Main';
import HowItWorks from '@components/HowItWorks';
import Reviews from '@components/Reviews';
import FrequentlyAskedQuestions from '@components/FrequentlyAskedQuestions';
import BottomInfo from '@components/BottomInfo';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zemoto - test</title>
        <meta name='description' content='Zemoto,  #1 way to sell your bike' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <Hero />
        <HowItWorks />
        <Reviews />
        <FrequentlyAskedQuestions />
        <BottomInfo />
      </Main>
    </div>
  );
};

export default Home;
