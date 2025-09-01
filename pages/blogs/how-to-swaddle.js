"use client";

import Head from "next/head";
import Header from "../components/header"; // adjust path if needed
import Footer from "../components/Footer";
import Link from "next/link";

export default function HowToSwaddle() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Site Header */}
      <Header />

      {/* SEO */}
      <Head>
        <title>How to Swaddle Your Baby: Step-by-Step Techniques for Comfort | Baby Bliss</title>
        <meta
          name="description"
          content="Learn how to swaddle your baby safely and comfortably with step-by-step instructions. Tips to help your newborn sleep better and feel secure."
        />
      </Head>
      <Script type='text/javascript' src='//pl27553777.revenuecpmgate.com/df/af/59/dfaf59384b36255eb7c96260e0fb4db8.js'></Script>
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
          <span className="text-gray-700 font-medium"> How to Swaddle Your Baby: Step-by-Step Techniques for Comfort</span>
        </nav>
        <h1 className="text-3xl font-bold mb-6 text-orange-500">
          How to Swaddle Your Baby: Step-by-Step Techniques for Comfort
        </h1>

        <p className="mb-4 leading-relaxed">
          Swaddling can help your newborn feel secure, sleep better, and stay calm. It mimics the snug environment of the womb. Here’s a complete guide on how to swaddle your baby safely and comfortably.
        </p>

        {/* Step 1 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Choose a Soft Swaddle Blanket</h2>
        <p className="mb-4">
          Use a lightweight, breathable blanket. Avoid heavy or stiff materials that could overheat your baby.
        </p>

        {/* Step 2 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Lay Out the Blanket</h2>
        <p className="mb-4">
          Place the blanket in a diamond shape and fold down the top corner. Lay your baby on their back with their shoulders just below the fold.
        </p>

        {/* Step 3 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Position Baby’s Arms</h2>
        <p className="mb-4">
          Gently place your baby’s right arm alongside their body. Take the left side of the blanket and wrap it over the arm and chest, tucking it under the baby’s left side. Repeat for the other arm.
        </p>

        {/* Step 4 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Secure the Legs Comfortably</h2>
        <p className="mb-4">
          Leave enough room for the hips and legs to move freely. Tightly wrapping the legs can cause hip dysplasia. Fold the bottom corner of the blanket over the feet and tuck loosely.
        </p>

        {/* Step 5 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Check for Safety and Comfort</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Ensure the swaddle is snug but not too tight.</li>
          <li>The baby’s head should remain uncovered.</li>
          <li>Check that the baby can move their hips and legs.</li>
          <li>Monitor your baby while swaddled and avoid overheating.</li>
        </ul>

        {/* Benefits of Swaddling */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Benefits of Swaddling</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Helps calm a fussy baby.</li>
          <li>Reduces startle reflex, promoting longer sleep.</li>
          <li>Provides a sense of security similar to the womb.</li>
          <li>Supports safe sleep when done correctly.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p className="mb-4">
          Swaddling is a comforting technique that can soothe your baby and promote better sleep. Always ensure your baby is swaddled safely, with room for hips to move and head uncovered. With practice, swaddling can become a helpful part of your baby’s bedtime routine.
        </p>
      </div>
      <Footer />
    </div>
  );
}
