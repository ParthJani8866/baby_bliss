"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// SEO Properties function
const generateSEOProperties = () => {
  const baseUrl = "https://baby-toys.shop";
  const currentUrl = `${baseUrl}/baby-names`;
  const currentDate = new Date().toISOString().split('T')[0];

  return {
    title: "Baby Names Alphabetical Search | Belly Buds",
    description: "Explore unique baby names alphabetically. Browse boy and girl names by letter — find the perfect name for your baby with our A–Z baby name directory.",
    canonical: currentUrl,
    openGraph: {
      title: "Baby Names Alphabetical Search | Belly Buds",
      description: "Explore unique baby names alphabetically. Browse boy and girl names by letter — find the perfect name for your baby with our A–Z baby name directory.",
      url: currentUrl,
      type: "website",
      site_name: "Belly Buds"
    },
    breadcrumbs: [
      { name: "Home", url: baseUrl },
      { name: "Baby Names", url: `${baseUrl}/baby-names` }
    ]
  };
};

const seoProperties = generateSEOProperties();

// FAQ Data
const faqData = [
  {
    question: "How do I search for baby names by letter?",
    answer: "Simply click on any letter from A to Z in the navigation grid above to browse all baby names starting with that letter. You can also use the separate Boy Names and Girl Names links for gender-specific searches."
  },
  {
    question: "Are the baby names organized by gender?",
    answer: "Yes! For each letter, we provide separate sections for boy names and girl names, making it easy to find gender-specific names. However, many names are unisex and may appear in both categories."
  },
  {
    question: "How often is the baby names list updated?",
    answer: "Our baby names database is regularly updated with new and trending names to reflect current naming trends while maintaining classic and traditional names."
  },
  {
    question: "Can I suggest a baby name to be added?",
    answer: "We're always looking to expand our collection! While we don't have a direct submission feature currently, we regularly research and add popular and unique names from various cultures and regions."
  },
  {
    question: "Do you include name meanings and origins?",
    answer: "Yes! When you click through to individual letter pages, you'll find detailed information including name meanings, origins, popularity trends, and cultural significance for each name."
  }
];

export default function BabyNamesHome() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Head>
        <title>{seoProperties.title}</title>
        <meta name="description" content={seoProperties.description} />
        <meta property="og:title" content={seoProperties.openGraph.title} />
        <meta property="og:description" content={seoProperties.openGraph.description} />
        <meta property="og:url" content={seoProperties.openGraph.url} />
        <meta property="og:type" content={seoProperties.openGraph.type} />
        <meta property="og:site_name" content={seoProperties.openGraph.site_name} />
        <link rel="canonical" href={seoProperties.canonical} />
      </Head>

      <Header />
      <BreadcrumbSchema title={seoProperties.title} breadcrumbs={seoProperties.breadcrumbs} />
      
      {/* Sponsored Ad - Top */}
      <div className="my-8 p-4 bg-orange-50 border rounded shadow">
        <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
        <AdBanner />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 text-orange-500 text-center">
          Baby Names Alphabetical Search
        </h1>

        {/* A–Z Letter Navigation */}
        <div className="grid grid-cols-8 sm:grid-cols-13 gap-2 text-center mb-8">
          {alphabet.map((letter) => (
            <Link
              key={letter}
              href={`/baby-names/baby-names-with-${letter.toLowerCase()}`}
              className="p-2 rounded-lg text-sm font-semibold border shadow-sm transition bg-white hover:bg-gray-100 border-gray-300"
            >
              {letter}
            </Link>
          ))}
        </div>

        {/* Boy & Girl Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {alphabet.map((letter) => (
            <div key={letter} className="flex justify-between items-center">
              <Link
                href={`/baby-names/boy-names-with-${letter.toLowerCase()}`}
                className="w-full text-center px-4 py-3 rounded-lg font-medium border hover:bg-gray-50 bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
              >
                Boy Names with {letter}
              </Link>
              <Link
                href={`/baby-names/girl-names-with-${letter.toLowerCase()}`}
                className="w-full text-center px-4 py-3 rounded-lg font-medium border hover:bg-gray-50 bg-pink-50 text-pink-700 border-pink-200 shadow-sm ml-3"
              >
                Girl Names with {letter}
              </Link>
            </div>
          ))}
        </div>

        {/* SEO Intro Text */}
        <div className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          <p className="mb-4">
            Welcome to the ultimate A–Z baby name search! Choose a letter above
            to explore <strong>popular, rare, and modern baby names</strong> for
            boys and girls. Whether you're looking for traditional favorites or
            trendy new ideas, our list helps you find meaningful names that fit
            your baby's unique personality.
          </p>
          <p>
            Each page includes detailed lists of{" "}
            <strong>boy names and girl names</strong> starting with your chosen
            letter — making it easy to browse and decide the perfect name for
            your little one.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-orange-500">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sponsored Ad - Bottom */}
      <div className="my-8 p-4 bg-orange-50 border rounded shadow">
        <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
        <AdBanner />
      </div>

      <Footer />
    </div>
  );
}