import Head from "next/head";
import Script from "next/script";
import '../styles/global.css'; // Tailwind global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Baby Bliss Boutique - Premium Baby Products</title>
        <meta name="description" content="Baby Bliss Boutique - Premium Baby Products" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZTGCM2GSH7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZTGCM2GSH7');
        `}
      </Script>

      {/* Page Content */}
      <Component {...pageProps} />
    </>
  );
}
