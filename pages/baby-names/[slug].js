import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import babyNames from "../../data/babyNamesArray";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const NAMES_PER_PAGE = 500;

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

// Comprehensive FAQ Data
const faqData = (selectedGender, selectedLetter, nameCount) => [
  {
    question: `How many ${selectedGender.toLowerCase()} names start with ${selectedLetter}?`,
    answer: `Our comprehensive baby names database contains ${nameCount} carefully curated ${selectedGender.toLowerCase()} names starting with the letter ${selectedLetter}. This includes popular modern names, traditional classics, unique discoveries, and culturally diverse names from around the world. We continuously update our collection to include emerging naming trends and user-requested additions.`
  },
  {
    question: `Are ${selectedGender.toLowerCase()} names starting with ${selectedLetter} currently trending?`,
    answer: `Many ${selectedGender.toLowerCase()} names beginning with ${selectedLetter} are experiencing significant popularity in 2024. Classic names like ${getExampleNames(selectedGender, selectedLetter)} remain perennial favorites, while new variations and international names are gaining traction. Popularity varies by region, cultural background, and current naming trends, with some names showing consistent appeal across generations while others reflect contemporary tastes.`
  },
  {
    question: "Do you provide detailed name meanings and origin information?",
    answer: "Yes, each name in our extensive database includes comprehensive details about its meaning, linguistic origin, cultural significance, pronunciation guide, and historical context. We provide information about name variations across different cultures, famous bearers of the name, and popularity trends over time. This rich contextual information helps parents make informed decisions that consider both the sound and substance of each potential baby name."
  },
  {
    question: `Can I find ${selectedGender.toLowerCase()} names from specific cultural backgrounds starting with ${selectedLetter}?`,
    answer: `Absolutely! Our diverse collection includes ${selectedGender.toLowerCase()} names starting with ${selectedLetter} from numerous cultural traditions including English, Spanish, French, Italian, German, Arabic, Hebrew, Indian, African, Asian, Scandinavian, and Celtic origins. Each name is carefully researched to provide accurate cultural context, meaning, and appropriate usage guidelines. We pride ourselves on representing the global diversity of beautiful baby names.`
  },
  {
    question: "How frequently is your baby names database updated and expanded?",
    answer: "We conduct comprehensive quarterly updates to our baby names database, incorporating new trending names, updated popularity statistics, emerging cultural variations, and user-submitted suggestions. Our team of naming experts monitors birth announcements, cultural trends, and global naming patterns to ensure our collection remains current, diverse, and representative of modern parenting choices while honoring traditional naming practices."
  },
  {
    question: `What are some unique and uncommon ${selectedGender.toLowerCase()} names starting with ${selectedLetter}?`,
    answer: `Beyond popular choices, we feature numerous unique ${selectedGender.toLowerCase()} names starting with ${selectedLetter} that offer distinctive character while maintaining beautiful meanings. These include rare gems from various cultures, revived historical names, nature-inspired choices, and creative modern inventions. While classic names provide timeless appeal, unique names can offer special significance and help your child stand out in meaningful ways.`
  },
  {
    question: "Is there a way to save and organize my favorite baby names?",
    answer: "While we're developing an advanced name shortlisting feature, we currently recommend taking screenshots, maintaining a personal list, or using our social sharing features to discuss options with family and friends. Our upcoming name organizer will allow you to save favorites across different letters and genders, compare names side-by-side, track popularity trends, and even get personalized recommendations based on your preferences."
  },
  {
    question: `How do I choose the perfect ${selectedGender.toLowerCase()} name starting with ${selectedLetter}?`,
    answer: `Selecting the ideal name involves considering multiple factors: meaning and significance, family and cultural connections, pronunciation ease, potential nicknames, compatibility with siblings' names, and how the name might suit your child through different life stages. We recommend considering names that resonate personally while being practical for everyday use. Many parents find that combining family traditions with personal preferences leads to the most satisfying choices.`
  },
  {
    question: `What are the most popular ${selectedGender.toLowerCase()} names starting with ${selectedLetter} in recent years?`,
    answer: `Recent popularity trends for ${selectedGender.toLowerCase()} names starting with ${selectedLetter} show a mix of timeless classics and modern innovations. Names like ${getExampleNames(selectedGender, selectedLetter)} have consistently ranked high in birth announcements. However, popularity can vary significantly by region and cultural community. We provide current popularity rankings and historical trend data to help you understand how common or unique your chosen name might be.`
  },
  {
    question: "Can I search for names based on specific meanings or origins?",
    answer: "Yes, our advanced search functionality allows you to filter names by specific meanings (like 'strength,' 'peace,' or 'nature'), cultural origins, name length, and popularity level. This helps you find names that carry particular significance or connect to your heritage. Our meaning-based search is especially popular with parents who want their child's name to reflect specific values, qualities, or family traditions."
  }
];

