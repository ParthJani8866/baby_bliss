"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MotherhoodBlogs() {
  const [activeMonth, setActiveMonth] = useState(1);
  
  const motherhoodPosts = [
    {
      month: 1,
      title: "Month 1 — Surviving the First 30 Days",
      slug: "parenting-month-1",
      shortDescription: "Navigating the overwhelming yet magical first month of parenting with essential tips for newborn care and mother recovery.",
      description: `The first month of parenting is often described as the most overwhelming yet magical period in a parent's life. During this time, both the baby and the mother are adjusting to a completely new routine...`,
      image: "/images/motherhood-1.jpg",
      keyTopics: ["Newborn Care", "Feeding", "Sleep Deprivation", "Postpartum Recovery"]
    },
    {
      month: 2,
      title: "Month 2 — Smiles & Early Connections",
      slug: "parenting-month-2",
      shortDescription: "Discover the joy of social smiles and early bonding as your baby becomes more interactive and responsive.",
      description: `Month 2 of parenting is often filled with small victories and increasing confidence. Babies begin to show social smiles, respond to familiar voices, and start engaging more with their environment...`,
      image: "/images/motherhood-2.jpg",
      keyTopics: ["Social Smiles", "Bonding", "Feeding Routines", "Tummy Time"]
    },
    {
      month: 3,
      title: "Month 3 — Social Smiles & Tummy Time",
      slug: "parenting-month-3",
      shortDescription: "Enhanced interactions and crucial tummy time activities for your baby's development in the third month.",
      description: `Month 3 of parenting is a period where the baby becomes more interactive and parents begin to notice real personality traits. Social smiles become more frequent...`,
      image: "/images/motherhood-3.jpg",
      keyTopics: ["Motor Development", "Social Interaction", "Sleep Patterns", "Cognitive Growth"]
    },
    {
      month: 4,
      title: "Month 4 — Strengthening Muscles & Interaction",
      slug: "parenting-month-4",
      shortDescription: "Physical milestones and increased social engagement as your baby grows stronger and more curious.",
      description: `Month 4 of parenting marks an exciting period where babies become more active, alert, and socially engaged. Physical milestones such as rolling from tummy to back...`,
      image: "/images/motherhood-4.jpg",
      keyTopics: ["Rolling Over", "Hand Coordination", "Social Engagement", "Predictable Patterns"]
    },
    {
      month: 5,
      title: "Month 5 — Rolling, Sitting & Exploring",
      slug: "parenting-month-5",
      shortDescription: "Exploration and discovery phase with improved mobility and cognitive development in the fifth month.",
      description: `Month 5 of parenting is a phase of discovery and exploration. Babies gain more control over their bodies, begin rolling independently, and may start sitting with support...`,
      image: "/images/motherhood-5.jpg",
      keyTopics: ["Mobility", "Exploration", "Solid Foods", "Cognitive Development"]
    },
    {
      month: 6,
      title: "Month 6 — First Solids & Responsive Play",
      slug: "parenting-month-6",
      shortDescription: "Introducing first solid foods and encouraging responsive play for comprehensive development.",
      description: `Month 6 of parenting is a significant milestone in a baby's first year. Many babies are ready for their first solid foods, complementing breast milk or formula...`,
      image: "/images/motherhood-6.jpg",
      keyTopics: ["Solid Foods", "Sitting Independently", "Baby-proofing", "Cognitive Skills"]
    },
    {
      month: 7,
      title: "Month 7 — Sitting Confidently & Babbling",
      slug: "parenting-month-7",
      shortDescription: "Confident sitting and early language development as your baby becomes more communicative.",
      description: `By Month 7 of parenting, babies often sit confidently without support and start exploring their surroundings more actively. Crawling may begin...`,
      image: "/images/motherhood-7.jpg",
      keyTopics: ["Sitting", "Babbling", "Crawling", "Language Development"]
    },
    {
      month: 8,
      title: "Month 8 — Crawling, Grasping & Social Play",
      slug: "parenting-month-8",
      shortDescription: "Enhanced mobility and fine motor skills development through crawling and interactive play.",
      description: `Month 8 of parenting is characterized by enhanced mobility and curiosity. Babies often crawl confidently, explore surroundings, and manipulate objects with greater precision...`,
      image: "/images/motherhood-8.jpg",
      keyTopics: ["Crawling", "Pincer Grasp", "Social Play", "Problem-solving"]
    },
    {
      month: 9,
      title: "Month 9 — Standing, Stronger Communication & Play",
      slug: "parenting-month-9",
      shortDescription: "Standing milestones and stronger communication skills as your baby prepares for walking.",
      description: `Month 9 of parenting is a time of increasing independence and communication. Babies often pull themselves up to stand, cruise along furniture...`,
      image: "/images/motherhood-9.jpg",
      keyTopics: ["Standing", "Communication", "Separation Anxiety", "Imitation"]
    },
    {
      month: 10,
      title: "Month 10 — First Words, Peek-a-Boo & Mobility",
      slug: "parenting-month-10",
      shortDescription: "First words and increased mobility as your baby approaches toddlerhood with confidence.",
      description: `Month 10 of parenting is filled with milestones in mobility, communication, and curiosity. Babies often take first steps while holding furniture...`,
      image: "/images/motherhood-10.jpg",
      keyTopics: ["First Words", "Cruising", "Self-feeding", "Object Permanence"]
    },
    {
      month: 11,
      title: "Month 11 — Early Walking & Playful Independence",
      slug: "parenting-month-11",
      shortDescription: "Early walking stages and growing independence as your baby explores the world more actively.",
      description: `Month 11 of parenting is a time of significant physical, cognitive, and emotional milestones. Many babies take their first independent steps...`,
      image: "/images/motherhood-11.jpg",
      keyTopics: ["Walking", "Independence", "Language Expansion", "Fine Motor Skills"]
    },
    {
      month: 12,
      title: "Month 12 — First Birthday, Walking & Talking",
      slug: "parenting-month-12",
      shortDescription: "Celebrating the first year with major milestones in walking, talking, and cognitive development.",
      description: `Month 12 of parenting marks the completion of the first year, a period full of remarkable growth and achievements. Babies often walk independently...`,
      image: "/images/motherhood-12.jpg",
      keyTopics: ["First Birthday", "Independent Walking", "Vocabulary", "Toddler Transition"]
    }
  ];

  const faqs = [
    {
      question: "What is the most challenging month in the first year of parenting?",
      answer: "Many parents find months 1-3 the most challenging due to sleep deprivation, feeding adjustments, and postpartum recovery. However, every month brings unique challenges and rewards."
    },
    {
      question: "When should I introduce solid foods to my baby?",
      answer: "Most babies are ready for solid foods around 6 months. Look for signs like sitting with support, good head control, showing interest in food, and loss of the tongue-thrust reflex."
    },
    {
      question: "How can I support my baby's development month by month?",
      answer: "Engage in age-appropriate activities like tummy time, reading, talking to your baby, providing safe exploration opportunities, and following your pediatrician's guidance for developmental milestones."
    },
    {
      question: "What if my baby isn't meeting developmental milestones?",
      answer: "Every baby develops at their own pace. However, if you have concerns about developmental delays, consult your pediatrician for professional assessment and guidance."
    },
    {
      question: "How can I take care of my own well-being during the first year?",
      answer: "Prioritize rest when possible, accept help from family and friends, join parenting groups, maintain a support system, and don't hesitate to seek professional help for postpartum mental health concerns."
    }
  ];

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Motherhood Blogs", href: "/parenting-blogs" }
  ];

  return (
    <>
      <Head>
        <title>Month-by-Month Parenting Guide | First Year Development | Belly Buds</title>
        <meta 
          name="description" 
          content="Complete month-by-month parenting guide for baby's first year. Expert tips on newborn care, feeding, sleep, developmental milestones, and mother's well-being. Your comprehensive resource for parenting journey." 
        />
        <meta name="keywords" content="parenting guide, baby development, newborn care, month by month parenting, infant milestones, motherhood tips, first year baby" />
        <meta property="og:title" content="Month-by-Month Parenting Guide | First Year Development | Belly Buds" />
        <meta property="og:description" content="Complete parenting guide for baby's first year with expert tips on development, feeding, sleep, and mother's well-being." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://baby-toys.shop/parenting" />
        <meta property="og:image" content="/images/motherhood-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Month-by-Month Parenting Guide | Belly Buds" />
        <meta name="twitter:description" content="Complete parenting guide for baby's first year with expert tips and milestones." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Month-by-Month Parenting Guide - First Year Development",
            "description": "Complete month-by-month parenting guide for baby's first year with expert tips on development, feeding, sleep, and mother's well-being.",
            "author": {
              "@type": "Organization",
              "name": "Belly Buds"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Belly Buds",
              "logo": {
                "@type": "ImageObject",
                "url": "https://baby-toys.shop/public/images/logo.png"
              }
            },
            "datePublished": "2024-01-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://baby-toys.shop/parenting"
            }
          })}
        </script>
      </Head>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 py-4 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.name} className="flex items-center space-x-2">
                  <Link 
                    href={crumb.href}
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                  >
                    {crumb.name}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-gray-300">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Month-by-Month Parenting Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your Comprehensive Guide to Babys First Year
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Month Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Monthly Guides</h2>
                <div className="space-y-2">
                  {motherhoodPosts.map((blog) => (
                    <button
                      key={blog.month}
                      onClick={() => setActiveMonth(blog.month)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                        activeMonth === blog.month
                          ? 'bg-orange-500 text-white shadow-md transform scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Month {blog.month}</span>
                        {activeMonth === blog.month && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-3">First Year Quick Facts</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      12 Major Developmental Phases
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      50+ Developmental Milestones
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Expert-Curated Content
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {motherhoodPosts.filter(blog => blog.month === activeMonth).map((blog) => (
                <article key={blog.month} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Blog Header */}
                  <div className="relative h-64 md:h-80">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        Month {blog.month}
                      </div>
                      <h1 className="text-2xl md:text-3xl font-bold mb-2">{blog.title}</h1>
                      <p className="text-lg opacity-90">{blog.shortDescription}</p>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6 md:p-8">
                        <div className="prose prose-lg max-w-none">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 rounded-xl p-4">
                              <h3 className="font-semibold text-gray-800 mb-3">Key Topics This Month</h3>
                              <div className="flex flex-wrap gap-2">
                                {blog.keyTopics.map((topic) => (
                                  <span 
                                    key={topic}
                                    className="bg-white border border-orange-200 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-4">
                              <h3 className="font-semibold text-orange-800 mb-3">Quick Tips</h3>
                              <ul className="text-orange-700 text-sm space-y-1">
                                <li>• Follow babys feeding cues</li>
                                <li>• Prioritize tummy time daily</li>
                                <li>• Track developmental milestones</li>
                                <li>• Dont forget self-care</li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
                            <p className="text-blue-800 font-medium">
                              💡 <strong>Expert Insight:</strong> Every baby develops at their own pace. 
                              Use this guide as a reference, not a strict timeline.
                            </p>
                          </div>

                          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                            {blog.description}
                          </div>

                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <Link 
                              href={`/motherhood-blogs/${blog.slug}`}
                              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                              Read Complete Guide for Month {blog.month}
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}

              {/* FAQ Section */}
              <section className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-start">
                        <span className="text-orange-500 mr-3">Q:</span>
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex items-start">
                        <span className="text-blue-500 mr-3 font-semibold">A:</span>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Call to Action */}
              <section className="mt-12 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Start Your Parenting Journey With Confidence
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Join thousands of parents who trust our month-by-month guides
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/communities"
                      className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                    >
                      Join Our Community
                    </Link>
                    <Link 
                      href="/resources"
                      className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
                    >
                      Explore More Resources
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}