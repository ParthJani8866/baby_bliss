"use client";

import Head from "next/head";
import Header from "../components/header"; // adjust path if needed
import Footer from "../components/Footer";

export default function BreastfeedingVsFormula() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Site Header */}
      <Header />

      {/* SEO */}
      <Head>
        <title>Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider | Baby Bliss</title>
        <meta
          name="description"
          content="Learn the pros and cons of breastfeeding vs formula feeding. Make an informed decision for your baby's health and your convenience."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-orange-500">
          Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider
        </h1>

        <p className="mb-4 leading-relaxed">
          Feeding your baby is one of the most important decisions you’ll make as a parent. Both breastfeeding and formula feeding have advantages and challenges. Understanding them will help you choose the best option for you and your baby.
        </p>

        {/* Pros of Breastfeeding */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Pros of Breastfeeding</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Nutrition:</strong> Breast milk contains the perfect balance of nutrients and antibodies for your newborn.</li>
          <li><strong>Bonding:</strong> Skin-to-skin contact strengthens emotional connection.</li>
          <li><strong>Immune Support:</strong> Protects babies against infections and illnesses.</li>
          <li><strong>Cost-effective:</strong> Free and readily available.</li>
          <li><strong>Digestive Comfort:</strong> Easier for babies to digest than formula.</li>
        </ul>

        {/* Cons of Breastfeeding */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Cons of Breastfeeding</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Can be physically demanding and tiring for the mother.</li>
          <li>Some mothers may experience nipple pain or engorgement.</li>
          <li>Diet restrictions and careful monitoring of certain foods and medications.</li>
          <li>May not be feasible for working mothers without support or pumping equipment.</li>
        </ul>

        {/* Pros of Formula Feeding */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Pros of Formula Feeding</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Provides flexibility for both parents to feed the baby.</li>
          <li>Convenient for working parents or travel situations.</li>
          <li>Easy to monitor the exact amount of milk intake.</li>
          <li>No dietary restrictions for the mother.</li>
        </ul>

        {/* Cons of Formula Feeding */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Cons of Formula Feeding</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Costly compared to breastfeeding.</li>
          <li>Requires preparation and careful hygiene.</li>
          <li>Lacks the natural antibodies present in breast milk.</li>
          <li>May cause digestive issues or allergies in some babies.</li>
        </ul>

        {/* Tips for Parents */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Tips for Parents</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Consult your pediatrician before deciding on formula types.</li>
          <li>Combine breastfeeding and formula if needed (mixed feeding).</li>
          <li>Ensure proper storage and preparation of formula to avoid contamination.</li>
          <li>Prioritize your and your baby's comfort — every family is unique.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p className="mb-4">
          Both breastfeeding and formula feeding can meet your baby’s nutritional needs if done properly. The choice depends on your lifestyle, health, and personal preference. Remember, the most important thing is that your baby is fed, happy, and healthy.
        </p>
      </div>
      <Footer />
    </div>
  );
}
