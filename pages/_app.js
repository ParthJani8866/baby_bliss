import Head from "next/head";
import Script from "next/script";
import '../styles/global.css'; // Tailwind global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Baby Bliss Boutique - Premium Baby Products</title>
        <meta name="description" content="Baby Bliss Boutique – your trusted destination for premium baby products, pregnancy blogs, and motherhood guides. Shop baby clothes, swaddles, rompers, onesies, newborn gift sets, baby shower gifts, teething toys, plush toys, feeding bottles, pacifiers, diaper bags, strollers, car seats, cribs, and baby carriers. Explore pregnancy week-by-week tips, trimester care, nutrition, postpartum recovery, breastfeeding support, and motherhood month-by-month blogs with real mom stories, baby milestones, feeding schedules, sleep training, and parenting advice. Everything parents need – from pregnancy to newborn care and toddler essentials – in one place."></meta>

        <link rel="icon" href="/favicon_io/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="cABz7WiOmmxhYSWi92HCqRHetXYjBdcGqlVm9VerfRc" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-693333660"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-693333660');
        `}
      </Script>
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
      <Script
        id="adsense-script"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js?client=ca-pub-5866918436034267"
        crossOrigin="anonymous"
      />
      {/* Page Content */}
      <Component {...pageProps} />
    </>
  );
}
