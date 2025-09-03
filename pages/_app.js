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
        <meta name="google-site-verification" content="cABz7WiOmmxhYSWi92HCqRHetXYjBdcGqlVm9VerfRc" />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VQ83YSY2P5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VQ83YSY2P5');
          gtag('config', 'GT-5R6XBDRB');
        `}
      </Script>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDKGFBMB');
          `,
        }}
      />
      {/* Page Content */}
      <Component {...pageProps} />
    </>
  );
}
