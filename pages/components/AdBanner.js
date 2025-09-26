"use client";
import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.warn("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5866918436034267" // ✅ Your AdSense client ID
      data-ad-slot="6362861503"               // ✅ Updated Ad slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
