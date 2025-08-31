"use client";

import Head from "next/head";
import Header from "../components/header"; // adjust path if needed
import Footer from "../components/Footer";

export default function First24HoursAfterBirth() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Site Header */}
      <Header />

      {/* SEO */}
      <Head>
        <title>What to Expect the First 24 Hours After Giving Birth | Baby Bliss</title>
        <meta
          name="description"
          content="Learn what to expect during the first 24 hours after giving birth. Tips for recovery, newborn care, and bonding with your baby."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-orange-500">
          What to Expect the First 24 Hours After Giving Birth
        </h1>

        <p className="mb-4 leading-relaxed">
          The first 24 hours after giving birth are a crucial time for both mother and baby. It’s a period of recovery, adjustment, and bonding. Here’s what new parents can expect during this important window.
        </p>

        {/* Section 1: Physical Recovery */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Physical Recovery</h2>
        <p className="mb-4">
          After delivery, your body will begin the process of recovery. You may experience:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Vaginal bleeding (lochia) for several days</li>
          <li>Uterine contractions as the uterus shrinks</li>
          <li>Fatigue, soreness, or muscle aches</li>
          <li>Breast engorgement or milk coming in for breastfeeding mothers</li>
        </ul>

        {/* Section 2: Monitoring */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Medical Monitoring</h2>
        <p className="mb-4">
          Nurses and doctors will monitor both mother and baby closely. Key checks include:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Vital signs (blood pressure, pulse, temperature)</li>
          <li>Uterine and bleeding assessment</li>
          <li>Newborn vitals and Apgar score</li>
          <li>Screenings and routine newborn tests</li>
        </ul>

        {/* Section 3: Bonding and Skin-to-Skin */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Bonding and Skin-to-Skin</h2>
        <p className="mb-4">
          Early bonding is critical. Skin-to-skin contact helps regulate the baby’s temperature, breathing, and heart rate. It also encourages breastfeeding and emotional connection.
        </p>

        {/* Section 4: Feeding */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Feeding Your Baby</h2>
        <p className="mb-4">
          The first feed is important, whether breastfeeding or formula. Tips include:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Feed on demand, usually every 2-3 hours</li>
          <li>Watch for hunger cues such as rooting or sucking motions</li>
          <li>Ensure proper latch if breastfeeding</li>
          <li>Keep the baby upright after feeding to prevent spit-ups</li>
        </ul>

        {/* Section 5: Emotional Changes */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Emotional Changes</h2>
        <p className="mb-4">
          Hormonal shifts and exhaustion can cause mood swings, tears, or anxiety. This is normal, but seek help if you feel overwhelmed or notice signs of postpartum depression.
        </p>

        {/* Section 6: Sleep and Rest */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Sleep and Rest</h2>
        <p className="mb-4">
          Sleep is crucial for recovery. Take naps when possible and accept help from family or hospital staff to rest while your baby is cared for.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p className="mb-4">
          The first 24 hours after birth are a time of adjustment, healing, and bonding. Understanding what to expect helps reduce anxiety and allows new parents to focus on recovery and nurturing their newborn.
        </p>
      </div>
      <Footer />
    </div>
  );
}
