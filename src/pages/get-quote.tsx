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
        <title> Valuate your Motorcycle - Zemoto Vercel App</title>
       
        
      </Head>

      <Main hideGetQuote={true}>
        <GetQuoteForm registrationNumber={(router.query.regNumber as string) ?? ''} />
      </Main>
    </div>
  );
};

export default GetQuote;
