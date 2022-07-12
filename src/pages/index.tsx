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
        <title>Zemoto Vercel App - Sell your Motorcyle Online, London </title>
        <meta name='description' content='Our Online App helps you Sell your Motorcycle Instantly in London with a Specialist inspection service, get a quotation, Free Collection within 125 miles' />
        
        <meta name='keywords' content='Sell Your Motorcycle
Motorcycle in London
Selling Motorcycles Online
Sell Your Motorcycle Instantly
Inspection Specialists
Quotation Service
Collection Service'/>
<meta name='robots' content='index,follow'>
<link rel='canonical' href='https://zemoto.vercel.app/' />
        
        
        <link rel='icon' href='/favicon.ico' />
  
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "zemoto vercel app",
  "url": "https://zemoto.vercel.app/",
  "logo": "https://zemoto.vercel.app/resources/svgs/zemoto_refactored.svg"
}
</script>
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
