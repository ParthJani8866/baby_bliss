"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
    category: "Popular Names",
    image: "/images/top-names-2024.jpg",
    readTime: "5 min"
  },
  {
    title: "Unique Baby Names with Beautiful Meanings",
    slug: "blogs/unique-baby-names-meanings",
    description: "Explore rare and meaningful baby names that stand out from the crowd with special significance.",
    category: "Unique Names",
    image: "/images/unique-names.jpg",
    readTime: "7 min"
  },
  {
    title: "Traditional & Classic Baby Names",
    slug: "blogs/traditional-classic-baby-names",
    description: "Timeless names that have stood the test of time and never go out of style for generations.",
    category: "Classic Names",
    image: "/images/classic-names.jpg",
    readTime: "6 min"
  },
  {
    title: "How to Choose the Perfect Baby Name",
    slug: "blogs/how-to-choose-baby-name",
    description: "Expert tips and considerations for selecting the ideal name that your child will love forever.",
    category: "Naming Tips",
    image: "/images/choose-name.jpg",
    readTime: "8 min"
  },
  {
    title: "Cultural Baby Names from Around the World",
    slug: "blogs/cultural-baby-names-world",
    description: "Beautiful names from different cultures and their special meanings and traditions.",
    category: "Cultural Names",
    image: "/images/cultural-names.jpg",
    readTime: "9 min"
  },
  {
    title: "Modern & Trendy Baby Names",
    slug: "blogs/modern-trendy-baby-names",
    description: "Contemporary names that are gaining popularity among new parents today.",
    category: "Modern Names",
    image: "/images/modern-names.jpg",
    readTime: "5 min"
  }
];

