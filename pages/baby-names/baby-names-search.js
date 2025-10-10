"use client";

import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import all names from the generated file
import babyNames from "../../data/babyNamesArray"; // adjust path if needed
import AdBanner from "../components/AdBanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const genders = ["All", "Boy", "Girl"];

// SEO Properties function
const generateSEOProperties = (selectedLetter = null, selectedGender = "All") => {
  const baseUrl = "https://baby-toys.shop";
  const currentUrl = selectedLetter
    ? `${baseUrl}/baby-names/search?letter=${selectedLetter}&gender=${selectedGender}`
    : `${baseUrl}/baby-names/search`;

  const title = selectedLetter
    ? `${selectedGender !== "All" ? selectedGender + " " : ""}Baby Names Starting with ${selectedLetter} | Belly Buds`
    : "Baby Names Alphabetical Search | Belly Buds";

  const description = selectedLetter
    ? `Browse ${selectedGender !== "All" ? selectedGender.toLowerCase() + " " : ""}baby names starting with ${selectedLetter}. Discover unique, popular, and traditional names with meanings and origins.`
    : "Discover unique and popular baby names alphabetically. Browse boy and girl names by letter and find the perfect name for your little one.";

  return {
    title,
    description,
    canonical: currentUrl,
    openGraph: {
      title,
      description,
      url: currentUrl,
      type: "website",
      site_name: "Belly Buds"
    },
    breadcrumbs: [
      { name: "Home", url: baseUrl },
      { name: "Baby Names", url: `${baseUrl}/baby-names` },
      {
        name: selectedLetter
          ? `Names ${selectedLetter}${selectedGender !== "All" ? ` (${selectedGender})` : ''}`
          : "Search",
        url: currentUrl
      }
    ]
  };
};

// FAQ Data
const faqData = [
  {
    question: "How do I search for baby names?",
    answer: "Simply click on any letter from A to Z to see all names starting with that letter. You can then filter the results by gender using the 'All', 'Boy', or 'Girl' buttons above the results."
  },
  {
    question: "Are the baby names in this database popular names?",
    answer: "Yes, our database includes a mix of popular, traditional, and unique baby names from various cultures and origins. We regularly update our collection to include trending names as well as timeless classics."
  },
  {
    question: "Can I see name meanings and origins?",
    answer: "While this search page shows the names and genders, our detailed name pages include comprehensive information about name meanings, origins, cultural significance, and popularity trends for each name."
  },
  {
    question: "How many names are in your database?",
    answer: "We have thousands of baby names in our database, covering a wide range of cultures, origins, and styles. Each name is carefully researched and includes proper gender classification."
  },
  {
    question: "Do you include unisex/gender-neutral names?",
    answer: "Yes, our database includes gender-neutral names that are classified appropriately. When browsing, you can select 'All' to see every name regardless of gender, or filter by specific gender to narrow your search."
  },
  {
    question: "How often is the baby names list updated?",
    answer: "We regularly update our baby names database with new and trending names, ensuring you have access to both traditional favorites and modern naming trends from around the world."
  }
];

export default function BabyNamesSearch() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedGender, setSelectedGender] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);

  // Only filter names if a letter is selected
  const filteredNames = selectedLetter
    ? babyNames.filter(
      (b) =>
        b.name.startsWith(selectedLetter) &&
        (selectedGender === "All" || b.gender === selectedGender)
    )
    : [];

  const seoProperties = generateSEOProperties(selectedLetter, selectedGender);

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

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
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8 text-orange-500 text-center">
          Baby Names Alphabetical Search
        </h1>

        {/* Alphabet buttons */}
        <div className="grid grid-cols-8 sm:grid-cols-13 gap-2 text-center mb-4">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`p-2 rounded-lg text-sm font-semibold border shadow-sm transition ${selectedLetter === letter
                ? "bg-orange-500 text-white border-orange-600"
                : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Gender filter buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {genders.map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`px-6 py-2 rounded-lg font-medium border shadow-sm transition ${selectedGender === gender
                ? gender === "Boy"
                  ? "bg-blue-500 text-white border-blue-600"
                  : gender === "Girl"
                    ? "bg-pink-500 text-white border-pink-600"
                    : "bg-orange-500 text-white border-orange-600"
                : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
            >
              {gender}
            </button>
          ))}
        </div>

        {/* Results */}
        {selectedLetter && (
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
              Names starting with &quot;{selectedLetter}&quot;{" "}
              {selectedGender !== "All" ? `(${selectedGender})` : ""}
            </h2>

            <div className="text-center mb-6">
              <p className="text-gray-600">
                Found <strong>{filteredNames.length}</strong> {selectedGender.toLowerCase()} name{filteredNames.length !== 1 ? 's' : ''} starting with <strong>{selectedLetter}</strong>
              </p>
            </div>

            {filteredNames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {filteredNames.map((baby, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium">{baby.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${baby.gender === "Boy"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-pink-100 text-pink-700"
                        }`}
                    >
                      {baby.gender}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic text-center mb-12">
                No names found for {selectedLetter}{" "}
                {selectedGender !== "All" ? `(${selectedGender})` : ""}.
              </p>
            )}

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 text-orange-500">
                ❓ Frequently Asked Questions
              </h2>
              <div className="space-y-4 bg-white border border-gray-200 rounded-xl p-6">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex justify-between items-center text-left"
                      aria-expanded={openFAQ === idx}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                      <span className="text-xl text-orange-500 font-bold ml-4 flex-shrink-0">
                        {openFAQ === idx ? "−" : "+"}
                      </span>
                    </button>
                    {openFAQ === idx && (
                      <div
                        id={`faq-answer-${idx}`}
                        className="text-gray-600 mt-3 leading-relaxed pl-2"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Default FAQ when no letter selected */}
        {!selectedLetter && (
          <section className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-center mb-8 text-orange-500">
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-4 bg-white border border-gray-200 rounded-xl p-6">
              {faqData.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between items-center text-left"
                    aria-expanded={openFAQ === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    <span className="text-xl text-orange-500 font-bold ml-4 flex-shrink-0">
                      {openFAQ === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFAQ === idx && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="text-gray-600 mt-3 leading-relaxed pl-2"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
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