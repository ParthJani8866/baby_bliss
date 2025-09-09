"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/Footer";
import Script from "next/script";
import ProductSidebar from "../components/ProductSidebar";

export default function SelfCareForMoms() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />

      {/* SEO */}
      <Head>
        <title>Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance | Baby Bliss</title>
        <meta
          name="description"
          content="Discover practical self-care tips for stay-at-home moms. Learn how to balance motherhood, personal wellbeing, and daily responsibilities."
        />
      </Head>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-500 transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-orange-500 transition-colors duration-200">Blogs</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">
              Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance
            </span>
          </nav>

          <h1 className="text-3xl font-bold mb-6 text-orange-500">
            Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance
          </h1>

          <p className="mb-4 leading-relaxed">
            Being a stay-at-home mom is rewarding but also demanding. Taking time for self-care is essential to maintain physical, emotional, and mental wellbeing. Here are practical tips to help you stay balanced and energized.
          </p>

          {[
            { title: "Prioritize Sleep Whenever Possible", content: "Rest is essential for your energy and mood. Take naps when your baby sleeps or share nighttime duties with a partner to get more rest." },
            { title: "Eat Nutritious Meals", content: "Balanced meals and snacks help maintain energy levels. Keep healthy options like fruits, nuts, and smoothies easily accessible." },
            { title: "Schedule “Me Time”", content: "Even 15-30 minutes of personal time daily can help you recharge. Read, take a bath, meditate, or enjoy a hobby." },
            { title: "Move Your Body", content: "Light exercise, stretching, or a walk with your baby in a stroller can boost mood and improve health." },
            { title: "Connect with Others", content: "Join parent groups, online communities, or meet friends to share experiences, reduce isolation, and find support." },
            { title: "Set Realistic Expectations", content: "Accept that not everything will be perfect. Focus on priorities and celebrate small accomplishments each day." },
            { title: "Ask for Help When Needed", content: "Don’t hesitate to ask family or friends for support. Delegating tasks allows you to recharge and focus on your wellbeing." },
            { title: "Practice Mindfulness and Gratitude", content: "Simple mindfulness exercises or journaling can reduce stress and improve mental clarity. Focus on moments of joy with your baby." }
          ].map((tip, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mt-6 mb-3">{idx + 1}. {tip.title}</h2>
              <p className="mb-4">{tip.content}</p>
            </div>
          ))}

          {/* Conclusion */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
          <p className="mb-4">
            Self-care is not a luxury—it’s essential for stay-at-home moms. By prioritizing rest, nutrition, movement, and emotional support, you can maintain balance, stay energized, and enjoy your journey of motherhood fully.
          </p>
        </article>

        {/* Sidebar */}
        <ProductSidebar category="mom-selfcare" limit={8} title="Recommended Products for Moms" />
      </div>

      <Footer />
    </div>
  );
}
