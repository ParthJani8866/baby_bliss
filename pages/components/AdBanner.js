"use client";
import { useEffect, useRef } from "react";

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    // Clear any existing content
    if (adRef.current) adRef.current.innerHTML = "";

    // Create the ad script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "//pl27936159.effectivegatecpm.com/6ecac58554a85ebd45aa5bb9ab11a5ae/invoke.js";

    // Create the ad container
    const container = document.createElement("div");
    container.id = "container-6ecac58554a85ebd45aa5bb9ab11a5ae";

    // Append inside the component’s div
    adRef.current?.appendChild(container);
    adRef.current?.appendChild(script);

    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={adRef}
      className="flex justify-center my-4"
      style={{ width: "160px", height: "300px" }}
    />
  );
}
