import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';

// Lazy load components
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <div className="h-16 bg-white border-b border-gray-200 animate-pulse" />
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse" />
});

const AdBanner = dynamic(() => import("../components/AdBanner"), {
  loading: () => <div className="h-24 bg-gray-100 rounded-lg animate-pulse" />,
  ssr: false
});

const BreadcrumbSchema = dynamic(() => import("../components/BreadcrumbSchema"));

// Lazy load heavy data
let babyNames = [];
const loadBabyNames = async () => {
  if (typeof window !== 'undefined') {
    const module = await import("../../data/babyNamesArray");
    babyNames = module.default || module;
  }
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const NAMES_PER_PAGE = 100;

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
const generateSEOProperties = (selectedGender, selectedLetter, nameCount, currentPage = 1) => {
  const baseUrl = "https://baby-toys.shop";
  const currentUrl = `${baseUrl}/baby-names/${selectedGender.toLowerCase()}-names-with-${selectedLetter.toLowerCase()}`;
  const currentDate = new Date().toISOString().split('T')[0];

  const title = selectedGender === "All"
    ? `Baby Names Starting with ${selectedLetter} | Page ${currentPage} | Complete List & Meanings`
    : `${selectedGender} Names Starting with ${selectedLetter} | Page ${currentPage} | Popular & Unique Names`;

  const description = selectedGender === "All"
    ? `Browse ${nameCount} baby names starting with ${selectedLetter}. Page ${currentPage} of ${Math.ceil(nameCount / NAMES_PER_PAGE)}. Discover unique, popular, and traditional names for boys and girls with meanings, origins, and popularity trends.`
    : `Discover ${nameCount} ${selectedGender.toLowerCase()} names starting with ${selectedLetter}. Page ${currentPage} of ${Math.ceil(nameCount / NAMES_PER_PAGE)}. Browse popular, unique, and traditional names with meanings, origins, and cultural significance.`;

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
      "url": baseUrl
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
        "name": `${selectedGender} Names ${selectedLetter} - Page ${currentPage}`,
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
        name: `${selectedGender} Names ${selectedLetter} - Page ${currentPage}`,
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

// Optimized Pagination Component with memo
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = useMemo(() => {
    const pageArray = [];
    
    // Always show first page
    pageArray.push(1);

    // Calculate range around current page
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageArray.push('...');
    }

    // Add pages around current page
    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(i);
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageArray.push('...');
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pageArray.push(totalPages);
    }

    return pageArray;
  }, [currentPage, totalPages]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 my-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-500 hover:shadow-md"
        }`}
      >
        ← Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
            page === currentPage
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
              : typeof page === 'number'
                ? "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-blue-300 hover:shadow-md"
                : "bg-transparent text-gray-500 border-transparent cursor-default"
          }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-500 hover:shadow-md"
        }`}
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

// Optimized Name Card Component
const NameCard = React.memo(({ baby, isLiked, onToggleLike }) => (
  <div className="group bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
        {baby.name}
      </span>
      <button
        onClick={() => onToggleLike(baby.name)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 ${
          isLiked
            ? "bg-red-500 text-white shadow-lg"
            : "bg-gray-200 text-gray-500 hover:bg-gray-300"
        }`}
        aria-label={isLiked ? `Unlike ${baby.name}` : `Like ${baby.name}`}
      >
        {isLiked ? "♥" : "♡"}
      </button>
    </div>
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
        baby.gender === "Boy"
          ? "bg-blue-100 text-blue-700 border border-blue-200"
          : "bg-pink-100 text-pink-700 border border-pink-200"
      }`}
    >
      {baby.gender}
    </span>
  </div>
));

NameCard.displayName = 'NameCard';

