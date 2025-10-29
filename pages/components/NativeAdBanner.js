"use client";
import { useEffect, useRef } from "react";

export default function TopAdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Clear existing ad content
    adRef.current.innerHTML = "";

    // Create the "atOptions" script
    const atOptionsScript = document.createElement("script");
    atOptionsScript.type = "text/javascript";
    atOptionsScript.innerHTML = `
      atOptions = {
        'key' : 'af29d7d46e4295f296b46b98c8262d41',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;

    // Create the invoke script
    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "//www.highperformanceformat.com/af29d7d46e4295f296b46b98c8262d41/invoke.js";
    invokeScript.async = true;

    // Append both scripts
    adRef.current.appendChild(atOptionsScript);
    adRef.current.appendChild(invokeScript);

    // Safe cleanup when unmounted
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center mt-4 mb-6">
      <div
        ref={adRef}
        className="flex justify-center"
        style={{
          width: "468px",
          height: "60px",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
