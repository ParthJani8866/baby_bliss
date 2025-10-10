"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Enhanced FAQ Data
const faqData = [
  {
    question: "How do I search for baby names by letter?",
    answer: "Simply click on any letter from A to Z in the navigation grid above to browse all baby names starting with that letter. You can also use the separate Boy Names and Girl Names links for gender-specific searches. Our comprehensive database includes thousands of names from various cultures and origins."
  },
  {
    question: "Are the baby names organized by gender?",
    answer: "Yes! For each letter, we provide separate sections for boy names and girl names, making it easy to find gender-specific names. However, many names are unisex and may appear in both categories. Each name is clearly labeled with its gender association to help you make the perfect choice."
  },
  {
    question: "How often is the baby names list updated?",
    answer: "Our baby names database is updated quarterly with new and trending names to reflect current naming trends while maintaining classic and traditional names. We monitor global naming patterns and add culturally diverse names regularly to ensure our collection remains comprehensive and current."
  },
  {
    question: "Can I suggest a baby name to be added?",
    answer: "We're always looking to expand our collection! While we don't have a direct submission feature currently, we regularly research and add popular and unique names from various cultures and regions. Our team continuously monitors naming trends from birth registries, cultural sources, and user feedback to keep our database fresh and relevant."
  },
  {
    question: "Do you include name meanings and origins?",
    answer: "Yes! When you click through to individual letter pages, you'll find detailed information including name meanings, origins, pronunciation guides, popularity trends, and cultural significance for each name. We provide comprehensive background information to help you understand the history and significance behind each name."
  },
  {
    question: "How many baby names are in your database?",
    answer: "Our database contains thousands of carefully curated baby names from around the world. We include names from various cultures, languages, and traditions, ensuring a diverse selection that includes both popular modern choices and timeless classics with historical significance."
  },
  {
    question: "Can I search for names from specific cultures?",
    answer: "While our main navigation is alphabetical, our detailed name pages include cultural and origin information. We feature names from diverse backgrounds including European, Asian, African, Middle Eastern, Latin American, and Indigenous cultures, each with their unique meanings and traditions."
  }
];

// Article Tags
const articleTags = [
  "Baby Names", "Name Meanings", "Boy Names", "Girl Names", "Popular Names",
  "Unique Names", "Traditional Names", "Modern Names", "Name Origins",
  "Naming Tips", "Baby Name Search", "Alphabetical Names", "Name Trends",
  "Parenting", "Newborn", "Baby Care", "Motherhood", "Fatherhood",
  "Name Inspiration", "Cultural Names", "Vintage Names", "Trending Names"
];

// Related Articles Data
const relatedArticles = [
  {
    title: "Top 100 Baby Names of 2024",
    slug: "blogs/top-100-baby-names-2024",
    description: "Discover the most popular and trending baby names for boys and girls this year with detailed popularity charts.",
    category: "Popular Names"
  },
  {
    title: "Unique Baby Names with Beautiful Meanings",
    slug: "blogs/unique-baby-names-meanings",
    description: "Explore rare and meaningful baby names that stand out from the crowd with special significance.",
    category: "Unique Names"
  },
  {
    title: "Traditional & Classic Baby Names",
    slug: "blogs/traditional-classic-baby-names",
    description: "Timeless names that have stood the test of time and never go out of style for generations.",
    category: "Classic Names"
  },
  {
    title: "How to Choose the Perfect Baby Name",
    slug: "blogs/how-to-choose-baby-name",
    description: "Expert tips and considerations for selecting the ideal name that your child will love forever.",
    category: "Naming Tips"
  },
  {
    title: "Cultural Baby Names from Around the World",
    slug: "blogs/cultural-baby-names-world",
    description: "Beautiful names from different cultures and their special meanings and traditions.",
    category: "Cultural Names"
  },
  {
    title: "Modern & Trendy Baby Names",
    slug: "blogs/modern-trendy-baby-names",
    description: "Contemporary names that are gaining popularity among new parents today.",
    category: "Modern Names"
  }
];