// Optimized FAQ Item Component
const FAQItem = React.memo(({ faq, isOpen, onToggle, index }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      onClick={() => onToggle(index)}
      className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
    >
      <span className="text-lg font-semibold text-gray-900 pr-4">
        {faq.question}
      </span>
      <span className={`text-blue-600 font-bold text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
    {isOpen && (
      <div
        id={`faq-answer-${index}`}
        className="p-6 pt-0"
      >
        <div className="text-gray-700 leading-relaxed bg-blue-50 rounded-xl p-4 border border-blue-200">
          {faq.answer}
        </div>
      </div>
    )}
  </div>
));

FAQItem.displayName = 'FAQItem';

export default function BabyNamesSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likedNames, setLikedNames] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [namesLoaded, setNamesLoaded] = useState(false);

  // Wait for router to be ready and load data
  useEffect(() => {
    const initializePage = async () => {
      if (router.isReady) {
        // Load baby names data in background
        if (!namesLoaded) {
          await loadBabyNames();
          setNamesLoaded(true);
        }
        setIsLoading(false);
      }
    };

    initializePage();
  }, [router.isReady, namesLoaded]);

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

  // Parse slug, e.g. "girl-names-with-a"
  const { selectedGender, selectedLetter } = useMemo(() => {
    if (!slug) return { selectedGender: "All", selectedLetter: null };
    
    const lowerSlug = slug.toLowerCase();
    let gender = "All";
    if (lowerSlug.includes("girl")) gender = "Girl";
    else if (lowerSlug.includes("boy")) gender = "Boy";

    const letterMatch = lowerSlug.match(/with-([a-z])/);
    const letter = letterMatch ? letterMatch[1].toUpperCase() : null;

    return { selectedGender: gender, selectedLetter: letter };
  }, [slug]);

  // Filter names based on selected gender and letter
  const { filteredNames, totalPages, currentNames } = useMemo(() => {
    if (!selectedLetter || !namesLoaded) {
      return { filteredNames: [], totalPages: 0, currentNames: [] };
    }

    const filtered = babyNames.filter(
      (b) =>
        b.name.startsWith(selectedLetter) &&
        (selectedGender === "All" || b.gender === selectedGender)
    );

    const totalPages = Math.ceil(filtered.length / NAMES_PER_PAGE);
    const startIndex = (currentPage - 1) * NAMES_PER_PAGE;
    const endIndex = startIndex + NAMES_PER_PAGE;
    const current = filtered.slice(startIndex, endIndex);

    return { filteredNames: filtered, totalPages, currentNames: current };
  }, [selectedLetter, selectedGender, currentPage, namesLoaded]);

  const seoProperties = useMemo(() => 
    selectedLetter ? generateSEOProperties(selectedGender, selectedLetter, filteredNames.length, currentPage) : null,
    [selectedGender, selectedLetter, filteredNames.length, currentPage]
  );

  const currentFaqData = useMemo(() => 
    selectedLetter ? faqData(selectedGender, selectedLetter, filteredNames.length) : [],
    [selectedGender, selectedLetter, filteredNames.length]
  );

  const toggleLike = useCallback((name) => {
    const newLikedNames = {
      ...likedNames,
      [name]: !likedNames[name]
    };
    setLikedNames(newLikedNames);

    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("likedNames", JSON.stringify(newLikedNames));
    }
  }, [likedNames]);

  const toggleFAQ = useCallback((idx) => setOpenFAQ(openFAQ === idx ? null : idx), [openFAQ]);

  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <Head>
        <title>{seoProperties?.title || "Baby Names | Belly Buds"}</title>
        <meta
          name="description"
          content={seoProperties?.description || "Browse baby names by letter and gender."}
        />
        <meta name="keywords" content={`baby names, ${selectedGender} names, names starting with ${selectedLetter}, name meanings, baby name search, popular names, unique names`} />

        {/* Critical SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Parth Jani" />
        <meta name="publisher" content="Belly Buds" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS preconnect for external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover beautiful names, their meanings, and cultural origins
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
                Showing names <strong>{Math.min((currentPage - 1) * NAMES_PER_PAGE + 1, filteredNames.length)}</strong> to <strong>{Math.min(currentPage * NAMES_PER_PAGE, filteredNames.length)}</strong> of {filteredNames.length} total names
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
                className={`p-3 rounded-xl text-center font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                  selectedLetter === letter
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
                    : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
                prefetch={false}
              >
                {letter}
              </Link>
            ))}
          </div>

          {/* Gender Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Link
              href={`/baby-names/boy-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
              className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                selectedGender === "Boy"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-transparent shadow-lg"
                  : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300"
              }`}
              prefetch={false}
            >
              👦 Boy Names
            </Link>
            <Link
              href={`/baby-names/girl-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
              className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 ${
                selectedGender === "Girl"
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white border-transparent shadow-lg"
                  : "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300"
              }`}
              prefetch={false}
            >
              👧 Girl Names
            </Link>
            <Link
              href={`/baby-names/baby-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
              className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 ${
                selectedGender === "All"
                  ? "bg-gradient-to-r from-gray-500 to-gray-700 text-white border-transparent shadow-lg"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
              }`}
              prefetch={false}
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
                    <NameCard
                      key={`${baby.name}-${i}`}
                      baby={baby}
                      isLiked={!!likedNames[baby.name]}
                      onToggleLike={toggleLike}
                    />
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
                    <FAQItem
                      key={idx}
                      faq={faq}
                      isOpen={openFAQ === idx}
                      onToggle={toggleFAQ}
                      index={idx}
                    />
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
                        <span className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 group-hover:text-blue-700 transition-colors">
                          Read More →
                        </span>
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