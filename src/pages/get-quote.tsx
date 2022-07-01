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
        <title>Get Quote</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main hideGetQuote={true}>
        <GetQuoteForm registrationNumber={(router.query.regNumber as string) ?? ''} />
      </Main>
    </div>
  );
};

export default GetQuote;