// Enhanced SEO Properties function
const generateSEOProperties = () => {
  const baseUrl = "https://baby-toys.shop";
  const currentUrl = `${baseUrl}/baby-names`;
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Generate Article Schema for the main page
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Baby Names Alphabetical Search - Complete A-Z Directory | Belly Buds",
    "description": "Explore thousands of unique baby names alphabetically. Browse boy and girl names by letter with meanings, origins, and popularity trends. Find the perfect name for your baby with our comprehensive A–Z baby name directory.",
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
    "keywords": "Baby Names, Name Search, Alphabetical Names, Boy Names, Girl Names, Name Meanings, Baby Name Directory",
    "inLanguage": "en-US",
    "wordCount": 1200
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
        "item": currentUrl
      }
    ]
  };

  // Generate Site Navigation Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Belly Buds",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/baby-names?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return {
    title: "Baby Names Alphabetical Search - Complete A-Z Directory | Belly Buds",
    description: "Explore thousands of unique baby names alphabetically. Browse boy and girl names by letter with meanings, origins, and popularity trends. Find the perfect name for your baby with our comprehensive A–Z baby name directory.",
    canonical: currentUrl,
    schemaMarkup: [faqSchema, articleSchema, breadcrumbSchema, webSiteSchema],
    openGraph: {
      title: "Baby Names Alphabetical Search - Complete A-Z Directory | Belly Buds",
      description: "Explore thousands of unique baby names alphabetically. Browse boy and girl names by letter with meanings, origins, and popularity trends.",
      url: currentUrl,
      type: "website",
      site_name: "Belly Buds",
      locale: "en_US",
      images: [
        {
          url: `${baseUrl}/images/baby-names-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Baby Names A-Z Search Directory"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Baby Names Alphabetical Search - Complete A-Z Directory",
      description: "Explore thousands of unique baby names alphabetically. Browse boy and girl names by letter.",
      creator: "@bellybuds",
      site: "@bellybuds"
    },
    breadcrumbs: [
      { name: "Home", url: baseUrl },
      { name: "Baby Names", url: `${baseUrl}/baby-names` }
    ]
  };
};

const seoProperties = generateSEOProperties();

export default function BabyNamesHome() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Head>
        <title>{seoProperties.title}</title>
        <meta name="description" content={seoProperties.description} />
        <meta name="keywords" content="baby names, name search, alphabetical names, boy names, girl names, name meanings, baby name directory, popular names, unique names" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Parth Jani" />
        <meta name="publisher" content="Belly Buds" />

        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoProperties.openGraph.title} />
        <meta property="og:description" content={seoProperties.openGraph.description} />
        <meta property="og:url" content={seoProperties.openGraph.url} />
        <meta property="og:type" content={seoProperties.openGraph.type} />
        <meta property="og:site_name" content={seoProperties.openGraph.site_name} />
        <meta property="og:locale" content={seoProperties.openGraph.locale} />
        {seoProperties.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        
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
              className="p-2 rounded-lg text-sm font-semibold border shadow-sm transition bg-white hover:bg-gray-100 border-gray-300 hover:border-orange-300 hover:text-orange-600"
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
                className="w-full text-center px-4 py-3 rounded-lg font-medium border hover:bg-gray-50 bg-blue-50 text-blue-700 border-blue-200 shadow-sm hover:shadow-md transition-all"
              >
                Boy Names with {letter}
              </Link>
              <Link
                href={`/baby-names/girl-names-with-${letter.toLowerCase()}`}
                className="w-full text-center px-4 py-3 rounded-lg font-medium border hover:bg-gray-50 bg-pink-50 text-pink-700 border-pink-200 shadow-sm hover:shadow-md transition-all ml-3"
              >
                Girl Names with {letter}
              </Link>
            </div>
          ))}
        </div>

        {/* SEO Intro Text */}
        <div className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          <p className="mb-4 text-lg leading-relaxed">
            Welcome to the ultimate <strong>A–Z baby name search directory</strong>! Choose a letter above
            to explore <strong>thousands of popular, rare, and modern baby names</strong> for
            boys and girls. Whether you&apos;re looking for traditional favorites or
            trendy new ideas, our comprehensive list helps you find meaningful names that fit
            your baby&apos;s unique personality and heritage.
          </p>
          <p className="text-lg leading-relaxed">
            Each name page includes detailed lists of{" "}
            <strong>boy names and girl names</strong> starting with your chosen
            letter — complete with meanings, origins, pronunciation guides, and
            popularity trends to help you decide the perfect name for your little one.
          </p>
        </div>

        {/* Article Tags */}
        <section className="max-w-4xl mx-auto mb-16">
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

        {/* FAQ Section with Schema Markup */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-orange-500">
            ❓ Frequently Asked Questions
          </h2>
          <div 
            className="space-y-4 bg-white border border-gray-200 rounded-xl p-6"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqData.map((faq, idx) => (
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