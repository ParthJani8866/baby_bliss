"use client";

import Header from "./header";
import Footer from "./Footer";
import ProductSidebar from "./ProductSidebar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function BlogLayout({
  title,
  description,
  steps = [],
  sections = [],
  tips = [],
  sidebarCategory = "",
  sidebarTitle = ""
}) {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />

      <Head>
        <title>{title} | Baby Bliss</title>
        <meta name="description" content={description} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-500 transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/${title.toLowerCase().includes("motherhood") ? "motherhood-blogs" : "blogs"}`}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              {title.toLowerCase().includes("motherhood") ? "Motherhood Blogs" : "Blogs"}
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">{title}</span>
          </nav>

          <h1 className="text-3xl font-bold mb-6 text-orange-500">{title}</h1>
          <p className="mb-4 leading-relaxed">{description}</p>

          {/* Render Steps */}
          {steps.map((step, idx) => (
            <div key={`step-${idx}`}>
              <h2 className="text-2xl font-semibold mt-6 mb-3">{idx + 1}. {step.title}</h2>
              {step.image && (
                <Image
                  src={step.image}
                  alt={step.title}
                  width={800}
                  height={500}
                  className="rounded mb-4"
                  priority={false}
                />
              )}
              <p className="mb-4">{step.content}</p>
            </div>
          ))}

          {/* Render Sections */}
          {sections.map((section, idx) => (
            <div key={`section-${idx}`} className="mb-6">
              <h2 className="text-2xl font-semibold mt-6 mb-3">{section.title}</h2>
              {section.image && (
                <Image
                  src={section.image}
                  alt={section.title}
                  width={800}
                  height={500}
                  className="rounded mb-4"
                  priority={false}
                />
              )}
              {section.content && <p className="mb-4">{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {section.list.map((item, i) => <li key={`section-${idx}-item-${i}`}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}

          {/* Render Tips */}
          {tips.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-6 mb-3">Tips</h2>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {tips.map((tip, idx) => <li key={`tip-${idx}`}>{tip}</li>)}
              </ul>
            </>
          )}
        </article>

        {/* Sidebar */}
        {sidebarCategory && <ProductSidebar category={sidebarCategory} title={sidebarTitle} limit={8} />}
      </div>

      <Footer />
    </div>
  );
}