// Popular Names by Category
const popularCategories = [
  {
    title: "🌍 Cultural Names",
    description: "Names from different cultures and traditions",
    count: "500+",
    color: "from-purple-500 to-pink-500",
    link: "/baby-names/cultural"
  },
  {
    title: "⭐ Popular 2024",
    description: "This year's most trending names",
    count: "100+",
    color: "from-blue-500 to-cyan-500",
    link: "/baby-names/popular-2024"
  },
  {
    title: "💎 Unique & Rare",
    description: "Uncommon names that stand out",
    count: "300+",
    color: "from-green-500 to-emerald-500",
    link: "/baby-names/unique"
  },
  {
    title: "📜 Traditional",
    description: "Classic names that never fade",
    count: "400+",
    color: "from-orange-500 to-red-500",
    link: "/baby-names/traditional"
  },
  {
    title: "🌟 Modern",
    description: "Contemporary and trendy choices",
    count: "200+",
    color: "from-indigo-500 to-purple-500",
    link: "/baby-names/modern"
  },
  {
    title: "🌺 Nature Names",
    description: "Inspired by nature and flowers",
    count: "150+",
    color: "from-teal-500 to-green-500",
    link: "/baby-names/nature"
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
  const [activeTab, setActiveTab] = useState("all");

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Find the Perfect
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Baby Name
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover thousands of beautiful baby names with meanings, origins, and popularity trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#name-search"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              🔍 Search Names
            </Link>
            <Link
              href="/blogs/how-to-choose-baby-name"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              💡 Naming Tips
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsored Ad - Top */}
      <div className="bg-white border-y border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
            <h3 className="text-lg font-semibold mb-4 text-orange-600 text-center">✨ Sponsored</h3>
            <AdBanner />
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* A–Z Letter Navigation */}
        <section id="name-search" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse Names Alphabetically
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click any letter to explore baby names starting with that letter. Each page includes detailed information about names, their meanings, and origins.
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-13 gap-3 mb-8">
            {alphabet.map((letter) => (
              <Link
                key={letter}
                href={`/baby-names/baby-names-with-${letter.toLowerCase()}`}
                className="group relative p-4 rounded-2xl text-center transition-all duration-300 bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="text-2xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {letter}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              </Link>
            ))}
          </div>

          {/* Complete A-Z Boy Names Links */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">👦 Complete Boy Names A-Z</h3>
              <p className="text-gray-600">Browse all boy names organized alphabetically</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-13 gap-2">
              {alphabet.map((letter) => (
                <Link
                  key={`boy-${letter}`}
                  href={`/baby-names/boy-names-with-${letter.toLowerCase()}`}
                  className="group p-3 rounded-xl text-center transition-all duration-300 bg-blue-50 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-100 hover:shadow-lg"
                >
                  <div className="text-lg font-semibold text-blue-700 group-hover:text-blue-800">
                    {letter}
                  </div>
                  <div className="text-xs text-blue-600 mt-1">Boy</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Complete A-Z Girl Names Links */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">👧 Complete Girl Names A-Z</h3>
              <p className="text-gray-600">Browse all girl names organized alphabetically</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-13 gap-2">
              {alphabet.map((letter) => (
                <Link
                  key={`girl-${letter}`}
                  href={`/baby-names/girl-names-with-${letter.toLowerCase()}`}
                  className="group p-3 rounded-xl text-center transition-all duration-300 bg-pink-50 border-2 border-pink-200 hover:border-pink-500 hover:bg-pink-100 hover:shadow-lg"
                >
                  <div className="text-lg font-semibold text-pink-700 group-hover:text-pink-800">
                    {letter}
                  </div>
                  <div className="text-xs text-pink-600 mt-1">Girl</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Gender Navigation */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold text-center mb-6">
              Quick Gender Search
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/baby-names/boy-names"
                className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">👦</div>
                  <h4 className="text-lg font-bold mb-2">All Boy Names</h4>
                  <p className="text-blue-100 text-sm">Complete A-Z directory of masculine names</p>
                </div>
              </Link>
              <Link
                href="/baby-names/girl-names"
                className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">👧</div>
                  <h4 className="text-lg font-bold mb-2">All Girl Names</h4>
                  <p className="text-blue-100 text-sm">Complete A-Z directory of feminine names</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Name Categories
            </h2>
            <p className="text-lg text-gray-600">
              Browse names by style, origin, and popularity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCategories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group block p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">{category.count} names</span>
                    <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Baby Names</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cultures</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">26</div>
              <div className="text-blue-100">Letters</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2024</div>
              <div className="text-blue-100">Updated</div>
            </div>
          </div>
        </section>

        {/* Article Tags */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Name Topics
            </h2>
            <p className="text-lg text-gray-600">
              Explore trending topics and naming inspiration
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {articleTags.map((tag, index) => (
              <Link
                key={index}
                href={`/blogs/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-700 hover:text-blue-600 font-medium text-sm">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about finding the perfect baby name
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors"
                  aria-expanded={openFAQ === idx}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-blue-600 font-bold text-xl transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFAQ === idx && (
                  <div className="p-6 pt-0">
                    <div className="text-gray-700 leading-relaxed bg-blue-50 rounded-xl p-4 border border-blue-200">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Continue Your Naming Journey
            </h2>
            <p className="text-lg text-gray-600">
              Discover more insights and inspiration for choosing the perfect name
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <Link
                key={index}
                href={`/${article.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    {article.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    <span>Read Article</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Find Your Babys Name?
            </h2>
            <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
              Start your journey with our comprehensive A-Z directory and discover the perfect name that tells your babys story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#name-search"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                🎉 Start Exploring Names
              </Link>
              <Link
                href="/baby-names/boy-names"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
              >
                👦 Browse Boy Names
              </Link>
              <Link
                href="/baby-names/girl-names"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
              >
                👧 Browse Girl Names
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Sponsored Ad - Bottom */}
      <div className="bg-white border-y border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
            <h3 className="text-lg font-semibold mb-4 text-green-600 text-center">💫 Sponsored</h3>
            <AdBanner />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}