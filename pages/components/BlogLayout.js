"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import AdBanner from "./AdBanner";
import Header from "./Header";
import Footer from "./Footer";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import SocialShare from "./SocialShare";
import BreadcrumbSchema from "./BreadcrumbSchema";
import NativeAdBanner from "./NativeAdBanner";
import { FaBell } from "react-icons/fa";
import { useRouter } from "next/router";

export default function BlogLayout({
  title,
  description,
  mainImage,
  steps = [],
  sections = [],
  tips = [],
  faqs = [],
  slug,
  authorName = "Parth Jani",
  authorImage = "/images/parthjani.jpg",
  authorEmail = "parthskyward@gmail.com",
  updatedAt = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
}) {
  const allBlogs = [
    // ----- Parenting 12 Months -----
    { title: "Parenting Month 1 — Surviving the First 30 Days", slug: "parenting-blogs/parenting-month-1", description: "Essential parenting guide for newborn care, feeding schedules, and postpartum recovery. Expert advice for new parents.", image: "/images/motherhood-1.jpg" },
    { title: "Parenting Month 2 — Smiles & Early Connections", slug: "parenting-blogs/parenting-month-2", description: "Parenting tips for baby development, social smiles, and strengthening parent-child bonding.", image: "/images/motherhood-2.jpg" },
    { title: "Parenting Month 3 — Baby's First Laughs", slug: "parenting-blogs/parenting-month-3", description: "Parenting guide for infant development, laughter milestones, and tummy time progress.", image: "/images/motherhood-3.jpg" },
    { title: "Parenting Month 4 — Rolling & Stronger Bonds", slug: "parenting-blogs/parenting-month-4", description: "Parenting advice for rolling milestones, baby routines, and developmental progress.", image: "/images/motherhood-4.jpg" },
    { title: "Parenting Month 5 — Sitting with Support", slug: "parenting-blogs/parenting-month-5", description: "Parenting tips for sitting development, teething, and preparing for solid foods.", image: "/images/motherhood-5.jpg" },
    { title: "Parenting Month 6 — Halfway Milestones", slug: "parenting-blogs/parenting-month-6", description: "Parenting guide for starting solids, babbling development, and six-month milestones.", image: "/images/motherhood-6.jpg" },
    { title: "Parenting Month 7 — Crawling Begins", slug: "parenting-blogs/parenting-month-7", description: "Parenting advice for crawling stages, baby proofing, and mobility development.", image: "/images/motherhood-7.jpg" },
    { title: "Parenting Month 8 — More Mobility", slug: "parenting-blogs/parenting-month-8", description: "Parenting tips for pulling up, standing, and managing increased baby mobility.", image: "/images/motherhood-8.jpg" },
    { title: "Parenting Month 9 — Personality Shines", slug: "parenting-blogs/parenting-month-9", description: "Parenting guide for emerging personality, communication skills, and emotional development.", image: "/images/motherhood-9.jpg" },
    { title: "Parenting Month 10 — First Words", slug: "parenting-blogs/parenting-month-10", description: "Parenting advice for language development, first words, and communication milestones.", image: "/images/motherhood-10.jpg" },
    { title: "Parenting Month 11 — Cruising Along", slug: "parenting-blogs/parenting-month-11", description: "Parenting tips for cruising development, early walking, and physical milestones.", image: "/images/motherhood-11.jpg" },
    { title: "Parenting Month 12 — Happy First Birthday", slug: "parenting-blogs/parenting-month-12", description: "Parenting guide for first birthday, walking development, and one-year milestones.", image: "/images/motherhood-12.jpg" },

    // ----- Pregnancy Week-by-Week -----
    { title: "Pregnancy Week 1 — Preparing Your Body", slug: "pregnancy-week-wise/pregnancy-week-1", description: "Pregnancy planning, cycle tracking, and preconception health for expecting parents.", image: "/images/Pregnancy Week 1.jpg" },
    { title: "Pregnancy Week 2 — Ovulation & Conception", slug: "pregnancy-week-wise/pregnancy-week-2", description: "Pregnancy ovulation timing, conception tips, and fertility guidance for parents.", image: "/images/Pregnancy Week 2.jpg" },
    { title: "Pregnancy Week 3 — Fertilization", slug: "pregnancy-week-wise/pregnancy-week-3", description: "Early pregnancy development, fertilization process, and embryonic growth.", image: "/images/Pregnancy Week 3.jpg" },
    { title: "Pregnancy Week 4 — Implantation", slug: "pregnancy-week-wise/pregnancy-week-4", description: "Pregnancy implantation symptoms, early signs, and uterine development.", image: "/images/Pregnancy Week 4.jpg" },
    { title: "Pregnancy Week 5 — Early Development", slug: "pregnancy-week-wise/pregnancy-week-5", description: "Pregnancy heartbeat development, organ formation, and early symptoms.", image: "/images/Pregnancy Week 5.jpg" },
    { title: "Pregnancy Week 6 — Tiny Heartbeat", slug: "pregnancy-week-wise/pregnancy-week-6", description: "Pregnancy ultrasound, heartbeat detection, and embryonic development.", image: "/images/Pregnancy Week 6.jpg" },
    { title: "Pregnancy Week 7 — Growing Fast", slug: "pregnancy-week-wise/pregnancy-week-7", description: "Pregnancy growth spurts, limb development, and maternal changes.", image: "/images/Pregnancy Week 7.jpg" },
    { title: "Pregnancy Week 8 — Embryo to Fetus", slug: "pregnancy-week-wise/pregnancy-week-8", description: "Pregnancy fetal development, major organ systems, and prenatal care.", image: "/images/Pregnancy Week 8.jpg" },
    { title: "Pregnancy Week 9 — Facial Features Forming", slug: "pregnancy-week-wise/pregnancy-week-9", description: "Pregnancy facial development, feature formation, and growth milestones.", image: "/images/Pregnancy Week 9.jpg" },
    { title: "Pregnancy Week 10 — Vital Organs Formed", slug: "pregnancy-week-wise/pregnancy-week-10", description: "Pregnancy organ development, critical growth period, and prenatal testing.", image: "/images/Pregnancy Week 10.jpg" },
  ];

  // SEO Optimization Functions
  const optimizeTitle = useCallback((title) => {
    if (!title) return "Parenting & Pregnancy Guide | Belly Buds Expert Advice";
    return title
      .replace(/—.*$/, '')
      .trim()
      .slice(0, 60) + " | Belly Buds";
  }, []);

  const optimizeDescription = useCallback((desc) => {
    if (!desc) return "Expert parenting and pregnancy advice, tips, and guides for new and expecting parents. Comprehensive resources for baby development and maternal health.";
    return desc
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 155);
  }, []);
  const router = useRouter();
  const [canonicalUrl, setCanonicalUrl] = useState('https://baby-toys.shop');

  const [toc, setToc] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [tocOpen, setTocOpen] = useState(false);
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      const path = router.asPath === '/' ? '' : router.asPath;
      setCanonicalUrl(`https://baby-toys.shop${path}`);
    }
  }, [router.isReady, router.asPath]);
  // Comprehensive SEO Properties Generator
  const generateSEOProperties = useCallback(() => {
    const baseUrl = "https://baby-toys.shop";
    const currentDate = new Date().toISOString().split('T')[0];

    // Extract primary and secondary keywords
    const extractKeywords = () => {
      const contentText = [
        title,
        description,
        ...sections.map(s => s.content || ''),
        ...sections.map(s => s.title || ''),
        ...(tips || [])
      ].join(' ').toLowerCase();

      const primaryKeywords = [
        'parenting', 'pregnancy', 'baby care', 'newborn', 'infant development',
        'motherhood', 'fatherhood', 'child development', 'parenting tips'
      ];

      const secondaryKeywords = [
        'baby milestones', 'pregnancy week by week', 'parenting guide',
        'new parent advice', 'baby health', 'maternal health', 'parenting stages'
      ];

      const foundPrimary = primaryKeywords.filter(keyword =>
        contentText.includes(keyword)
      ).slice(0, 5);

      const foundSecondary = secondaryKeywords.filter(keyword =>
        contentText.includes(keyword)
      ).slice(0, 5);

      return [...foundPrimary, ...foundSecondary];
    };

    // Calculate comprehensive reading time
    const calculateReadingTime = () => {
      const contentText = [
        description,
        ...sections.map(s => s.content || ''),
        ...sections.flatMap(s => s.list || []),
        ...(tips || [])
      ].join(' ');

      const wordCount = contentText.split(/\s+/).length;
      const imagesCount = [mainImage, ...sections.map(s => s.image)].filter(Boolean).length;
      const readingTimeMinutes = Math.ceil(wordCount / 200 + imagesCount * 0.1);

      return {
        minutes: readingTimeMinutes,
        text: `${readingTimeMinutes} min read`,
        wordCount: wordCount
      };
    };

    // Generate comprehensive schema markup
    const generateSchemaMarkup = () => {
      const readingData = calculateReadingTime();

      const baseSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": optimizeTitle(title),
        "description": optimizeDescription(description),
        "author": {
          "@type": "Person",
          "name": authorName,
          "image": `${baseUrl}${authorImage}`,
          "email": authorEmail,
          "url": baseUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": "Belly Buds",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `https://baby-toys.shop/_next/image?url=%2Fimages%2Flogo.jpg&w=256&q=75`,
            "width": 180,
            "height": 60
          }
        },
        "datePublished": "2025-01-01",
        "dateModified": currentDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "wordCount": readingData.wordCount,
        "timeRequired": `PT${readingData.minutes}M`,
        "inLanguage": "en-US",
        "copyrightYear": "2025",
        "accessMode": "textual",
        "accessModeSufficient": "textual"
      };

      // Add image schema
      if (mainImage) {
        baseSchema.image = {
          "@type": "ImageObject",
          "url": `${baseUrl}${mainImage}`,
          "width": 1200,
          "height": 630,
          "caption": title
        };
      }

      // Add FAQ schema if available
      if (faqs && faqs.length > 0) {
        baseSchema.mainEntity = {
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        };
      }

      // Add Article schema for better Google News/Discover
      baseSchema.articleSection = "Parenting and Pregnancy";
      baseSchema.articleBody = description + " " + sections.map(s => s.content).join(' ');

      return baseSchema;
    };

    // Generate Open Graph and Twitter Card data
    const generateSocialMeta = () => {
      const socialImage = mainImage ? `${baseUrl}${mainImage}` : `${baseUrl}/default-og-image.jpg`;

      return {
        openGraph: {
          title: optimizeTitle(title),
          description: optimizeDescription(description),
          image: socialImage,
          url: canonicalUrl,
          type: "article",
          site_name: "Belly Buds",
          published_time: "2025-01-01T00:00:00Z",
          modified_time: `${currentDate}T00:00:00Z`,
          author: authorName
        },
        twitter: {
          card: "summary_large_image",
          title: optimizeTitle(title),
          description: optimizeDescription(description),
          image: socialImage,
          creator: "@bellybuds",
          site: "@bellybuds"
        }
      };
    };

    const readingData = calculateReadingTime();
    const keywords = extractKeywords();

    return {
      canonicalUrl: canonicalUrl,
      schemaMarkup: generateSchemaMarkup(),
      socialMeta: generateSocialMeta(),
      keywords: keywords,
      readingTime: readingData.text,
      wordCount: readingData.wordCount,
      lastModified: currentDate
    };
  }, [title, description, mainImage, sections, tips, faqs, slug, authorName, authorImage, authorEmail, optimizeTitle, optimizeDescription]);

  const seoProperties = generateSEOProperties();

  // Table of Contents Generation - FIXED VERSION
  useEffect(() => {
    // Generate TOC from sections and steps without DOM manipulation
    const generateStaticTOC = () => {
      const headings = [];

      // Add steps as H2 headings
      steps.forEach((step, index) => {
        headings.push({
          id: `step-${index + 1}-${step.title.replace(/\s+/g, "-").toLowerCase()}`,
          text: step.title,
          level: 'h2'
        });
      });

      // Add sections as H2 headings
      sections.forEach((section, index) => {
        headings.push({
          id: section.title.replace(/\s+/g, "-").toLowerCase(),
          text: section.title,
          level: 'h2'
        });

        // Add subsections as H3 headings
        if (section.subsections) {
          section.subsections.forEach((sub, subIndex) => {
            headings.push({
              id: `subsection-${index}-${subIndex}-${sub.subtitle.replace(/\s+/g, "-").toLowerCase()}`,
              text: sub.subtitle,
              level: 'h3'
            });
          });
        }
      });

      // Add tips section if exists
      if (tips.length > 0) {
        headings.push({
          id: 'tips',
          text: 'Helpful Tips',
          level: 'h2'
        });
      }

      // Add FAQ section if exists
      if (faqs.length > 0) {
        headings.push({
          id: 'faq',
          text: 'Frequently Asked Questions',
          level: 'h2'
        });
      }

      return headings;
    };

    setToc(generateStaticTOC());
  }, []); // Only depend on content that affects TOC

  // Related Blogs Logic - FIXED VERSION
  useEffect(() => {
    const getRelatedBlogs = () => {
      const currentBlog = allBlogs.find(blog => blog.slug === slug);
      if (!currentBlog) return allBlogs.filter(blog => blog.slug !== slug).slice(0, 9);

      // Simple content-based relevance scoring
      const scoredBlogs = allBlogs
        .filter(blog => blog.slug !== slug)
        .map(blog => {
          let score = 0;
          const currentTitle = currentBlog.title.toLowerCase();
          const blogTitle = blog.title.toLowerCase();

          // Score based on keyword matches
          if (currentTitle.includes('month') && blogTitle.includes('month')) score += 3;
          if (currentTitle.includes('week') && blogTitle.includes('week')) score += 3;
          if (currentTitle.includes('pregnancy') && blogTitle.includes('pregnancy')) score += 2;
          if (currentTitle.includes('parenting') && blogTitle.includes('parenting')) score += 2;

          return { ...blog, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 9);

      return scoredBlogs.length > 0 ? scoredBlogs :
        allBlogs.filter(blog => blog.slug !== slug).slice(0, 9);
    };

    setRandomBlogs(getRelatedBlogs());
  }, [slug]); // Only depend on slug

  const handleLike = () => {
    const newLiked = !liked;
    const newLikes = newLiked ? likes + 1 : likes - 1;

    setLiked(newLiked);
    setLikes(newLikes);

    localStorage.setItem(`blog-likes-${slug}`, newLikes.toString());
    localStorage.setItem(`blog-liked-${slug}`, newLiked.toString());
  };

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

  // Smooth scroll for TOC links
  const handleTocClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setTocOpen(false);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />

      <Head>
        {/* Primary Meta Tags */}
        <title>{seoProperties.schemaMarkup.headline}</title>
        <meta name="description" content={seoProperties.schemaMarkup.description} />
        <meta name="keywords" content={seoProperties.keywords.join(', ')} />
        <link rel="canonical" href={seoProperties.canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoProperties.socialMeta.openGraph.title} />
        <meta property="og:description" content={seoProperties.socialMeta.openGraph.description} />
        <meta property="og:image" content={seoProperties.socialMeta.openGraph.image} />
        <meta property="og:url" content={seoProperties.socialMeta.openGraph.url} />
        <meta property="og:type" content={seoProperties.socialMeta.openGraph.type} />
        <meta property="og:site_name" content={seoProperties.socialMeta.openGraph.site_name} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content={seoProperties.socialMeta.openGraph.author} />
        <meta property="article:published_time" content={seoProperties.socialMeta.openGraph.published_time} />
        <meta property="article:modified_time" content={seoProperties.socialMeta.openGraph.modified_time} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={seoProperties.socialMeta.twitter.card} />
        <meta name="twitter:title" content={seoProperties.socialMeta.twitter.title} />
        <meta name="twitter:description" content={seoProperties.socialMeta.twitter.description} />
        <meta name="twitter:image" content={seoProperties.socialMeta.twitter.image} />
        <meta name="twitter:creator" content={seoProperties.socialMeta.twitter.creator} />
        <meta name="twitter:site" content={seoProperties.socialMeta.twitter.site} />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content={authorName} />
        <meta name="publisher" content="Belly Buds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoProperties.schemaMarkup) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <BreadcrumbSchema title={title} seoProperties={seoProperties} />
      {/* Mobile Table of Contents */}
      <div style={{ marginTop: "35px" }} className="lg:hidden fixed top-16 left-0 right-0 z-50 bg-green-800 text-white flex justify-between items-center px-4 py-3 shadow-lg">
        <span className="font-semibold text-sm">📚 Article Contents</span>
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="text-white font-bold text-sm bg-green-700 px-3 py-1 rounded-lg hover:bg-green-600 transition-colors"
          aria-expanded={tocOpen}
          aria-controls="mobile-toc"
        >
          {tocOpen ? "✕ Close" : "☰ Menu"}
        </button>
      </div>

      {tocOpen && (
        <div
          id="mobile-toc"
          className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-green-700 text-white px-4 py-4 overflow-y-auto max-h-[calc(100vh-5rem)] shadow-xl"
        >
          <nav aria-label="Table of contents">
            <ul className="space-y-2">
              {toc.map((item, idx) => (
                <li key={`toc-mobile-${idx}`}>
                  <button
                    onClick={() => handleTocClick(item.id)}
                    className={`block text-left w-full hover:bg-green-600 transition-colors py-2 px-3 rounded-lg border-l-2 ${item.level === 'h2'
                      ? 'border-green-300 font-semibold text-white'
                      : 'border-green-200 pl-6 text-green-100'
                      }`}
                  >
                    {item.level === 'h3' && '↳ '}{item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <main className="max-w-12xl mx-auto px-4 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Desktop Table of Contents */}
        <aside className="hidden lg:block lg:col-span-3 self-start">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-green-800 border-b border-gray-200 pb-3">📖 Article Contents</h3>
            <nav className="space-y-2" aria-label="Table of contents">
              {toc.map((item, idx) => (
                <div
                  key={`toc-${idx}`}
                  className={`border-l-2 transition-colors hover:border-green-500 ${item.level === 'h2'
                    ? 'border-green-600 pl-3'
                    : 'border-gray-300 pl-6'
                    }`}
                >
                  <button
                    onClick={() => handleTocClick(item.id)}
                    className={`hover:text-green-700 transition-colors text-sm font-medium leading-tight block py-1.5 text-left w-full ${item.level === 'h2'
                      ? 'text-green-900 font-semibold'
                      : 'text-gray-700'
                      }`}
                  >
                    {item.level === 'h3' && '↳ '}{item.text}
                  </button>
                </div>
              ))}
            </nav>

            {/* Reading Stats */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>📖 Reading time</span>
                <span className="font-medium">{seoProperties.readingTime}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>📊 Word count</span>
                <span className="font-medium">{seoProperties.wordCount.toLocaleString()}</span>
              </div>
            </div>

            {/* Like Button */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={handleLike}
                className={`flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg transition-colors ${liked
                  ? 'bg-orange-100 text-orange-600 border border-orange-200'
                  : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
                  }`}
                aria-label={liked ? "Unlike this article" : "Like this article"}
              >
                <HandThumbUpIcon className="w-5 h-5" />
                <span className="font-medium">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Blog Content */}
        <article className="lg:col-span-6 mt-10" itemScope itemType="https://schema.org/BlogPosting">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-orange-500 transition-colors" itemProp="breadcrumb">Home</Link>
            <span aria-hidden="true" className="text-gray-300">/</span>
            <Link href="/blogs" className="hover:text-orange-500 transition-colors" itemProp="breadcrumb">Blogs</Link>
            <span aria-hidden="true" className="text-gray-300">/</span>
            <span className="text-gray-700 font-medium truncate" aria-current="page" itemProp="name">{title}</span>
          </nav>



          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-orange-500 leading-tight" itemProp="headline">
              {title}
            </h1>

            {/* Author Information */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 border rounded-lg shadow-sm">

              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <Image
                  src={authorImage}
                  alt={authorName}
                  width={60}
                  height={60}
                  className="rounded-full"
                  itemProp="image"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800" itemProp="name">{authorName}</p>
                <p className="text-sm text-gray-500">
                  Updated: <time itemProp="dateModified" dateTime={seoProperties.lastModified}>{updatedAt}</time>
                </p>
                <p className="text-sm text-gray-500">Reading time: {seoProperties.readingTime}</p>
                <a
                  href={`mailto:${authorEmail}`}
                  className="text-sm text-orange-500 hover:underline"
                  itemProp="email"
                >
                  {authorEmail}
                </a>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700" itemProp="description">
              {description}
            </p>
          </header>
          {/* Featured Image */}
          {mainImage && (
            <div className="my-6 flex flex-col items-center gap-4">
              <div className="w-full max-w-4xl h-96 relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={mainImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  itemProp="image"
                />
              </div>
              <SocialShare
                imageUrl={mainImage}
                title={title}
                description={description}
                url={seoProperties.canonicalUrl}
              />
            </div>
          )}
          {/* Steps Section */}
          {steps.length > 0 && (
            <section className="space-y-8">
              {steps.map((step, idx) => (
                <section
                  key={`step-${idx}`}
                  id={`step-${idx + 1}-${step.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                  itemProp="step" itemScope itemType="https://schema.org/HowToStep"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-green-800" itemProp="name">
                    <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
                      {idx + 1}
                    </span>
                    {step.title}
                  </h2>

                  {step.image && (
                    <div className="my-4 flex flex-col items-center gap-4">
                      <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={400}
                          height={300}
                          className="object-cover"
                          itemProp="image"
                        />
                      </div>
                    </div>
                  )}

                  <p className="text-gray-700 leading-relaxed text-lg" itemProp="text">
                    {step.content}
                  </p>
                </section>
              ))}
            </section>
          )}

          {/* Main Content Sections */}
          {sections.map((section, idx) => (
            <section
              key={`section-${idx}`}
              id={section.title.replace(/\s+/g, "-").toLowerCase()}
              className="space-y-6 mt-8"
              itemProp="articleBody"
            >
              <h2 className="text-2xl font-semibold text-green-800 border-b border-gray-200 pb-2">
                {section.title}
              </h2>

              {section.image && (
                <div className="my-6 flex flex-col items-center gap-4">
                  <NativeAdBanner />
                  <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={400}
                      height={300}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
              )}

              {section.content && (
                <div className="text-gray-700 leading-relaxed text-lg prose prose-lg max-w-none">
                  {section.content}
                </div>
              )}

              {section.list && (
                <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                  {section.list.map((item, i) => (
                    <li key={`section-${idx}-item-${i}`} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {section.subsections?.map((sub, i) => (
                <div key={`subsection-${i}`} className="pl-5 mt-6 border-l-4 border-green-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3" id={`subsection-${idx}-${i}-${sub.subtitle.replace(/\s+/g, "-").toLowerCase()}`}>
                    {sub.subtitle}
                  </h3>
                  {sub.content && <p className="text-gray-700 mt-2 leading-relaxed">{sub.content}</p>}
                  {sub.list && (
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                      {sub.list.map((item, j) => (
                        <li key={`sublist-${j}`} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          {/* Tips Section */}
          {tips.length > 0 && (
            <section id="tips" className="mt-10 bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-orange-800 mb-4">💡 Helpful Tips</h2>
              <ul className="space-y-3">
                {tips.map((tip, idx) => (
                  <li key={`tip-${idx}`} className="flex items-start gap-3 text-gray-700">
                    <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 inline-flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <section id="faq" className="space-y-6 mt-10 bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-orange-500">❓ Frequently Asked Questions</h2>
              <div className="divide-y divide-gray-200">
                <NativeAdBanner />
                {faqs.map((faq, idx) => (
                  <div key={`faq-${idx}`} className="py-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex justify-between items-center text-left"
                      aria-expanded={openFAQ === idx}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span className="text-lg font-medium text-gray-800" itemProp="name">{faq.q}</span>
                      <span className="text-xl text-orange-500 font-bold ml-4 flex-shrink-0">
                        {openFAQ === idx ? "−" : "+"}
                      </span>
                    </button>
                    {openFAQ === idx && (
                      <div
                        id={`faq-answer-${idx}`}
                        className="text-gray-600 mt-3 leading-relaxed"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div itemProp="text">{faq.a}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Blogs Section */}
          {randomBlogs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-green-700 border-b border-gray-200 pb-3">
                📚 Continue Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {randomBlogs.map((blog, idx) => (
                  <article
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                  >
                    {blog.image && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          itemProp="image"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors" itemProp="headline">
                        {blog.title}
                      </h3>
                      {blog.description && (
                        <p className="text-gray-600 text-sm line-clamp-3 mb-3" itemProp="description">
                          {blog.description}
                        </p>
                      )}
                      <Link
                        href={`/${blog.slug}`}
                        className="text-orange-500 font-medium text-sm inline-flex items-center gap-1 hover:underline group-hover:text-orange-600 transition-colors"
                        itemProp="url"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Sidebar Ads */}
        <aside className="hidden lg:block lg:col-span-3 self-start space-y-6 top-24">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-24">
            <h3 className="text-center text-gray-500 uppercase font-bold text-sm mb-4 flex items-center justify-center gap-2">
              <FaBell className="w-4 h-4" />
              ADVERTISEMENT
            </h3>
            <AdBanner />
            <AdBanner />
            <AdBanner />
          </div>
          {/* Additional sidebar content can go here */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-semibold text-green-800 mb-3">💌 Stay Updated</h3>
            <p className="text-sm text-green-700 mb-3">
              Get the latest parenting tips and pregnancy advice delivered to your inbox.
            </p>
            <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
              Subscribe Now
            </button>
          </div>
        </aside>

        {/* Mobile Ads */}
        <div className="lg:hidden mt-8">
          <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-4">
            <h3 className="text-center text-gray-500 uppercase font-bold text-xs mb-4 tracking-wider">ADVERTISEMENT</h3>
            <AdBanner />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}