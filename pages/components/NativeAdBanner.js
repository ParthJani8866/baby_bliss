"use client";
import { useEffect, useRef } from "react";

export default function TopAdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Clean up any previous ad content
    adRef.current.innerHTML = "";

    // Define atOptions globally (important)
    window.atOptions = {
      key: "af29d7d46e4295f296b46b98c8262d41",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };

    // Load invoke script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/af29d7d46e4295f296b46b98c8262d41/invoke.js";
    script.async = true;

    adRef.current.appendChild(script);

    // Cleanup when unmounted
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
      delete window.atOptions;
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
