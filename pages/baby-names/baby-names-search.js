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
          ? `Search Results ${selectedLetter}${selectedGender !== "All" ? ` (${selectedGender})` : ''}`
          : "Baby Name Search",
        url: currentUrl
      }
    ]
  };
};

// FAQ Data
const faqData = [
  {
    question: "How do I use the baby name search feature?",
    answer: "Our baby name search is simple to use! Click on any letter from A to Z to view all names starting with that letter. You can then filter the results by gender using the 'Boy', 'Girl', or 'All' buttons. This allows you to quickly find names that match your preferences."
  },
  {
    question: "Are these baby names popular and modern?",
    answer: "Yes! Our database includes a carefully curated mix of popular modern names, timeless classics, and unique traditional names from various cultures. We regularly update our collection to include trending names while maintaining a comprehensive selection of traditional favorites."
  },
  {
    question: "Can I find name meanings and cultural origins?",
    answer: "Absolutely! While this search page displays names and genders, each name in our detailed database includes comprehensive information about its meaning, cultural origin, historical significance, and current popularity trends to help you make an informed decision."
  },
  {
    question: "How comprehensive is your baby names database?",
    answer: "We maintain an extensive database with thousands of carefully researched baby names spanning multiple cultures, languages, and traditions. Each name is properly classified by gender and includes detailed background information to help you find the perfect name for your baby."
  },
  {
    question: "Do you include gender-neutral and unisex names?",
    answer: "Yes, we have a comprehensive collection of gender-neutral and unisex names. When browsing, you can select 'All' to view every name regardless of gender classification, or use the gender filters to narrow your search to specifically boy or girl names."
  },
  {
    question: "How often do you update your baby names collection?",
    answer: "We continuously update our baby names database to reflect current naming trends and include new popular names. Our team regularly researches naming patterns, cultural influences, and emerging trends to ensure you have access to both contemporary favorites and timeless classics."
  },
  {
    question: "Can I search for names from specific cultures?",
    answer: "While this alphabetical search organizes names by letter, our detailed name pages include comprehensive cultural and origin information. You can explore names from various backgrounds including European, Asian, African, Latin, and Middle Eastern origins, each with their unique meanings and significance."
  },
  {
    question: "Are there names suitable for twins or siblings?",
    answer: "Yes! Many parents use our search to find complementary names for twins or siblings. You can browse names starting with the same letter or explore different letters to find names that sound harmonious together while maintaining individual character."
  }
];

// Article Tags
const articleTags = [
  "Baby Names 2024", "Popular Names", "Unique Names", "Traditional Names", 
  "Modern Names", "Name Meanings", "Cultural Names", "Name Origins",
  "Boy Names", "Girl Names", "Unisex Names", "Name Trends",
  "Naming Tips", "Baby Name Ideas", "Name Search", "Alphabetical Names"
];

// Related Articles Data
const relatedArticles = [
  {
    title: "Top 100 Baby Names of 2024: Trending & Popular",
    slug: "blogs/top-100-baby-names-2024",
    description: "Discover the most popular and trending baby names for boys and girls this year with detailed meanings and origins.",
    category: "Popular Names",
    readTime: "5 min read"
  },
  {
    title: "Unique Baby Names with Beautiful Meanings",
    slug: "blogs/unique-baby-names-meanings",
    description: "Explore rare and meaningful baby names that stand out from the crowd with special significance.",
    category: "Unique Names",
    readTime: "4 min read"
  },
  {
    title: "Traditional & Classic Baby Names That Never Fade",
    slug: "blogs/traditional-classic-baby-names",
    description: "Timeless names that have stood the test of generations and continue to be beloved choices.",
    category: "Classic Names",
    readTime: "6 min read"
  },
  {
    title: "How to Choose the Perfect Baby Name: Expert Guide",
    slug: "blogs/how-to-choose-baby-name",
    description: "Comprehensive tips and considerations for selecting the ideal name that your child will love.",
    category: "Naming Tips",
    readTime: "7 min read"
  },
  {
    title: "Cultural Baby Names from Around the World",
    slug: "blogs/cultural-baby-names-world",
    description: "Beautiful names from different cultures with their special meanings and traditions.",
    category: "Cultural Names",
    readTime: "8 min read"
  },
  {
    title: "Modern & Trendy Baby Names for Contemporary Parents",
    slug: "blogs/modern-trendy-baby-names",
    description: "Contemporary names that are gaining popularity among new parents in the digital age.",
    category: "Modern Names",
    readTime: "5 min read"
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

            {/* Article Tags */}
            <section className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">
                📚 Explore Baby Name Topics
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {articleTags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto mb-12">
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

            {/* Related Articles */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 text-orange-500">
                📖 Continue Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={`/${article.slug}`}
                    className="block border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                        {article.description}
                      </p>
                      <span className="text-orange-500 font-medium text-sm inline-flex items-center gap-1 group-hover:text-orange-600 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Default content when no letter selected */}
        {!selectedLetter && (
          <div className="space-y-16">
            {/* Article Tags */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">
                📚 Explore Baby Name Topics
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {articleTags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </section>

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

            {/* Related Articles */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 text-orange-500">
                📖 Popular Baby Name Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={`/${article.slug}`}
                    className="block border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                        {article.description}
                      </p>
                      <span className="text-orange-500 font-medium text-sm inline-flex items-center gap-1 group-hover:text-orange-600 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
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