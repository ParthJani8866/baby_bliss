"use client";
import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    // Create Adsterra script dynamically
    const script = document.createElement("script");
    script.src = "//pl27936159.effectivegatecpm.com/6ecac58554a85ebd45aa5bb9ab11a5ae/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    // Append to document body
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <div id="container-6ecac58554a85ebd45aa5bb9ab11a5ae"></div>
    </div>
  );
}
