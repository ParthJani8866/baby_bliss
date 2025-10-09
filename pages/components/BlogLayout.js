"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import Header from "./Header";
import Footer from "./Footer";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import SocialShare from "./SocialShare";

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
  // Remove manual schema props - we'll generate them automatically
}) {
  const allBlogs = [
    // ----- Parenting 12 Months -----
    { title: "Parenting Month 1 — Surviving the First 30 Days", slug: "motherhood-blogs/Motherhood-month-1", description: "Essential parenting guide for newborn care, feeding schedules, and postpartum recovery. Expert advice for new parents.", image: "/images/motherhood-1.jpg" },
    { title: "Parenting Month 2 — Smiles & Early Connections", slug: "motherhood-blogs/Motherhood-month-2", description: "Parenting tips for baby development, social smiles, and strengthening parent-child bonding.", image: "/images/motherhood-2.jpg" },
    { title: "Parenting Month 3 — Baby's First Laughs", slug: "motherhood-blogs/Motherhood-month-3", description: "Parenting guide for infant development, laughter milestones, and tummy time progress.", image: "/images/motherhood-3.jpg" },
    { title: "Parenting Month 4 — Rolling & Stronger Bonds", slug: "motherhood-blogs/Motherhood-month-4", description: "Parenting advice for rolling milestones, baby routines, and developmental progress.", image: "/images/motherhood-4.jpg" },
    { title: "Parenting Month 5 — Sitting with Support", slug: "motherhood-blogs/Motherhood-month-5", description: "Parenting tips for sitting development, teething, and preparing for solid foods.", image: "/images/motherhood-5.jpg" },
    { title: "Parenting Month 6 — Halfway Milestones", slug: "motherhood-blogs/Motherhood-month-6", description: "Parenting guide for starting solids, babbling development, and six-month milestones.", image: "/images/motherhood-6.jpg" },
    { title: "Parenting Month 7 — Crawling Begins", slug: "motherhood-blogs/Motherhood-month-7", description: "Parenting advice for crawling stages, baby proofing, and mobility development.", image: "/images/motherhood-7.jpg" },
    { title: "Parenting Month 8 — More Mobility", slug: "motherhood-blogs/Motherhood-month-8", description: "Parenting tips for pulling up, standing, and managing increased baby mobility.", image: "/images/motherhood-8.jpg" },
    { title: "Parenting Month 9 — Personality Shines", slug: "motherhood-blogs/Motherhood-month-9", description: "Parenting guide for emerging personality, communication skills, and emotional development.", image: "/images/motherhood-9.jpg" },
    { title: "Parenting Month 10 — First Words", slug: "motherhood-blogs/Motherhood-month-10", description: "Parenting advice for language development, first words, and communication milestones.", image: "/images/motherhood-10.jpg" },
    { title: "Parenting Month 11 — Cruising Along", slug: "motherhood-blogs/Motherhood-month-11", description: "Parenting tips for cruising development, early walking, and physical milestones.", image: "/images/motherhood-11.jpg" },
    { title: "Parenting Month 12 — Happy First Birthday", slug: "motherhood-blogs/Motherhood-month-12", description: "Parenting guide for first birthday, walking development, and one-year milestones.", image: "/images/motherhood-12.jpg" },

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

  const optimizeTitle = (title) => {
    if (!title) return ""; // fallback if undefined/null
    return title
      .replace(/—.*$/, '') // Remove dash and everything after
      .trim()
      .slice(0, 60); // Limit to 60 chars
  };

  const optimizeDescription = (desc) => {
    if (!desc) return ""; // fallback if undefined/null
    return desc
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 160); // Limit to 160 chars
  };

  const [toc, setToc] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [tocOpen, setTocOpen] = useState(false);
  const [randomBlogs, setRandomBlogs] = useState([]);

  // Auto-generate all SEO properties
  const generateSEOProperties = () => {
    const baseUrl = "https://baby-toys.shop";
    const currentUrl = `${baseUrl}/${slug}`;

    // Extract keywords from content
    const extractKeywords = () => {
      const contentText = [
        title,
        description,
        ...sections.map(s => s.content || ''),
        ...sections.map(s => s.title || ''),
        ...(tips || [])
      ].join(' ').toLowerCase();

      const parentingKeywords = [
        'parenting', 'pregnancy', 'baby', 'newborn', 'child', 'motherhood',
        'fatherhood', 'infant', 'toddler', 'development', 'care', 'health',
        'growth', 'milestones', 'feeding', 'sleep', 'nutrition', 'tips',
        'advice', 'guide', 'stages', 'months', 'weeks', 'pregnancy week by week'
      ];

      return parentingKeywords.filter(keyword =>
        contentText.includes(keyword)
      ).slice(0, 10);
    };

    // Calculate reading time
    const calculateReadingTime = () => {
      const contentLength = [
        description,
        ...sections.map(s => s.content || ''),
        ...sections.flatMap(s => s.list || []),
        ...(tips || [])
      ].join(' ').length;

      const words = contentLength / 5;
      const minutes = Math.ceil(words / 200);
      return `${minutes} min read`;
    };

    // Generate schema markup
    const generateSchemaMarkup = () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": optimizeTitle(title),
        "description": optimizeDescription(description),
        "author": {
          "@type": "Person",
          "name": authorName,
          "image": `${baseUrl}${authorImage}`
        },
        "publisher": {
          "@type": "Organization",
          "name": "Belly Buds",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "datePublished": "2025-09-30",
        "dateModified": new Date(updatedAt).toISOString().split('T')[0],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        }
      };

      // Add image if available
      if (mainImage) {
        schema.image = `${baseUrl}${mainImage}`;
      }

      // Add FAQ schema if FAQs exist
      if (faqs && faqs.length > 0) {
        schema.mainEntity = {
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

      return schema;
    };

    // Generate Open Graph data
    const generateOpenGraph = () => ({
      title: optimizeTitle(title),
      description: optimizeDescription(description),
      image: mainImage ? `${baseUrl}${mainImage}` : `${baseUrl}/default-og-image.jpg`,
      url: currentUrl,
      type: "article"
    });

    return {
      canonicalUrl: currentUrl,
      schemaMarkup: generateSchemaMarkup(),
      openGraph: generateOpenGraph(),
      keywords: extractKeywords(),
      readingTime: calculateReadingTime()
    };
  };

  const seoProperties = {
    ...generateSEOProperties(),
    title: optimizeTitle(title),
    description: optimizeDescription(description),
  };
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2")).map((h) => ({
      id: h.id || h.innerText.replace(/\s+/g, "-").toLowerCase(),
      text: h.innerText,
      level: h.tagName.toLowerCase()
    }));
    setToc(headings);
  }, []);

  useEffect(() => {
    const filtered = allBlogs.filter(blog => blog.slug !== slug);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    setRandomBlogs(shuffled.slice(0, 12));
  }, [slug]);

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />

      <Head>
        <title>{seoProperties.title} | Belly Buds - Parenting & Pregnancy Expert Advice</title>
        <meta name="description" content={seoProperties.description} />
        <meta name="keywords" content={seoProperties.keywords.join(', ')} />

        <link rel="canonical" href={seoProperties.canonicalUrl} />

        <meta property="og:title" content={seoProperties.openGraph.title} />
        <meta property="og:description" content={seoProperties.openGraph.description} />
        <meta property="og:type" content={seoProperties.openGraph.type} />
        <meta property="og:image" content={seoProperties.openGraph.image} />
        <meta property="og:url" content={seoProperties.openGraph.url} />
        <meta property="og:site_name" content="Belly Buds" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoProperties.openGraph.title} />
        <meta name="twitter:description" content={seoProperties.openGraph.description} />
        <meta name="twitter:image" content={seoProperties.openGraph.image} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoProperties.schemaMarkup) }}
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content={authorName} />
        <meta name="publisher" content="Belly Buds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://baby-toys.shop/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": seoProperties.canonicalUrl
              }
            ]
          })
        }}
      />

      {/* Mobile TOC */}
      <div style={{ marginTop: "35px" }} className="lg:hidden fixed top-16 left-0 right-0 z-50 bg-green-800 text-white flex justify-between items-center px-4 py-3 shadow-md">
        <span className="font-semibold">Table of Contents</span>
        <button onClick={() => setTocOpen(!tocOpen)} className="text-white font-bold">
          {tocOpen ? "Close" : "Open"}
        </button>
      </div>

      {tocOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-green-700 text-white px-4 py-4 overflow-y-auto max-h-[calc(100vh-5rem)] shadow-md">
          <ul className="space-y-3">
            {toc.map((item, idx) => (
              <li key={`toc-mobile-${idx}`}>
                <Link
                  href={`#${item.id}`}
                  className="block hover:underline py-1 border-l-2 border-green-400 pl-3"
                  onClick={() => setTocOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left TOC - Desktop */}
        <aside className="hidden lg:block lg:col-span-3 self-start">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-green-800 border-b border-gray-200 pb-3">Article Contents</h3>
            <nav className="space-y-3" aria-label="Table of contents">
              {toc.map((item, idx) => (
                <div key={`toc-${idx}`} className={`border-l-2 ${item.level === 'h2' ? 'border-green-600 pl-3' : 'border-gray-300 pl-6'}`}>
                  <Link
                    href={`#${item.id}`}
                    className={`hover:text-green-700 transition-colors text-sm font-medium leading-tight block py-1 ${item.level === 'h2' ? 'text-green-900 font-semibold' : 'text-gray-700'
                      }`}
                  >
                    {item.level === 'h3' && '• '}{item.text}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Reading Time */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Reading time</span>
                <span className="font-medium">{seoProperties.readingTime}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Blog Content */}
        <article className="lg:col-span-6  mt-10" itemScope itemType="https://schema.org/BlogPosting">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-700 font-medium" aria-current="page">{title}</span>
          </nav>

          {/* Main Image */}
          {mainImage && (
            <div className="my-6 flex flex-col items-center gap-4">
              <div className="w-full max-w-2xl h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={mainImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

          {/* Title & Description */}
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-orange-500 leading-tight" itemProp="headline">
              {title}
            </h1>

            {/* Author Info */}
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
              <div>
                <p className="font-semibold text-gray-800" itemProp="name">{authorName}</p>
                <p className="text-sm text-gray-500">
                  Updated: <time itemProp="dateModified" dateTime={updatedAt}>{updatedAt}</time>
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

          {/* Steps */}
          {steps.map((step, idx) => (
            <section key={`step-${idx}`} id={step.title.replace(/\s+/g, "-").toLowerCase()} className="space-y-4">
              <h2 className="text-2xl font-semibold mt-6">{idx + 1}. {step.title}</h2>
              {step.image && (
                <div className="my-4 flex flex-col items-center gap-4">
                  <div className="w-full max-w-md h-72 relative">
                    <Image src={step.image} alt={step.title} width={400}
                      height={300} className="rounded object-cover" />
                  </div>
                </div>
              )}
              <p className="text-gray-700 leading-relaxed">{step.content}</p>
            </section>
          ))}

          {/* Sections */}
          {sections.map((section, idx) => (
            <section key={`section-${idx}`} id={section.title.replace(/\s+/g, "-").toLowerCase()} className="space-y-4">
              <h2 className="text-2xl font-semibold mt-6">{section.title}</h2>
              {section.image && (
                <div className="my-6 flex flex-col items-center gap-4">
                  <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
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
                <div className="text-gray-700 leading-relaxed text-lg">
                  {section.content}
                </div>
              )}

              {section.list && (
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  {section.list.map((item, i) => (
                    <li key={`section-${idx}-item-${i}`} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {section.subsections?.map((sub, i) => (
                <div key={`subsection-${i}`} className="pl-5 mt-4">
                  <h3 className="text-xl font-semibold">{sub.subtitle}</h3>
                  {sub.content && <p className="text-gray-700 mt-1">{sub.content}</p>}
                  {sub.list && (
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {sub.list.map((item, j) => (<li key={`sublist-${j}`}>{item}</li>))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          {/* Tips */}
          {tips.length > 0 && (
            <section id="tips" className="space-y-4">
              <h2 className="text-2xl font-semibold mt-6">Tips</h2>
              <ul className="list-disc pl-5 space-y-2">{tips.map((tip, idx) => (<li key={`tip-${idx}`}>{tip}</li>))}</ul>
            </section>
          )}

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <section id="faq" className="space-y-6 mt-10">
              <h2 className="text-2xl font-semibold text-orange-500">FAQs</h2>
              <div className="divide-y divide-gray-200">
                {faqs.map((faq, idx) => (
                  <div key={`faq-${idx}`} className="py-4">
                    <button onClick={() => toggleFAQ(idx)} className="w-full flex justify-between items-center text-left">
                      <span className="text-lg font-medium text-gray-800">{faq.q}</span>
                      <span className="text-xl text-orange-500">{openFAQ === idx ? "−" : "+"}</span>
                    </button>
                    {openFAQ === idx && <p className="text-gray-600 mt-2">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3x3 Grid - Random Blogs */}
          {randomBlogs.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6 text-green-700">Explore More Blogs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {randomBlogs.slice(0, 9).map((blog, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                    {blog.image && (
                      <div className="relative w-full h-48">
                        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                      {blog.description && <p className="text-gray-600 text-sm line-clamp-3">{blog.description}</p>}
                      <Link
                        href={`/${blog.slug}`}
                        className="text-orange-500 font-medium mt-2 inline-block hover:underline"
                      >
                       {blog.slug} - Read More 
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Like Button */}
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full shadow-md transition-colors ${liked ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                }`}
            >
              <HandThumbUpIcon className="w-5 h-5" />
              <span>{liked ? "Liked" : "Like"}</span>
              {likes > 0 && <span className="ml-1">({likes})</span>}
            </button>
          </div>
        </article>

        {/* Ads - Desktop */}
        <aside className="hidden lg:block lg:col-span-3 self-start space-y-6 sticky top-24">
          <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6">
            <h3 className="text-center text-gray-500 uppercase font-bold text-sm mb-4">ADVERTISEMENT</h3>
            <AdBanner />
          </div>
        </aside>

        {/* Ads - Mobile */}
        <div className="lg:hidden mt-8">
          <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-4">
            <h3 className="text-center text-gray-500 uppercase font-bold text-sm mb-4">ADVERTISEMENT</h3>
            <AdBanner />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}