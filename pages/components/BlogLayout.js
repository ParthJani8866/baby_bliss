"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection"; // <-- custom comment component
import AdBanner from "./AdBanner"; // <-- your ad placement
import Header from "./Header";
import Footer from "./Footer";
import { HandThumbUpIcon } from "@heroicons/react/24/outline"; // <-- Like icon
import SocialShare from "./SocialShare";

export default function BlogLayout({
  title,
  description,
  mainImage,
  steps = [],
  sections = [],
  tips = [],
  faqs = [],
  slug, // unique slug for each blog post
}) {
  const [toc, setToc] = useState([]);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null); // accordion toggle

  // Extract all H2 headings for TOC
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

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Blog Content */}
        <article className="lg:col-span-3">
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
            <div className="my-4">
              <Image
                src={mainImage}
                alt={title}
                width={500}
                height={300}
                className="rounded mb-2 w-full object-cover"
                priority
              />
              <SocialShare imageUrl={mainImage} title={title} />
            </div>
          )}

          {/* Title & Description */}
          <h1 className="text-4xl font-bold mb-6 text-orange-500">{title}</h1>
          <p className="text-lg leading-relaxed">{description}</p>

          {/* Steps */}
          {steps.map((step, idx) => (
            <section
              key={`step-${idx}`}
              id={step.title.replace(/\s+/g, "-").toLowerCase()}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold mt-6">
                {idx + 1}. {step.title}
              </h2>
              {step.image && (
                <div className="my-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={300}
                    className="rounded mb-2"
                  />
                  <SocialShare imageUrl={step.image} title={step.title} />
                </div>
              )}
              <p className="text-gray-700 leading-relaxed">{step.content}</p>

              {step.extraImages &&
                step.extraImages.map((img, i) => (
                  <div key={`step-extra-${i}`} className="my-4">
                    <Image
                      src={img}
                      alt={`extra-${step.title}-${i}`}
                      width={500}
                      height={300}
                      className="rounded mb-2 w-full object-cover"
                    />
                    <SocialShare imageUrl={img} title={`Extra ${step.title}`} />
                  </div>
                ))}
            </section>
          ))}

          {/* Sections */}
          {sections.map((section, idx) => (
            <section
              key={`section-${idx}`}
              id={section.title.replace(/\s+/g, "-").toLowerCase()}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold mt-6">{section.title}</h2>
              {section.image && (
                <div className="my-4">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={500}
                    height={300}
                    className="rounded mb-2"
                  />
                  <SocialShare imageUrl={section.image} title={section.title} />
                </div>
              )}
              {section.content && (
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              )}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={`section-${idx}-item-${i}`}>{item}</li>
                  ))}
                </ul>
              )}

              {section.extraImages &&
                section.extraImages.map((img, i) => (
                  <div key={`section-extra-${i}`} className="my-4">
                    <Image
                      src={img}
                      alt={`extra-${section.title}-${i}`}
                      width={500}
                      height={300}
                      className="rounded mb-2"
                    />
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
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex justify-between items-center text-left"
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {faq.q}
                      </span>
                      <span className="text-xl">
                        {openFAQ === idx ? "−" : "+"}
                      </span>
                    </button>
                    {openFAQ === idx && (
                      <p className="text-gray-600 mt-2">{faq.a}</p>
                    )}
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
              className={`flex items-center space-x-2 px-6 py-2 rounded-full shadow-md transition-colors ${liked
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                }`}
            >
              <HandThumbUpIcon className="w-5 h-5" />
              <span>{liked ? "Liked" : "Like"}</span>
              {likes > 0 && <span className="ml-1">({likes})</span>}
            </button>
          </div>
        </article>

        {/* Table of Contents & Sidebar Ads */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24 self-start space-y-6">
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-orange-600">
              Table of Contents
            </h3>
            <ul className="space-y-2 text-sm">
              {toc.map((item, idx) => (
                <li key={`toc-${idx}`}>
                  <Link
                    href={`#${item.id}`}
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ad placeholder */}
          <AdBanner />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
