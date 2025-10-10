"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import babyNames from "../../../data/babyNamesArray";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Helper function for example names
const getExampleNames = (gender, letter) => {
  const examples = {
    'Boy': {
      'A': 'Alexander, Aaron, Adam',
      'B': 'Benjamin, Brandon, Brayden',
      'C': 'Caleb, Christopher, Carter',
      'D': 'Daniel, David, Dylan',
      'E': 'Ethan, Elijah, Evan',
      'F': 'Finn, Felix, Franklin',
      'G': 'Gabriel, Gavin, George',
      'H': 'Henry, Hunter, Hayden',
      'I': 'Isaac, Ian, Ivan',
      'J': 'James, Jacob, Jackson',
      'K': 'Kai, Kevin, Kyle',
      'L': 'Liam, Lucas, Logan',
      'M': 'Mason, Michael, Matthew',
      'N': 'Noah, Nathan, Nicholas',
      'O': 'Oliver, Owen, Oscar',
      'P': 'Peter, Parker, Patrick',
      'Q': 'Quinn, Quentin, Quincy',
      'R': 'Ryan, Robert, Riley',
      'S': 'Samuel, Sebastian, Simon',
      'T': 'Thomas, Tyler, Theodore',
      'U': 'Uriah, Uriel, Ulysses',
      'V': 'Victor, Vincent, Vance',
      'W': 'William, Wyatt, Wesley',
      'X': 'Xavier, Xander, Xavi',
      'Y': 'Yusuf, Yosef, Yael',
      'Z': 'Zachary, Zion, Zane'
    },
    'Girl': {
      'A': 'Ava, Amelia, Abigail',
      'B': 'Bella, Brooke, Brianna',
      'C': 'Chloe, Charlotte, Camila',
      'D': 'Daisy, Delilah, Diana',
      'E': 'Emma, Emily, Ella',
      'F': 'Faith, Fiona, Freya',
      'G': 'Grace, Gabriella, Genevieve',
      'H': 'Hannah, Harper, Hazel',
      'I': 'Isabella, Ivy, Iris',
      'J': 'Jessica, Julia, Jasmine',
      'K': 'Katherine, Kayla, Kennedy',
      'L': 'Lily, Lucy, Leah',
      'M': 'Mia, Madison, Maya',
      'N': 'Nora, Natalie, Naomi',
      'O': 'Olivia, Oakley, Ophelia',
      'P': 'Penelope, Paige, Phoebe',
      'Q': 'Quinn, Queen, Quest',
      'R': 'Riley, Ruby, Rose',
      'S': 'Sophia, Scarlett, Stella',
      'T': 'Taylor, Trinity, Tessa',
      'U': 'Uma, Unity, Ursula',
      'V': 'Victoria, Violet, Vanessa',
      'W': 'Willow, Winter, Wendy',
      'X': 'Ximena, Xena, Xylie',
      'Y': 'Yara, Yasmine, Yvonne',
      'Z': 'Zoe, Zara, Zelda'
    },
    'All': {
      'A': 'Alexander, Ava, Aaron, Amelia',
      'B': 'Benjamin, Bella, Brandon, Brooke',
      'C': 'Caleb, Chloe, Christopher, Charlotte',
      'D': 'Daniel, Daisy, David, Delilah',
      'E': 'Ethan, Emma, Elijah, Emily',
      'F': 'Finn, Faith, Felix, Fiona',
      'G': 'Gabriel, Grace, Gavin, Gabriella',
      'H': 'Henry, Hannah, Hunter, Harper',
      'I': 'Isaac, Isabella, Ian, Ivy',
      'J': 'James, Jessica, Jacob, Julia',
      'K': 'Kai, Katherine, Kevin, Kayla',
      'L': 'Liam, Lily, Lucas, Lucy',
      'M': 'Mason, Mia, Michael, Madison',
      'N': 'Noah, Nora, Nathan, Natalie',
      'O': 'Oliver, Olivia, Owen, Oakley',
      'P': 'Peter, Penelope, Parker, Paige',
      'Q': 'Quinn, Queen, Quentin, Quest',
      'R': 'Ryan, Riley, Robert, Ruby',
      'S': 'Samuel, Sophia, Sebastian, Scarlett',
      'T': 'Thomas, Taylor, Tyler, Trinity',
      'U': 'Uriah, Uma, Uriel, Unity',
      'V': 'Victor, Victoria, Vincent, Violet',
      'W': 'William, Willow, Wyatt, Winter',
      'X': 'Xavier, Ximena, Xander, Xena',
      'Y': 'Yusuf, Yara, Yosef, Yasmine',
      'Z': 'Zachary, Zoe, Zion, Zara'
    }
  };
  
  return examples[gender]?.[letter] || 'popular names';
};

