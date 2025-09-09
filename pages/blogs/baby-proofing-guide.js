"use client";

import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import Script from "next/script";
import ProductSidebar from "../components/ProductSidebar";

export default function BabyProofingGuide() {
  const [products, setProducts] = useState([]);

  // Fetch top 14 products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products?limit=14'); // Replace with your actual API
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Header */}
      <Header />

      {/* SEO */}
      <Head>
        <title>How to Make Your Home Baby-Safe: Complete Baby-Proofing Guide | Baby Bliss</title>
        <meta
          name="description"
          content="Step-by-step guide to baby-proof your home. Learn safety tips, essential precautions, and prevent accidents for newborns and toddlers."
        />
      </Head>

      {/* Scripts */}
      <Script type="text/javascript" src="//pl27553777.revenuecpmgate.com/df/af/59/dfaf59384b36255eb7c96260e0fb4db8.js"></Script>
      <Script async data-cfasync="false" src="//geographicalpaperworkmovie.com/14557498d6b14f90b64bcba955b87ea1/invoke.js"></Script>
      <div id="container-14557498d6b14f90b64bcba955b87ea1"></div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-3 space-y-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-orange-500 transition">Blogs</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Baby-Proofing Guide</span>
          </nav>

          <h1 className="text-3xl font-bold mb-6 text-orange-500">How to Make Your Home Baby-Safe: Complete Baby-Proofing Guide</h1>

          <p className="leading-relaxed mb-4">
            Ensuring your home is safe for your baby is essential to prevent accidents and give you peace of mind. Baby-proofing involves identifying hazards and making adjustments to protect your newborn or toddler. Here’s a complete guide to baby-proofing your home effectively.
          </p>

          {/* Baby-Proofing Steps */}
          {[
            { title: "Secure Furniture and Sharp Edges", content: "Anchor heavy furniture like bookshelves, cabinets, and TVs to walls. Use corner guards on sharp edges of tables and countertops to prevent injuries." },
            { title: "Install Safety Gates", content: "Use safety gates at the top and bottom of stairs and to restrict access to rooms that aren’t baby-safe. Make sure gates are securely installed and meet safety standards." },
            { title: "Protect Electrical Outlets and Cords", content: "Cover all unused outlets with safety plugs. Keep electrical cords out of reach or secured to prevent strangulation hazards." },
            { title: "Lock Cabinets and Drawers", content: "Use childproof locks for cabinets and drawers containing cleaning products, medicines, or sharp objects. Store hazardous items high up and out of reach." },
            { title: "Check for Choking Hazards", content: "Small objects, coins, batteries, and toys with small parts can be choking hazards. Keep floors and surfaces free of small items, and check toys for age-appropriate safety labels." },
          ].map((step, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mt-6 mb-3">{idx + 1}. {step.title}</h2>
              <p className="mb-4">{step.content}</p>
            </div>
          ))}

          {/* Bathroom Safety */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Bathroom Safety</h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Never leave your baby unattended in the bathtub.</li>
            <li>Use non-slip mats in the tub and on the bathroom floor.</li>
            <li>Keep toilet lids closed and install child locks.</li>
            <li>Store all medicines, cosmetics, and cleaning products out of reach.</li>
          </ul>

          {/* Kitchen Safety */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Kitchen Safety</h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Use stove knob covers to prevent accidental burns.</li>
            <li>Keep knives, scissors, and small kitchen tools in locked drawers or high shelves.</li>
            <li>Install corner guards on countertops.</li>
            <li>Keep hot drinks and liquids out of reach of little hands.</li>
          </ul>

          {/* Floors & Windows */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Floors and Windows</h2>
          <p className="mb-4">Keep floors clean and free of obstacles to prevent falls. Install window guards or locks to prevent accidental falls from windows.</p>

          {/* Additional Tips */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Additional Tips</h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Keep emergency phone numbers handy.</li>
            <li>Teach older children about baby safety rules.</li>
            <li>Regularly inspect your home for new hazards as your baby grows and becomes more mobile.</li>
          </ul>

          {/* Conclusion */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
          <p className="mb-4">Baby-proofing your home is an ongoing process. By securing furniture, covering sharp edges, installing gates, and keeping hazardous items out of reach, you can create a safe environment for your baby to explore and grow.</p>
        </article>

        {/* Side Product Bar */}
        <ProductSidebar category="baby-diapers" limit={8} title="Top Diaper Picks" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
