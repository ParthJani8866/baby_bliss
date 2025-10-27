"use client";
import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    // ✅ Define the Adsterra/HighPerformanceFormat configuration
    window.atOptions = {
      key: "093e8d96e7dabca4975f64b708eb9796",
      format: "iframe",
      height: 300,
      width: 160,
      params: {},
    };

    // ✅ Create the script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//www.highperformanceformat.com/093e8d96e7dabca4975f64b708eb9796/invoke.js";

    // ✅ Append the script to the document
    document.body.appendChild(script);

    // Cleanup when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="flex justify-center my-4"
      style={{ width: "160px", height: "300px" }}
      id="ad-container"
    ></div>
  );
}