// Enhanced SEO Properties function with comprehensive optimization
const generateSEOProperties = (selectedGender, selectedLetter, nameCount, currentPage = 1) => {
  const baseUrl = "https://baby-toys.shop";
  const currentUrl = `${baseUrl}/baby-names/${selectedGender.toLowerCase()}-names-with-${selectedLetter.toLowerCase()}`;
  const currentDate = new Date().toISOString().split('T')[0];

  const title = selectedGender === "All"
    ? `Baby Names Starting with ${selectedLetter} | ${nameCount}+ Names with Meanings | Page ${currentPage}`
    : `${selectedGender} Names Starting with ${selectedLetter} | ${nameCount}+ Beautiful ${selectedGender} Names | Page ${currentPage}`;

  const description = selectedGender === "All"
    ? `Discover ${nameCount}+ baby names starting with ${selectedLetter} on page ${currentPage}. Browse popular, unique, and traditional boy & girl names with detailed meanings, origins, and pronunciation guides. Find the perfect name for your baby from our comprehensive collection.`
    : `Explore ${nameCount}+ ${selectedGender.toLowerCase()} names starting with ${selectedLetter} on page ${currentPage}. Find popular, unique, and meaningful ${selectedGender.toLowerCase()} names with complete details about origins, meanings, and cultural significance. Perfect for parents seeking beautiful ${selectedGender.toLowerCase()} names.`;

  // Generate comprehensive FAQ Schema
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

  // Generate detailed Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Parth Jani",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Baby Toys Shop",
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
    "articleSection": "Baby Names Directory",
    "keywords": `Baby Names, ${selectedGender} Names, Names Starting with ${selectedLetter}, Name Meanings, Baby Name Search, Popular Names, Unique Names, Traditional Names, Modern Names, Name Origins, ${selectedGender} Baby Names, Alphabetical Names, Name Lists`,
    "inLanguage": "en-US",
    "wordCount": 2500
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
        "name": `${selectedGender} Names Starting with ${selectedLetter}`,
        "item": currentUrl
      }
    ]
  };

  // Generate ItemList Schema for the name listings
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${selectedGender} Baby Names Starting with ${selectedLetter}`,
    "description": `Comprehensive list of ${nameCount} ${selectedGender.toLowerCase()} baby names beginning with the letter ${selectedLetter}`,
    "numberOfItems": nameCount,
    "itemListOrder": "https://schema.org/AlphabeticalOrder"
  };

  return {
    title,
    description,
    canonical: currentUrl,
    schemaMarkup: [faqSchema, articleSchema, breadcrumbSchema, itemListSchema],
    openGraph: {
      title,
      description,
      url: currentUrl,
      type: "article",
      site_name: "Baby Toys Shop",
      locale: "en_US",
      published_time: "2024-01-01T00:00:00Z",
      modified_time: `${currentDate}T00:00:00Z`,
      author: "Parth Jani"
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@babytoysshop",
      site: "@babytoysshop"
    },
    breadcrumbs: [
      { name: "Home", url: baseUrl },
      { name: "Baby Names", url: `${baseUrl}/baby-names` },
      {
        name: `${selectedGender} Names Starting with ${selectedLetter}`,
        url: currentUrl
      }
    ]
  };
};

// Comprehensive Related Articles Data
const relatedArticles = [
  {
    title: "Top 100 Baby Names of 2024: Most Popular Boy & Girl Names",
    slug: "blogs/top-100-baby-names-2024",
    description: "Discover the year's most popular baby names with detailed trends, regional variations, and what's driving naming choices in 2024.",
    category: "Popular Names",
    readTime: "8 min read"
  },
  {
    title: "Unique Baby Names with Beautiful Meanings: Stand Out Choices",
    slug: "blogs/unique-baby-names-meanings",
    description: "Explore rare and meaningful baby names from around the world that offer distinctive character and profound significance.",
    category: "Unique Names",
    readTime: "10 min read"
  },
  {
    title: "Traditional & Classic Baby Names: Timeless Choices That Endure",
    slug: "blogs/traditional-classic-baby-names",
    description: "Discover classic names that have stood the test of time, with rich histories and enduring appeal across generations.",
    category: "Classic Names",
    readTime: "7 min read"
  },
  {
    title: "Modern & Trendy Baby Names: Contemporary Choices for Today",
    slug: "blogs/modern-trendy-baby-names",
    description: "Explore the latest naming trends with contemporary baby names that reflect current styles and cultural movements.",
    category: "Modern Names",
    readTime: "6 min read"
  },
  {
    title: "Cultural Baby Names from Around the World: Global Inspiration",
    slug: "blogs/cultural-baby-names-world",
    description: "Beautiful names from different cultures and their special meanings, traditions, and pronunciation guides.",
    category: "Cultural Names",
    readTime: "12 min read"
  },
  {
    title: "How to Choose the Perfect Baby Name: Expert Tips & Considerations",
    slug: "blogs/how-to-choose-baby-name",
    description: "Comprehensive guide with expert advice on selecting the ideal name that your child will cherish throughout their life.",
    category: "Naming Tips",
    readTime: "15 min read"
  }
];

// Comprehensive Article Tags for SEO
const articleTags = [
  "Baby Names", "Name Meanings", "Boy Names", "Girl Names", "Popular Names",
  "Unique Names", "Traditional Names", "Modern Names", "Name Origins",
  "Naming Tips", "Baby Name Search", "Alphabetical Names", "Name Trends",
  "Parenting", "Newborn", "Baby Care", "Name Inspiration", "Name Lists",
  "Baby Name Directory", "Name Collections", "Cultural Names", "Name Meanings",
  "Name Popularity", "Name Origins", "Baby Name Ideas", "Name Suggestions"
];

// Enhanced Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  // Always show first page
  pages.push(1);

  // Calculate range around current page
  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(totalPages - 1, currentPage + 2);

  // Add ellipsis after first page if needed
  if (startPage > 2) {
    pages.push('...');
  }

  // Add pages around current page
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // Add ellipsis before last page if needed
  if (endPage < totalPages - 1) {
    pages.push('...');
  }

  // Always show last page if there's more than one page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 my-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${currentPage === 1
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-500 hover:shadow-md"
          }`}
        aria-label="Go to previous page"
      >
        ← Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${page === currentPage
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
              : typeof page === 'number'
                ? "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-blue-300 hover:shadow-md"
                : "bg-transparent text-gray-500 border-transparent cursor-default"
            }`}
          disabled={page === '...'}
          aria-label={typeof page === 'number' ? `Go to page ${page}` : 'More pages'}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${currentPage === totalPages
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-500 hover:shadow-md"
          }`}
        aria-label="Go to next page"
      >
        Next →
      </button>

      {/* Page Info */}
      <div className="text-sm text-gray-600 ml-4">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

