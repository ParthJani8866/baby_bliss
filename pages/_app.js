import Head from "next/head";
import '../styles/global.css'; // Tailwind global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Baby Bliss Boutique - Premium Baby Products</title>
        <meta name="description" content="Baby Bliss Boutique - Premium Baby Products" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}