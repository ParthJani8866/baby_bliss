"use client";

import Head from "next/head";
import Header from "../components/header"; // adjust path if needed
import Footer from "../components/Footer"; // adjust path if needed
import Link from "next/link";
import Script from "next/script";


export default function BabyFirstYearMilestones() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Site Header */}
      <Header />

      {/* SEO */}
      <Head>
        <title>5 Milestones to Expect in Your Baby’s First Year | Baby Bliss</title>
        <meta
          name="description"
          content="Learn the top 5 milestones your baby will achieve in their first year. Guide to growth, development, and what to expect month by month."
        />
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-orange-500 transition-colors duration-200">
            Home
          </Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-orange-500 transition-colors duration-200">
            Blogs
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Baby First Year Milestones</span>
        </nav>
        <h1 className="text-3xl font-bold mb-6 text-orange-500">
          5 Milestones to Expect in Your Baby’s First Year
        </h1>

        <p className="mb-4 leading-relaxed">
          The first year of a baby’s life is full of growth, learning, and exciting milestones. While every baby develops at their own pace, there are some key milestones most babies achieve during their first year.
        </p>

        {/* Milestone 1 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Smiling and Social Interaction</h2>
        <p className="mb-4">
          By around 6-8 weeks, babies start smiling at familiar faces. This is a major social milestone showing awareness and attachment to caregivers.
        </p>

        {/* Milestone 2 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Rolling Over</h2>
        <p className="mb-4">
          Typically occurring around 4-6 months, rolling over is one of the first motor skills your baby will achieve. It shows muscle strength and coordination development.
        </p>

        {/* Milestone 3 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Sitting Up Without Support</h2>
        <p className="mb-4">
          Between 6-8 months, most babies can sit independently. This milestone indicates improved balance and core strength.
        </p>

        {/* Milestone 4 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Crawling and Exploring</h2>
        <p className="mb-4">
          Around 7-10 months, babies begin crawling, scooting, or rolling to explore their environment. This is an important physical and cognitive milestone.
        </p>

        {/* Milestone 5 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. First Words and Communication</h2>
        <p className="mb-4">
          By 10-12 months, many babies start saying simple words like “mama” or “dada.” Language development is crucial for social and cognitive growth.
        </p>

        {/* Tips for Parents */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Tips for Supporting Your Baby’s Development</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Encourage tummy time to strengthen muscles.</li>
          <li>Talk, sing, and read to your baby daily to support language skills.</li>
          <li>Provide safe spaces for exploration and play.</li>
          <li>Celebrate milestones but avoid comparing your baby with others.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p className="mb-4">
          Every baby’s first year is unique, but these 5 milestones provide a general guide for parents. Observing and encouraging your baby’s development while providing love and safety ensures a happy and healthy first year.
        </p>
      </div>
      <Footer />
    </div>
  );
}
