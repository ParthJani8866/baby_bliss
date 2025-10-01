"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
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
  authorImage = "/images/parthjani.jpg", // fallback image
  authorEmail = "parthskyward@gmail.com",
  updatedAt = "09/30/2025",
}) {
  const allBlogs = [
    // ----- Motherhood 12 Months -----
    { title: "Parenting Month 1 — Surviving the First 30 Days", slug: "motherhood-blogs/Motherhood-month-1", description: "The first month of motherhood is overwhelming yet magical...", image: "/images/motherhood-1.jpg" },
    { title: "Parenting Month 2 — Smiles & Early Connections", slug: "motherhood-blogs/Motherhood-month-2", description: "Small victories, bonding, and social smiles...", image: "/images/motherhood-2.jpg" },
    { title: "Parenting Month 3 — Baby’s First Laughs", slug: "motherhood-blogs/Motherhood-month-3", description: "Laughter, tummy time progress, and more...", image: "/images/motherhood-3.jpg" },
    { title: "Parenting Month 4 — Rolling & Stronger Bonds", slug: "motherhood-blogs/Motherhood-month-4", description: "Your baby may start rolling and engaging more...", image: "/images/motherhood-4.jpg" },
    { title: "Parenting Month 5 — Sitting with Support", slug: "motherhood-blogs/Motherhood-month-5", description: "Baby starts exploring sitting and solid foods soon...", image: "/images/motherhood-5.jpg" },
    { title: "Parenting Month 6 — Halfway Milestones", slug: "motherhood-blogs/Motherhood-month-6", description: "Solid foods, babbling, and strong connections...", image: "/images/motherhood-6.jpg" },
    { title: "Parenting Month 7 — Crawling Begins", slug: "motherhood-blogs/Motherhood-month-7", description: "Baby starts crawling and exploring surroundings...", image: "/images/motherhood-7.jpg" },
    { title: "Parenting Month 8 — More Mobility", slug: "motherhood-blogs/Motherhood-month-8", description: "Baby pulls to stand and becomes more curious...", image: "/images/motherhood-8.jpg" },
    { title: "Parenting Month 9 — Personality Shines", slug: "motherhood-blogs/Motherhood-month-9", description: "Baby starts showing independence and emotions...", image: "/images/motherhood-9.jpg" },
    { title: "Parenting Month 10 — First Words", slug: "motherhood-blogs/Motherhood-month-10", description: "Hearing mama/dada for the first time...", image: "/images/motherhood-10.jpg" },
    { title: "Parenting Month 11 — Cruising Along", slug: "motherhood-blogs/Motherhood-month-11", description: "Baby may walk while holding furniture...", image: "/images/motherhood-11.jpg" },
    { title: "Parenting Month 12 — Happy First Birthday", slug: "motherhood-blogs/Motherhood-month-12", description: "Celebrating a year full of milestones and love...", image: "/images/motherhood-12.jpg" },

    // ----- Pregnancy Week-by-Week (10 Weeks sample, extend as needed) -----
    { title: "Pregnancy Week 1 — Preparing Your Body", slug: "pregnancy-week-wise/pregnancy-week-1", description: "Understanding cycle & fertility...", image: "/images/Pregnancy week 1.jpg" },
    { title: "Pregnancy Week 2 — Ovulation & Conception", slug: "pregnancy-week-wise/pregnancy-week-2", description: "Ovulation occurs, fertilization possible...", image: "/images/Pregnancy week 2.jpg" },
    { title: "Pregnancy Week 3 — Fertilization", slug: "pregnancy-week-wise/pregnancy-week-3", description: "Baby begins as a cluster of cells...", image: "/images/Pregnancy week 3.jpg" },
    { title: "Pregnancy Week 4 — Implantation", slug: "pregnancy-week-wise/pregnancy-week-4", description: "The fertilized egg attaches to uterus...", image: "/images/Pregnancy week 4.jpg" },
    { title: "Pregnancy Week 5 — Early Development", slug: "pregnancy-week-wise/pregnancy-week-5", description: "Heartbeat begins, organs start forming...", image: "/images/Pregnancy week 5.jpg" },
    { title: "Pregnancy Week 6 — Tiny Heartbeat", slug: "pregnancy-week-wise/pregnancy-week-6", description: "Heartbeat visible in ultrasound...", image: "/images/Pregnancy week 6.jpg" },
    { title: "Pregnancy Week 7 — Growing Fast", slug: "pregnancy-week-wise/pregnancy-week-7", description: "Baby’s arms and legs begin developing...", image: "/images/Pregnancy week 7.jpg" },
    { title: "Pregnancy Week 8 — Embryo to Fetus", slug: "pregnancy-week-wise/pregnancy-week-8", description: "Baby officially called a fetus now...", image: "/images/Pregnancy week 8.jpg" },
    { title: "Pregnancy Week 9 — Facial Features Forming", slug: "pregnancy-week-wise/pregnancy-week-9", description: "Eyes, nose, and mouth begin developing...", image: "/images/Pregnancy week 9.jpg" },
    { title: "Pregnancy Week 10 — Vital Organs Formed", slug: "pregnancy-week-wise/pregnancy-week-10", description: "All major organs are present...", image: "/images/Pregnancy week 10.jpg" },
    // Add Weeks 11–40 similarly
  ];

  const [toc, setToc] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [tocOpen, setTocOpen] = useState(false);
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2")).map((h) => ({
      id: h.id || h.innerText.replace(/\s+/g, "-").toLowerCase(),
      text: h.innerText,
    }));
    setToc(headings);
  }, []);

  useEffect(() => {
    const filtered = allBlogs.filter(blog => blog.slug !== slug);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    setRandomBlogs(shuffled.slice(0, 24));
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
        <title>{title} | Belly Buds</title>
        <meta name="description" content={description} />
      </Head>

      {/* Mobile TOC */}
      <div style={{ marginTop: "35px" }} className="lg:hidden fixed top-16 left-0 right-0 z-50 bg-green-800 text-white flex justify-between items-center px-4 py-2 shadow-md">
        <span className="font-semibold">Table of Contents</span>
        <button onClick={() => setTocOpen(!tocOpen)} className="text-white text-xl font-bold">
          {tocOpen ? "−" : "+"}
        </button>
      </div>

      {tocOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-green-700 text-white px-4 py-3 overflow-y-auto max-h-[calc(100vh-5rem)] shadow-md">
          <ul className="space-y-2 text-sm">
            {toc.map((item, idx) => (
              <li key={`toc-mobile-${idx}`}>
                <Link href={`#${item.id}`} className="block hover:underline" onClick={() => setTocOpen(false)}>
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
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4 text-green-800 border-b border-gray-200 pb-3">Contents</h3>
            <nav className="space-y-3">
              {toc.map((item, idx) => (
                <div key={`toc-${idx}`} className="border-l-2 border-green-600 pl-3">
                  <Link href={`#${item.id}`} className="text-green-900 hover:text-green-700 transition-colors text-sm font-medium leading-tight block py-1">
                    {item.text}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Blog Content */}
        <article className="lg:col-span-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">{title}</span>
          </nav>

          {/* Main Image */}
          {mainImage && (
            <div className="my-4 flex flex-col items-center gap-4">
              <div className="w-full max-w-md h-72 relative">
                <Image src={mainImage} alt={title} fill className="rounded object-cover" priority />
              </div>
              <SocialShare imageUrl={mainImage} title={title} />
            </div>
          )}

          {/* Title & Description */}
          <h1 className="text-4xl font-bold mb-6 text-orange-500">{title}</h1>
          {/* Author Info */}
          <div className="flex items-center gap-4 mt-6 mb-10 p-4 bg-gray-50 border rounded-lg shadow-sm">
            <Image src={authorImage} alt={authorName} width={60} height={60} className="rounded-full" />
            <div>
              <p className="font-semibold text-gray-800">{authorName}</p>
              <p className="text-sm text-gray-500">Updated: {updatedAt}</p>
              <a href={`mailto:${authorEmail}`} className="text-sm text-orange-500 hover:underline">{authorEmail}</a>
            </div>
          </div>
          <p className="text-lg leading-relaxed">{description}</p>

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
                  <SocialShare imageUrl={step.image} title={step.title} />
                </div>
              )}
              <p className="text-gray-700 leading-relaxed">{step.content}</p>
              {step.extraImages?.map((img, i) => (
                <div key={`step-extra-${i}`} className="my-4 flex flex-col items-center gap-4">
                  <div className="w-full max-w-md h-72 relative">
                    <Image src={img} alt={`extra-${step.title}-${i}`} width={400}
                      height={300} className="rounded object-cover" />
                  </div>
                  <SocialShare imageUrl={img} title={`Extra ${step.title}`} />
                </div>
              ))}
            </section>
          ))}

          {/* Sections */}
          {sections.map((section, idx) => (
            <section key={`section-${idx}`} id={section.title.replace(/\s+/g, "-").toLowerCase()} className="space-y-4">
              <h2 className="text-2xl font-semibold mt-6">{section.title}</h2>
              {section.image && (
                <div className="my-4 flex flex-col items-center gap-4">
                  <div className="w-full max-w-md h-90 relative">
                    <Image src={section.image} alt={section.title} width={400}
                      height={300} className="rounded object-cover" />
                  </div>
                  <SocialShare imageUrl={section.image} title={section.title} />
                </div>
              )}
              {section.content && <p className="text-gray-700 leading-relaxed">{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.list.map((item, i) => (<li key={`section-${idx}-item-${i}`}>{item}</li>))}
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
              {/* Extra Images */}
              {section.extraImages?.map((img, i) => (
                <div key={`section-extra-${i}`} className="my-4 flex flex-col items-center gap-4">
                  <div className="w-full max-w-md h-72 relative">
                    <Image src={img} alt={`extra-${section.title}-${i}`} width={400}
                      height={300} className="rounded object-cover" />
                  </div>
                  <SocialShare imageUrl={img} title={`Extra ${section.title}`} />
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
                      <span className="text-xl">{openFAQ === idx ? "−" : "+"}</span>
                    </button>
                    {openFAQ === idx && <p className="text-gray-600 mt-2">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Comments */}
          <div className="mt-12"><CommentSection slug={slug} /></div>

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
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Like Button */}
          <div className="mt-10 flex items-center justify-center">
            <button onClick={handleLike} className={`flex items-center space-x-2 px-6 py-2 rounded-full shadow-md transition-colors ${liked ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-orange-100"}`}>
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
