import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@components/Hero';
import { Main } from '@components/Layout/Main';
import HowItWorks from '@components/HowItWorks';
import Reviews from '@components/Reviews';
import FrequentlyAskedQuestions from '@components/FrequentlyAskedQuestions';
import BottomInfo from '@components/BottomInfo';
import CookieBanner from '@components/CookieBanner';
import Analytics from '@components/Analytics';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Zemoto - Sell your Motorcyle Online, London </title>
        <meta
          name='description'
          content='Our Online App helps you Sell your Motorcycle Instantly in London with a Specialist inspection service, get a quotation, Free Collection within 125 miles'
        />
        <meta
          name='keywords'
          content='Sell Your Motorcycle
Motorcycle in London
Selling Motorcycles Online
Sell Your Motorcycle Instantly
Inspection Specialists
Quotation Service
Collection Service'
        />
        <meta name='robots' content='index,follow' />
        <link rel='canonical' href='https://www.zemoto.co.uk/' />
        <meta property='og:title' content='Zemoto - Sell your Motorcyle Online, London ' />
        <meta property='og:site_name' content='zemoto.co.uk' />
        <meta property='og:url' content='https://www.zemoto.co.uk' />
        <meta property='og:description' content='' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://www.zemoto.co.uk/resources/svgs/zemoto_refactored.svg' />
        <meta property='og:image' content='' />
        <link rel='icon' href='/favicon.ico' />
        {/* TODO: enable analytics script only for production */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zemoto',
              url: 'https://www.zemoto.co.uk/',
              logo: 'https://www.zemoto.co.uk/resources/svgs/zemoto_refactored.svg'
            })
          }}
        />
        {/*{!--Global site tag (gtag.js) - Google CookieBanner --}*/}
        {/*<script async src='https://www.googletagmanager.com/gtag/js?id=UA-233540932-12' />*/}
        {/*<script*/}
        {/*  dangerouslySetInnerHTML={{*/}
        {/*    __html: ` */}
        {/*    window.dataLayer = window.dataLayer || [];*/}
        {/*    function gtag(){dataLayer.push(arguments);}*/}
        {/*    gtag('js', new Date());*/}
        {/*    gtag('config', 'UA-233540932-12');`*/}
        {/*  }}*/}
        {/*></script>*/}
        {/*Google search*/}
        <meta name='google-site-verification' content='d4r5fO-Ry26B9ZeIjSK0X6qvM7HIo8CbRb0OUDZlzuo' />
      </Head>
      <Main>
        <Analytics />
        <CookieBanner />
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
