// pages/layout.js
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      {/* AdSense Script */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5866918436034267"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