// Enhanced FAQ Data
const faqData = (selectedGender, selectedLetter, nameCount) => [
  {
    question: `How many ${selectedGender.toLowerCase()} names start with ${selectedLetter}?`,
    answer: `Our database contains ${nameCount} ${selectedGender.toLowerCase()} names starting with ${selectedLetter}, including popular, traditional, and unique names from various cultures and origins. We regularly update our collection with new and trending names.`
  },
  {
    question: `Are ${selectedGender.toLowerCase()} names starting with ${selectedLetter} currently popular?`,
    answer: `Many ${selectedGender.toLowerCase()} names starting with ${selectedLetter} are currently trending. Names like ${getExampleNames(selectedGender, selectedLetter)} have seen significant popularity in recent years. However, popularity varies by region and culture.`
  },
  {
    question: "Do you provide name meanings and origins for these names?",
    answer: "Yes! Each name in our detailed name pages includes comprehensive information about its meaning, origin, cultural significance, pronunciation, and popularity trends. This helps you make an informed decision based on more than just the sound of the name."
  },
  {
    question: `Can I find ${selectedGender.toLowerCase()} names from specific cultures starting with ${selectedLetter}?`,
    answer: `Absolutely! Our database includes ${selectedGender.toLowerCase()} names starting with ${selectedLetter} from various cultures including English, Spanish, Arabic, Hebrew, Indian, African, and Asian origins. Each name page specifies the cultural background and meaning.`
  },
  {
    question: "How often is your baby names database updated?",
    answer: "We update our baby names database quarterly with new trending names, popularity statistics, and cultural variations. We also add names based on user requests and emerging naming trends from around the world."
  },
  {
    question: `What are some unique ${selectedGender.toLowerCase()} names starting with ${selectedLetter}?`,
    answer: `We feature both classic and unique ${selectedGender.toLowerCase()} names starting with ${selectedLetter}. While popular names are common choices, we also highlight rare and distinctive names that stand out while maintaining beautiful meanings and cultural significance.`
  },
  {
    question: "Can I save or shortlist names I like?",
    answer: "Currently, we recommend taking screenshots or noting down your favorite names. We're working on a name shortlisting feature that will allow you to save and compare names across different letters and genders."
  }
];

