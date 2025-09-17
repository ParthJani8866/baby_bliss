"use client";
import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      // Prevent duplicate pushes when React re-renders
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
      data-ad-client="ca-pub-5866918436034267" // ✅ your AdSense client ID
      data-ad-slot="5151293202"               // ✅ your Ad slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
