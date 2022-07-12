import type { NextPage } from 'next';
import Head from 'next/head';
import { Main } from '@components/Layout/Main';
import GetQuoteForm from '@components/GetQuoteForm';
import { useRouter } from 'next/router';

const GetQuote: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title> Valuate your Motorcycle - Zemoto</title>
        <meta
          name='description'
          content='To get your guaranteed valuation price by our trusted team within 24 hours; Fast and Easy. start by telling us your registration'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='index,follow' />
        <link rel='canonical' href='https://zemoto.vercel.app/get-quote' />
      </Head>

      <Main hideGetQuote={true}>
        <GetQuoteForm registrationNumber={(router.query.regNumber as string) ?? ''} />
      </Main>
    </div>
  );
};

export default GetQuote;
