"use client";
import { useEffect, useRef } from "react";

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Clear any existing ad
    adRef.current.innerHTML = "";

    // Create Adsterra atOptions script
    const atOptionsScript = document.createElement("script");
    atOptionsScript.type = "text/javascript";
    atOptionsScript.innerHTML = `
      atOptions = {
        'key' : '093e8d96e7dabca4975f64b708eb9796',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;

    // Create Adsterra invoke script
    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "//www.highperformanceformat.com/093e8d96e7dabca4975f64b708eb9796/invoke.js";
    invokeScript.async = true;

    // Append both scripts in order
    adRef.current.appendChild(atOptionsScript);
    adRef.current.appendChild(invokeScript);

    // Cleanup when unmounted (safe check)
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={adRef}
      className="flex justify-center my-4"
      style={{
        width: "160px",
        height: "300px",
      }}
    />
  );
}
