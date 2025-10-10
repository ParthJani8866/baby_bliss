"use client";

import { useParams } from "next/navigation";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import babyNames from "../../../data/babyNamesArray";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// SEO Properties function
const generateSEOProperties = (selectedGender, selectedLetter) => {
  const baseUrl = "https://baby-toys.shop";
  const currentUrl = `${baseUrl}/baby-names/${selectedGender.toLowerCase()}-names-with-${selectedLetter.toLowerCase()}`;
  
  const title = selectedGender === "All" 
    ? `Baby Names Starting with ${selectedLetter} | Belly Buds`
    : `${selectedGender} Names Starting with ${selectedLetter} | Belly Buds`;
  
  const description = selectedGender === "All"
    ? `Browse all baby names starting with ${selectedLetter}. Discover unique, popular, and traditional names for boys and girls. Find meanings, origins, and popularity trends.`
    : `Discover ${selectedGender.toLowerCase()} names starting with ${selectedLetter}. Browse popular, unique, and traditional ${selectedGender.toLowerCase()} names with meanings and origins.`;

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
        name: `${selectedGender} Names ${selectedLetter}`, 
        url: currentUrl 
      }
    ]
  };
};

// FAQ Data
const faqData = (selectedGender, selectedLetter) => [
  {
    question: `How many ${selectedGender.toLowerCase()} names start with ${selectedLetter}?`,
    answer: `Our database contains a comprehensive collection of ${selectedGender.toLowerCase()} names starting with ${selectedLetter}, including popular, traditional, and unique names from various cultures and origins.`
  },
  {
    question: `Are these ${selectedGender.toLowerCase()} names currently popular?`,
    answer: `We include both classic and trending names. Many names starting with ${selectedLetter} have seen recent popularity, while others are timeless classics that never go out of style.`
  },
  {
    question: "Do you provide name meanings and origins?",
    answer: "Yes! Each name in our database includes detailed information about its meaning, origin, cultural significance, and popularity trends to help you make an informed decision."
  },
  {
    question: `Can I search for ${selectedGender.toLowerCase()} names from specific cultures?`,
    answer: `While this page shows all ${selectedGender.toLowerCase()} names starting with ${selectedLetter}, our detailed name pages include cultural and origin information to help you find names from specific backgrounds.`
  },
  {
    question: "How often is the names list updated?",
    answer: "We regularly update our baby names database with new and trending names, ensuring you have access to both traditional favorites and modern naming trends."
  }
];

export default function BabyNamesSlugPage() {
  const params = useParams();
  const slug = params?.slug ?? "default";

  // Parse slug, e.g. "girl-names-with-a"
  const lowerSlug = slug.toLowerCase();

  let selectedGender = "All";
  if (lowerSlug.includes("girl")) selectedGender = "Girl";
  else if (lowerSlug.includes("boy")) selectedGender = "Boy";

  const selectedLetterMatch = lowerSlug.match(/with-([a-z])/);
  const selectedLetter = selectedLetterMatch
    ? selectedLetterMatch[1].toUpperCase()
    : null;

  const filteredNames = selectedLetter
    ? babyNames.filter(
        (b) =>
          b.name.startsWith(selectedLetter) &&
          (selectedGender === "All" || b.gender === selectedGender)
      )
    : [];

  const seoProperties = selectedLetter ? generateSEOProperties(selectedGender, selectedLetter) : null;
  const currentFaqData = selectedLetter ? faqData(selectedGender, selectedLetter) : [];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Head>
        <title>{seoProperties?.title || "Baby Names | Belly Buds"}</title>
        <meta
          name="description"
          content={seoProperties?.description || "Browse baby names by letter and gender."}
        />
        {seoProperties && (
          <>
            <meta property="og:title" content={seoProperties.openGraph.title} />
            <meta property="og:description" content={seoProperties.openGraph.description} />
            <meta property="og:url" content={seoProperties.openGraph.url} />
            <meta property="og:type" content={seoProperties.openGraph.type} />
            <meta property="og:site_name" content={seoProperties.openGraph.site_name} />
            <link rel="canonical" href={seoProperties.canonical} />
          </>
        )}
      </Head>

      <Header />
      {seoProperties && <BreadcrumbSchema title={seoProperties.title} breadcrumbs={seoProperties.breadcrumbs} />}
      
      {/* Sponsored Ad - Top */}
      <div className="my-8 p-4 bg-orange-50 border rounded shadow">
        <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
        <AdBanner />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-orange-500 text-center">
          {selectedGender === "All"
            ? `Baby Names Starting with "${selectedLetter}"`
            : `${selectedGender} Names Starting with "${selectedLetter}"`}
        </h1>

        {/* Navigation Links */}
        <div className="grid grid-cols-8 sm:grid-cols-13 gap-2 text-center mb-6">
          {alphabet.map((letter) => (
            <Link
              key={letter}
              href={`/baby-names/${selectedGender.toLowerCase()}-names-with-${letter.toLowerCase()}`}
              className={`p-2 rounded-lg text-sm font-semibold border shadow-sm transition ${
                selectedLetter === letter
                  ? "bg-orange-500 text-white border-orange-600"
                  : "bg-white hover:bg-gray-100 border-gray-300"
              }`}
            >
              {letter}
            </Link>
          ))}
        </div>

        {/* Gender Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href={`/baby-names/boy-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
            className={`px-6 py-2 rounded-lg font-medium border shadow-sm transition ${
              selectedGender === "Boy" 
                ? "bg-blue-500 text-white border-blue-600" 
                : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
            }`}
          >
            Boy Names
          </Link>
          <Link
            href={`/baby-names/girl-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
            className={`px-6 py-2 rounded-lg font-medium border shadow-sm transition ${
              selectedGender === "Girl" 
                ? "bg-pink-500 text-white border-pink-600" 
                : "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"
            }`}
          >
            Girl Names
          </Link>
          <Link
            href={`/baby-names/baby-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
            className={`px-6 py-2 rounded-lg font-medium border shadow-sm transition ${
              selectedGender === "All" 
                ? "bg-gray-500 text-white border-gray-600" 
                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
            All Names
          </Link>
        </div>

        {/* Results Count */}
        {selectedLetter && (
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Found <strong>{filteredNames.length}</strong> {selectedGender.toLowerCase()} name{filteredNames.length !== 1 ? 's' : ''} starting with <strong>{selectedLetter}</strong>
            </p>
          </div>
        )}

        {/* Results */}
        {selectedLetter ? (
          filteredNames.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {filteredNames.map((baby, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium">{baby.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        baby.gender === "Boy"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-pink-100 text-pink-700"
                      }`}
                    >
                      {baby.gender}
                    </span>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <section className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-orange-500">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {currentFaqData.map((faq, index) => (
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
            </>
          ) : (
            <p className="text-gray-500 italic text-center mb-16">
              No {selectedGender.toLowerCase()} names found for &ldquo;{selectedLetter}&rdquo;.
            </p>
          )
        ) : (
          <p className="text-center text-gray-500 italic">
            Please choose a letter above.
          </p>
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