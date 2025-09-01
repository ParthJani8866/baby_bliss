"use client";

import Head from "next/head";
import Header from "../components/header"; // adjust path if needed
import Footer from "../components/Footer";
import Link from "next/link";
import Script from "next/script";

export default function SelfCareForMoms() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Site Header */}
      <Header />

      {/* SEO */}
      <Head>
        <title>Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance | Baby Bliss</title>
        <meta
          name="description"
          content="Discover practical self-care tips for stay-at-home moms. Learn how to balance motherhood, personal wellbeing, and daily responsibilities."
        />
      </Head>
      <Script type='text/javascript' src='//pl27553777.revenuecpmgate.com/df/af/59/dfaf59384b36255eb7c96260e0fb4db8.js'></Script>
      <Script async="async" data-cfasync="false" src="//geographicalpaperworkmovie.com/14557498d6b14f90b64bcba955b87ea1/invoke.js"></Script>
            <div id="container-14557498d6b14f90b64bcba955b87ea1"></div>
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
          <span className="text-gray-700 font-medium">Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance</span>
        </nav>
        <h1 className="text-3xl font-bold mb-6 text-orange-500">
          Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance
        </h1>

        <p className="mb-4 leading-relaxed">
          Being a stay-at-home mom is rewarding but also demanding. Taking time for self-care is essential to maintain physical, emotional, and mental wellbeing. Here are practical tips to help you stay balanced and energized.
        </p>

        {/* Tip 1 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Prioritize Sleep Whenever Possible</h2>
        <p className="mb-4">
          Rest is essential for your energy and mood. Take naps when your baby sleeps or share nighttime duties with a partner to get more rest.
        </p>

        {/* Tip 2 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Eat Nutritious Meals</h2>
        <p className="mb-4">
          Balanced meals and snacks help maintain energy levels. Keep healthy options like fruits, nuts, and smoothies easily accessible.
        </p>

        {/* Tip 3 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Schedule “Me Time”</h2>
        <p className="mb-4">
          Even 15-30 minutes of personal time daily can help you recharge. Read, take a bath, meditate, or enjoy a hobby.
        </p>

        {/* Tip 4 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Move Your Body</h2>
        <p className="mb-4">
          Light exercise, stretching, or a walk with your baby in a stroller can boost mood and improve health.
        </p>

        {/* Tip 5 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Connect with Others</h2>
        <p className="mb-4">
          Join parent groups, online communities, or meet friends to share experiences, reduce isolation, and find support.
        </p>

        {/* Tip 6 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Set Realistic Expectations</h2>
        <p className="mb-4">
          Accept that not everything will be perfect. Focus on priorities and celebrate small accomplishments each day.
        </p>

        {/* Tip 7 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Ask for Help When Needed</h2>
        <p className="mb-4">
          Don’t hesitate to ask family or friends for support. Delegating tasks allows you to recharge and focus on your wellbeing.
        </p>

        {/* Tip 8 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Practice Mindfulness and Gratitude</h2>
        <p className="mb-4">
          Simple mindfulness exercises or journaling can reduce stress and improve mental clarity. Focus on moments of joy with your baby.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
        <p className="mb-4">
          Self-care is not a luxury—it’s essential for stay-at-home moms. By prioritizing rest, nutrition, movement, and emotional support, you can maintain balance, stay energized, and enjoy your journey of motherhood fully.
        </p>
      </div>
      <Footer />
    </div>
  );
}
