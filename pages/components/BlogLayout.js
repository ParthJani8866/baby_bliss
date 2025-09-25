"use client";

import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Image from "next/image";
import AdBanner from "./AdBanner";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection"; // <-- custom comment component
import Link from "next/link";

export default function BlogLayout({
  title,
  description,
  mainImage,
  steps = [],
  sections = [],
  tips = [],
  slug // <-- unique slug for each blog post
}) {
  const [toc, setToc] = useState([]);

  // Extract all H2 headings for TOC
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2")).map((h) => ({
      id: h.id || h.innerText.replace(/\s+/g, "-").toLowerCase(),
      text: h.innerText,
    }));
    setToc(headings);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />

      <Head>
        <title>{title} | Baby Bliss</title>
        <meta name="description" content={description} />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Blog Content */}
        <article className="lg:col-span-3">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">{title}</span>
          </nav>

          {/* Main Image */}
          {mainImage && (
            <Image
              src={mainImage}
              alt={title}
              width={800}
              height={500}
              className="rounded mb-6 w-full object-cover"
              priority
            />
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
              <h2 className="text-2xl font-semibold mt-6">{idx + 1}. {step.title}</h2>
              {step.image && (
                <Image
                  src={step.image}
                  alt={step.title}
                  width={800}
                  height={500}
                  className="rounded mb-4 w-full object-cover"
                />
              )}
              <p className="text-gray-700 leading-relaxed">{step.content}</p>
            </section>
          ))}

          <AdBanner />

          {/* Sections */}
          {sections.map((section, idx) => (
            <section
              key={`section-${idx}`}
              id={section.title.replace(/\s+/g, "-").toLowerCase()}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold mt-6">{section.title}</h2>
              {section.image && (
                <Image
                  src={section.image}
                  alt={section.title}
                  width={800}
                  height={500}
                  className="rounded mb-4 w-full object-cover"
                />
              )}
              {section.content && <p className="text-gray-700 leading-relaxed">{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.list.map((item, i) => <li key={`section-${idx}-item-${i}`}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}

          {/* Tips */}
          {tips.length > 0 && (
            <section id="tips" className="space-y-4">
              <h2 className="text-2xl font-semibold mt-6">Tips</h2>
              <ul className="list-disc pl-5 space-y-2">
                {tips.map((tip, idx) => <li key={`tip-${idx}`}>{tip}</li>)}
              </ul>
            </section>
          )}

          {/* Custom Comment Section */}
          <div className="mt-12">
            <CommentSection slug={slug} />
          </div>
        </article>

        {/* Table of Contents Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24 self-start">
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-orange-600">Table of Contents</h3>
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
        </aside>
      </main>

      <Footer />
    </div>
  );
}