// Enhanced SEO Properties function
const generateSEOProperties = (selectedGender, selectedLetter, nameCount) => {
  const baseUrl = "https://baby-toys.shop";
  const currentUrl = `${baseUrl}/baby-names/${selectedGender.toLowerCase()}-names-with-${selectedLetter.toLowerCase()}`;
  const currentDate = new Date().toISOString().split('T')[0];
  
  const title = selectedGender === "All" 
    ? `Baby Names Starting with ${selectedLetter} | Complete List & Meanings`
    : `${selectedGender} Names Starting with ${selectedLetter} | Popular & Unique Names`;
  
  const description = selectedGender === "All"
    ? `Browse ${nameCount} baby names starting with ${selectedLetter}. Discover unique, popular, and traditional names for boys and girls with meanings, origins, and popularity trends.`
    : `Discover ${nameCount} ${selectedGender.toLowerCase()} names starting with ${selectedLetter}. Browse popular, unique, and traditional names with meanings, origins, and cultural significance.`;

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData(selectedGender, selectedLetter, nameCount).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Generate Article Schema for this listing page
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Parth Jani",
      "url": baseUrl,
      "email": "parthskyward@gmail.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Belly Buds",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 180,
        "height": 60
      }
    },
    "datePublished": "2024-01-01T00:00:00Z",
    "dateModified": `${currentDate}T00:00:00Z`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "articleSection": "Baby Names",
    "keywords": `Baby Names, ${selectedGender} Names, Names Starting with ${selectedLetter}, Name Meanings, Baby Name Search, Popular Names, Unique Names`,
    "inLanguage": "en-US",
    "wordCount": 1500
  };

  // Generate Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Baby Names",
        "item": `${baseUrl}/baby-names`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${selectedGender} Names ${selectedLetter}`,
        "item": currentUrl
      }
    ]
  };

  return {
    title,
    description,
    canonical: currentUrl,
    schemaMarkup: [faqSchema, articleSchema, breadcrumbSchema],
    openGraph: {
      title,
      description,
      url: currentUrl,
      type: "article",
      site_name: "Belly Buds",
      locale: "en_US",
      published_time: "2024-01-01T00:00:00Z",
      modified_time: `${currentDate}T00:00:00Z`,
      author: "Parth Jani"
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@bellybuds",
      site: "@bellybuds"
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

// Related Articles Data
const relatedArticles = [
  {
    title: "Top 100 Baby Names of 2024",
    slug: "blogs/top-100-baby-names-2024",
    description: "Discover the most popular and trending baby names for boys and girls this year.",
    category: "Popular Names"
  },
  {
    title: "Unique Baby Names with Beautiful Meanings",
    slug: "blogs/unique-baby-names-meanings",
    description: "Explore rare and meaningful baby names that stand out from the crowd.",
    category: "Unique Names"
  },
  {
    title: "Traditional & Classic Baby Names",
    slug: "blogs/traditional-classic-baby-names",
    description: "Timeless names that have stood the test of time and never go out of style.",
    category: "Classic Names"
  },
  {
    title: "Modern & Trendy Baby Names",
    slug: "blogs/modern-trendy-baby-names",
    description: "Contemporary names that are gaining popularity among new parents.",
    category: "Modern Names"
  },
  {
    title: "Cultural Baby Names from Around the World",
    slug: "blogs/cultural-baby-names-world",
    description: "Beautiful names from different cultures and their special meanings.",
    category: "Cultural Names"
  },
  {
    title: "How to Choose the Perfect Baby Name",
    slug: "blogs/how-to-choose-baby-name",
    description: "Expert tips and considerations for selecting the ideal name for your baby.",
    category: "Naming Tips"
  }
];

// Article Tags
const articleTags = [
  "Baby Names", "Name Meanings", "Boy Names", "Girl Names", "Popular Names",
  "Unique Names", "Traditional Names", "Modern Names", "Name Origins",
  "Naming Tips", "Baby Name Search", "Alphabetical Names", "Name Trends",
  "Parenting", "Newborn", "Baby Care", "Name Inspiration"
];

export default function BabyNamesSlugPage() {
  const params = useParams();
  const slug = params?.slug ?? "default";
  const [openFAQ, setOpenFAQ] = useState(null);

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

  const seoProperties = selectedLetter ? generateSEOProperties(selectedGender, selectedLetter, filteredNames.length) : null;
  const currentFaqData = selectedLetter ? faqData(selectedGender, selectedLetter, filteredNames.length) : [];

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Head>
        <title>{seoProperties?.title || "Baby Names | Belly Buds"}</title>
        <meta
          name="description"
          content={seoProperties?.description || "Browse baby names by letter and gender."}
        />
        <meta name="keywords" content={`baby names, ${selectedGender} names, names starting with ${selectedLetter}, name meanings, baby name search, popular names, unique names`} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Parth Jani" />
        <meta name="publisher" content="Belly Buds" />

        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {seoProperties && (
          <>
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={seoProperties.openGraph.title} />
            <meta property="og:description" content={seoProperties.openGraph.description} />
            <meta property="og:url" content={seoProperties.openGraph.url} />
            <meta property="og:type" content={seoProperties.openGraph.type} />
            <meta property="og:site_name" content={seoProperties.openGraph.site_name} />
            <meta property="og:locale" content={seoProperties.openGraph.locale} />
            <meta property="og:published_time" content={seoProperties.openGraph.published_time} />
            <meta property="og:modified_time" content={seoProperties.openGraph.modified_time} />
            <meta property="article:author" content={seoProperties.openGraph.author} />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={seoProperties.twitter.card} />
            <meta name="twitter:title" content={seoProperties.twitter.title} />
            <meta name="twitter:description" content={seoProperties.twitter.description} />
            <meta name="twitter:creator" content={seoProperties.twitter.creator} />
            <meta name="twitter:site" content={seoProperties.twitter.site} />
            
            {/* Canonical URL */}
            <link rel="canonical" href={seoProperties.canonical} />
            
            {/* Structured Data */}
            {seoProperties.schemaMarkup.map((schema, index) => (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
              />
            ))}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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

              {/* Article Tags */}
              <section className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">
                  📚 Related Topics
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
                <div 
                  className="space-y-4 bg-white border border-gray-200 rounded-xl p-6"
                  itemScope
                  itemType="https://schema.org/FAQPage"
                >
                  {currentFaqData.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex justify-between items-center text-left"
                        aria-expanded={openFAQ === idx}
                        aria-controls={`faq-answer-${idx}`}
                      >
                        <span 
                          className="text-lg font-medium text-gray-800"
                          itemProp="name"
                        >
                          {faq.question}
                        </span>
                        <span className="text-xl text-orange-500 font-bold ml-4 flex-shrink-0">
                          {openFAQ === idx ? "−" : "+"}
                        </span>
                      </button>
                      {openFAQ === idx && (
                        <div
                          id={`faq-answer-${idx}`}
                          className="text-gray-600 mt-3 leading-relaxed pl-2"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <div itemProp="text">{faq.answer}</div>
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
                        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded mb-3">
                          {article.category}
                        </span>
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