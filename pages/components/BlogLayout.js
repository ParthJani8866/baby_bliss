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
  const [toc, setToc] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2")).map((h) => ({
      id: h.id || h.innerText.replace(/\s+/g, "-").toLowerCase(),
      text: h.innerText,
    }));
    setToc(headings);
  }, []);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

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
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="text-white text-xl font-bold"
        >
          {tocOpen ? "−" : "+"}
        </button>
      </div>

      {tocOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-green-700 text-white px-4 py-3 overflow-y-auto max-h-[calc(100vh-5rem)] shadow-md">
          <ul className="space-y-2 text-sm">
            {toc.map((item, idx) => (
              <li key={`toc-mobile-${idx}`}>
                <Link
                  href={`#${item.id}`}
                  className="block hover:underline"
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
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4 text-green-800 border-b border-gray-200 pb-3">
              Contents
            </h3>
            <nav className="space-y-3">
              {toc.map((item, idx) => (
                <div key={`toc-${idx}`} className="border-l-2 border-green-600 pl-3">
                  <Link
                    href={`#${item.id}`}
                    className="text-green-900 hover:text-green-700 transition-colors text-sm font-medium leading-tight block py-1"
                  >
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
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
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
            <Image
              src={authorImage}
              alt={authorName}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">{authorName}</p>
              <p className="text-sm text-gray-500">
                Updated: {new Date(updatedAt).toLocaleDateString()}
              </p>
              <a
                href={`mailto:${authorEmail}`}
                className="text-sm text-orange-500 hover:underline"
              >
                {authorEmail}
              </a>
            </div>
          </div>
          <p className="text-lg leading-relaxed">{description}</p>

          {/* Steps */}
          {steps.map((step, idx) => (
            <section key={`step-${idx}`} id={step.title.replace(/\s+/g, "-").toLowerCase()} className="space-y-4">
              <h2 className="text-2xl font-semibold mt-6">
                {idx + 1}. {step.title}
              </h2>
              {step.image && (
                <div className="my-4 flex flex-col items-center gap-4">
                  <div className="w-full max-w-md h-72 relative">
                    <Image src={step.image} alt={step.title} fill className="rounded object-cover" />
                  </div>
                  <SocialShare imageUrl={step.image} title={step.title} />
                </div>
              )}
              <p className="text-gray-700 leading-relaxed">{step.content}</p>
              {step.extraImages?.map((img, i) => (
                <div key={`step-extra-${i}`} className="my-4 flex flex-col items-center gap-4">
                  <div className="w-full max-w-md h-72 relative">
                    <Image src={img} alt={`extra-${step.title}-${i}`} fill className="rounded object-cover" />
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
                  <div className="w-full max-w-md h-72 relative">
                    <Image src={section.image} alt={section.title} fill className="rounded object-cover" />
                  </div>
                  <SocialShare imageUrl={section.image} title={section.title} />
                </div>
              )}
              {section.content && <p className="text-gray-700 leading-relaxed">{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={`section-${idx}-item-${i}`}>{item}</li>
                  ))}
                </ul>
              )}
              {section.subsections?.map((sub, i) => (
                <div key={`subsection-${i}`} className="pl-5 mt-4">
                  <h3 className="text-xl font-semibold">{sub.subtitle}</h3>
                  {sub.content && <p className="text-gray-700 mt-1">{sub.content}</p>}
                  {sub.list && (
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {sub.list.map((item, j) => (
                        <li key={`sublist-${j}`}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {section.extraImages?.map((img, i) => (
                <div key={`section-extra-${i}`} className="my-4 flex flex-col items-center gap-4">
                  <div className="w-full max-w-md h-72 relative">
                    <Image src={img} alt={`extra-${section.title}-${i}`} fill className="rounded object-cover" />
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
              <ul className="list-disc pl-5 space-y-2">
                {tips.map((tip, idx) => (
                  <li key={`tip-${idx}`}>{tip}</li>
                ))}
              </ul>
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
          <div className="mt-12">
            <CommentSection slug={slug} />
          </div>

          {/* Like Button */}
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full shadow-md transition-colors ${liked ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                }`}
            >
              <HandThumbUpIcon className="w-5 h-5" />
              <span>{liked ? "Liked" : "Like"}</span>
              {likes > 0 && <span className="ml-1">({likes})</span>}
            </button>
          </div>
        </article>

        {/* Ads - Desktop */}
        <aside className="hidden lg:block lg:col-span-3 self-start space-y-6">
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