// Main Component
export default function BabyNamesSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likedNames, setLikedNames] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // Wait for router to be ready
  useEffect(() => {
    if (router.isReady) {
      setIsLoading(false);
    }
  }, [router.isReady]);

  // Load liked names from localStorage
  useEffect(() => {
    const loadLikedNames = () => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("likedNames");
        return stored ? JSON.parse(stored) : {};
      }
      return {};
    };

    setLikedNames(loadLikedNames());
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [slug]);

  if (isLoading || !slug) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8 text-center">
          <div className="animate-pulse">Loading baby names...</div>
        </main>
        <Footer />
      </div>
    );
  }

  // Parse slug, e.g. "girl-names-with-a"
  const lowerSlug = slug.toLowerCase();

  let selectedGender = "All";
  if (lowerSlug.includes("girl")) selectedGender = "Girl";
  else if (lowerSlug.includes("boy")) selectedGender = "Boy";

  const selectedLetterMatch = lowerSlug.match(/with-([a-z])/);
  const selectedLetter = selectedLetterMatch
    ? selectedLetterMatch[1].toUpperCase()
    : null;

  // Filter names based on selected gender and letter
  const filteredNames = selectedLetter
    ? babyNames.filter(
      (b) =>
        b.name.startsWith(selectedLetter) &&
        (selectedGender === "All" || b.gender === selectedGender)
    )
    : [];

  // Calculate pagination
  const totalPages = Math.ceil(filteredNames.length / NAMES_PER_PAGE);
  const startIndex = (currentPage - 1) * NAMES_PER_PAGE;
  const endIndex = startIndex + NAMES_PER_PAGE;
  const currentNames = filteredNames.slice(startIndex, endIndex);

  const seoProperties = selectedLetter ? generateSEOProperties(selectedGender, selectedLetter, filteredNames.length, currentPage) : null;
  const currentFaqData = selectedLetter ? faqData(selectedGender, selectedLetter, filteredNames.length) : [];

  const toggleLike = (name) => {
    const newLikedNames = {
      ...likedNames,
      [name]: !likedNames[name]
    };
    setLikedNames(newLikedNames);

    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("likedNames", JSON.stringify(newLikedNames));
    }
  };

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <Head>
        <title>{seoProperties?.title || "Baby Names Directory | Baby Toys Shop"}</title>
        <meta
          name="description"
          content={seoProperties?.description || "Comprehensive baby names directory with meanings, origins, and popularity trends."}
        />
        <meta name="keywords" content={`baby names, ${selectedGender} names, names starting with ${selectedLetter}, name meanings, baby name search, popular names, unique names, traditional names, modern names, name origins`} />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Parth Jani" />
        <meta name="publisher" content="Baby Toys Shop" />

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

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {selectedGender === "All"
              ? `Baby Names Starting with "${selectedLetter}"`
              : `${selectedGender} Names Starting with "${selectedLetter}"`}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover {filteredNames.length} beautiful {selectedGender.toLowerCase()} names beginning with {selectedLetter}. 
            Explore meanings, origins, and find the perfect name for your baby from our comprehensive collection.
          </p>
        </section>

        {/* Results Count */}
        {selectedLetter && (
          <section className="text-center mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <p className="text-gray-700 text-lg mb-2">
                Found <strong className="text-blue-600">{filteredNames.length}</strong> {selectedGender.toLowerCase()} name{filteredNames.length !== 1 ? 's' : ''} starting with <strong className="text-purple-600">{selectedLetter}</strong>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Showing names <strong>{startIndex + 1}</strong> to <strong>{Math.min(endIndex, filteredNames.length)}</strong> of {filteredNames.length} total names
              </p>
              {Object.keys(likedNames).filter(name => likedNames[name]).length > 0 && (
                <p className="text-gray-600">
                  <strong>Your favorites: </strong>
                  <span className="text-orange-600">
                    {Object.keys(likedNames).filter(name => likedNames[name]).join(", ")}
                  </span>
                </p>
              )}
            </div>
          </section>
        )}

        {/* Navigation Links */}
        <section className="mb-8">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-13 gap-2 mb-6">
            {alphabet.map((letter) => (
              <Link
                key={letter}
                href={`/baby-names/${selectedGender.toLowerCase()}-names-with-${letter.toLowerCase()}`}
                className={`p-3 rounded-xl text-center font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${selectedLetter === letter
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
                    : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                prefetch={false}
                aria-label={`Browse ${selectedGender.toLowerCase()} names starting with ${letter}`}
              >
                {letter}
              </Link>
            ))}
          </div>

          {/* Gender Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Link
              href={`/baby-names/boy-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
              className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${selectedGender === "Boy"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-transparent shadow-lg"
                  : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300"
                }`}
              prefetch={false}
              aria-label="Browse boy names"
            >
              👦 Boy Names
            </Link>
            <Link
              href={`/baby-names/girl-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
              className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 ${selectedGender === "Girl"
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white border-transparent shadow-lg"
                  : "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300"
                }`}
              prefetch={false}
              aria-label="Browse girl names"
            >
              👧 Girl Names
            </Link>
            <Link
              href={`/baby-names/baby-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
              className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 ${selectedGender === "All"
                  ? "bg-gradient-to-r from-gray-500 to-gray-700 text-white border-transparent shadow-lg"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                }`}
              prefetch={false}
              aria-label="Browse all names"
            >
              👶 All Names
            </Link>
          </div>
        </section>

        {/* Results Grid */}
        {selectedLetter ? (
          filteredNames.length > 0 ? (
            <>
              <section className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentNames.map((baby, i) => (
                    <div
                      key={`${baby.name}-${i}`}
                      className="group bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                          {baby.name}
                        </span>
                        <button
                          onClick={() => toggleLike(baby.name)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 ${likedNames[baby.name]
                              ? "bg-red-500 text-white shadow-lg"
                              : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                            }`}
                          aria-label={likedNames[baby.name] ? `Unlike ${baby.name}` : `Like ${baby.name}`}
                        >
                          {likedNames[baby.name] ? "♥" : "♡"}
                        </button>
                      </div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${baby.gender === "Boy"
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "bg-pink-100 text-pink-700 border border-pink-200"
                          }`}
                      >
                        {baby.gender}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </section>

              {/* Article Tags */}
              <section className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  📚 Related Topics
                </h2>
                <div className="flex flex-wrap gap-2 justify-center">
                  {articleTags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white px-4 py-2 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-medium hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ❓ Frequently Asked Questions
                </h2>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  {currentFaqData.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
                        aria-expanded={openFAQ === idx}
                        aria-controls={`faq-answer-${idx}`}
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <span className={`text-blue-600 font-bold text-xl transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      {openFAQ === idx && (
                        <div
                          id={`faq-answer-${idx}`}
                          className="p-6 pt-0"
                        >
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
              <section className="max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  📖 Continue Reading
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((article, index) => (
                    <Link
                      key={index}
                      href={`/${article.slug}`}
                      className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                      prefetch={false}
                    >
                      <div className="p-6">
                        <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                          {article.category}
                        </span>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-3 leading-relaxed">
                          {article.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 group-hover:text-blue-700 transition-colors">
                            Read More →
                          </span>
                          <span className="text-gray-400 text-xs">
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <section className="text-center py-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <p className="text-gray-500 text-lg mb-4">
                  No {selectedGender.toLowerCase()} names found starting with {selectedLetter}.
                </p>
                <p className="text-gray-600">
                  Try browsing other letters or check our complete name directory.
                </p>
              </div>
            </section>
          )
        ) : (
          <section className="text-center py-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <p className="text-gray-500 text-lg">
                Please select a letter above to browse names.
              </p>
            </div>
          </section>
        )}
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