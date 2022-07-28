import { FC } from 'react';
import Script from 'next/script';

const Analytics: FC = () => {
  return (
    <>
      <Script strategy={'afterInteractive'} src={'https://www.googletagmanager.com/gtag/js?id=UA-233540932-12'} />
      <Script id={'google-analytics-script'} strategy={'afterInteractive'}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-233540932-12');
        `}
      </Script>
      <Script id={'schema-script'} type={'application/ld+json'}>
        {`
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'zemoto',
          url: 'https://www.zemoto.co.uk/',
          logo: '/resources/svgs/zemoto_refactored.svg'
        `}
      </Script>
    </>
  );
};

export default Analytics;
