"use client";

import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ParentingMemesBlog() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const memeCategories = [
    {
      id: "all",
      name: "All Parenting Memes",
      description: "Complete collection of hilarious parenting memes"
    },
    {
      id: "general",
      name: "General Parenting Memes",
      description: "Funny memes about the overall parenting experience"
    },
    {
      id: "father",
      name: "Dad & Father Memes",
      description: "Hilarious memes about fatherhood and dad life"
    },
    {
      id: "teenager",
      name: "Teenager Parenting Memes",
      description: "Memes about the challenges of raising teenagers"
    },
    {
      id: "holiday",
      name: "Holiday Parenting Memes",
      description: "Seasonal memes about parenting during holidays"
    },
    {
      id: "specific",
      name: "Specific Parenting Memes",
      description: "Niche memes for different parenting situations"
    }
  ];

  const parentingMemes = [
    // General Parenting Memes
    {
      id: 1,
      title: "The Ultimate Parenting Meme Collection",
      category: "general",
      keywords: ["parenting meme", "memes about parenting", "parenting memes funny", "funniest parenting memes"],
      description: `When you finally accept that parenting memes are your love language and your primary coping mechanism. The search for the perfect parenting memes funny content is real, and we've curated the funniest parenting memes that perfectly capture the chaos and joy of raising kids. From memes about parenting that make you nod in agreement to those that make you spit out your coffee laughing.`,
      searchVolume: 5000,
      competition: "Low"
    },
    {
      id: 2,
      title: "When Gentle Parenting Meets Reality",
      category: "general",
      keywords: ["gentle parenting meme", "gentle parenting memes", "parenting advice meme", "unwanted parenting advice meme"],
      description: `That moment when you're trying to practice gentle parenting but your child is testing every ounce of your patience. Gentle parenting memes perfectly capture the struggle between aspiration and reality. And let's not forget the unwanted parenting advice meme when relatives offer unsolicited tips. Every parenting advice meme reminds us that we're all just figuring it out as we go.`,
      searchVolume: 1000,
      competition: "Low"
    },
    {
      id: 3,
      title: "Bad Parenting Confessions Through Memes",
      category: "general",
      keywords: ["bad parenting memes", "parenting hack meme", "parenting in public meme", "parenting 101 meme"],
      description: `We've all had those bad parenting memes moments - the ones you only confess to through memes. The parenting in public meme when your child has a meltdown in the grocery store? Classic. That parenting hack meme that actually works? Gold. And the parenting 101 meme that shows what they really should teach in parenting classes? Priceless.`,
      searchVolume: 500,
      competition: "Low"
    },
    {
      id: 4,
      title: "Best Parenting Memes That Keep Us Sane",
      category: "general",
      keywords: ["best parenting memes", "hilarious parenting memes", "funny memes parenting", "inspirational parenting meme"],
      description: `Sometimes you need the best parenting memes to remind you that you're not alone in this crazy journey. Hilarious parenting memes that make you laugh until you cry, funny memes parenting content that gets shared in every mom group, and the occasional inspirational parenting meme that gives you just the boost you need to keep going.`,
      searchVolume: 5050,
      competition: "Low"
    },

    // Father & Dad Memes
    {
      id: 5,
      title: "Dad Life: The Untold Story in Memes",
      category: "father",
      keywords: ["dad parenting memes", "daughter father memes", "father and daughter funny memes", "father daughter love meme"],
      description: `Dad parenting memes have created their own genre of humor. From the heartwarming daughter father memes that show the special bond to the hilarious father and daughter funny memes about dad's unique approach to parenting. The father daughter love meme category alone could fill an entire gallery with precious moments and funny misunderstandings.`,
      searchVolume: 10500,
      competition: "Low"
    },
    {
      id: 6,
      title: "Father-Son Dynamic in Meme Form",
      category: "father",
      keywords: ["father son memes funny", "mom and dad memes", "mum and dad memes", "step father meme"],
      description: `The father son memes funny collection showcases the unique humor of male bonding. Meanwhile, mom and dad memes (or mum and dad memes for our UK friends) highlight the different parenting styles in a household. And let's not forget the important step father meme category that addresses the unique challenges and joys of blended families.`,
      searchVolume: 600,
      competition: "Low"
    },
    {
      id: 7,
      title: "Funny Mother-Son Moments Captured in Memes",
      category: "father",
      keywords: ["funny mother son memes", "co parenting memes", "working mom memes", "parenting funny mom memes"],
      description: `Funny mother son memes capture the special bond and the hilarious moments that come with raising boys. For modern families, co parenting memes help navigate the complexities of shared custody. Working mom memes resonate with mothers balancing career and family, while parenting funny mom memes remind us that mom humor is a category of its own.`,
      searchVolume: 1000,
      competition: "Low"
    },

    // Teenager Parenting Memes
    {
      id: 8,
      title: "Surviving Teenage Years with Memes",
      category: "teenager",
      keywords: ["memes about raising teenagers", "parenting teens meme", "raising a teenage daughter meme", "raising a teenager meme"],
      description: `Memes about raising teenagers should come with a warning: may cause both laughter and crying. The parenting teens meme genre is particularly rich with content about eye-rolling, door-slamming, and the mysterious language of teens. Raising a teenage daughter meme collections are especially popular, as are the general raising a teenager meme posts that all parents of teens can relate to.`,
      searchVolume: 1500,
      competition: "Low"
    },
    {
      id: 9,
      title: "Teenager Knows Everything (According to Them)",
      category: "teenager",
      keywords: ["teenager knows everything meme", "funny memes for teenage daughter", "funny teenage daughter memes", "teenage daughter memes"],
      description: `The classic teenager knows everything meme perfectly captures that phase when your child suddenly becomes an expert on life. Funny memes for teenage daughter help parents survive the emotional rollercoaster, while funny teenage daughter memes and general teenage daughter memes create a support system for parents going through similar challenges.`,
      searchVolume: 600,
      competition: "Low"
    },
    {
      id: 10,
      title: "Raising Teenage Sons: The Meme Edition",
      category: "teenager",
      keywords: ["memes about teenage sons", "memes for teenage sons", "raising teenage son meme", "funny memes for teenager"],
      description: `Memes about teenage sons often feature empty refrigerators, strange smells, and grunts that pass for conversation. Memes for teenage sons might be shared as a way to communicate when words fail. While raising teenage son meme content has seen some decline, the search for funny memes for teenager content remains strong among desperate parents.`,
      searchVolume: 600,
      competition: "Low"
    },

    // Holiday & Specific Memes
    {
      id: 11,
      title: "Christmas Chaos: Parenting Edition",
      category: "holiday",
      keywords: ["funny christmas parenting memes", "parenting christmas meme", "memes for teenager", "raising teenager memes"],
      description: `Funny christmas parenting memes capture the stark contrast between Pinterest expectations and reality. The parenting christmas meme category includes everything from assembly hell to overexcited kids at 5 AM. During holidays, even memes for teenager take on a seasonal flavor, and raising teenager memes might feature teens who'd rather be on their phones than with family.`,
      searchVolume: 50,
      competition: "Low"
    },
    {
      id: 12,
      title: "Niche Parenting Memes for Every Situation",
      category: "specific",
      keywords: ["parenting adults meme", "toxic mothers meme", "pregnancy memes for moms", "qustodio memes"],
      description: `The parenting adults meme category has exploded recently, showing that parenting never really ends. Toxic mothers meme content provides validation for those with difficult family relationships. Pregnancy memes for moms help expectant mothers laugh through the discomfort, and even qustodio memes about parental control apps have found their audience in the digital age.`,
      searchVolume: 600,
      competition: "Low"
    }
  ];

  const filteredMemes = activeCategory === "all" 
    ? parentingMemes 
    : parentingMemes.filter(meme => meme.category === activeCategory);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Parenting Memes", href: "/parenting-memes" }
  ];

  const totalSearches = parentingMemes.reduce((sum, meme) => sum + meme.searchVolume, 0);

  return (
    <>
      <Head>
        <title>Parenting Memes Collection 2025 | Funny Mom and Dad Memes</title>
        <meta 
          name="description" 
          content="Huge collection of hilarious parenting memes including dad parenting memes, teenage daughter memes, gentle parenting memes, funny mother son memes and more. Laugh through the chaos of parenting!" 
        />
        <meta name="keywords" content={parentingMemes.flatMap(meme => meme.keywords).join(", ")} />
        <meta property="og:title" content="Ultimate Parenting Memes Collection | Funny Parent Humor" />
        <meta property="og:description" content="Discover the best parenting memes that perfectly capture the joy and chaos of raising kids. From dad jokes to teenage drama memes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baby-toys.shop/parenting-memes" />
        <meta property="og:image" content="/images/parenting-memes-og.jpg" />
      </Head>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50">
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
        <section className="relative bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Parenting Memes That Keep Us Sane
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Meme Categories</h2>
                <div className="space-y-3">
                  {memeCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                      }`}
                    >
                      <div className="font-semibold mb-1">{category.name}</div>
                      <div className={`text-sm ${
                        activeCategory === category.id ? 'text-orange-100' : 'text-gray-500'
                      }`}>
                        {category.description}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Popular Keywords Stats */}
                <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">🔥 Trending Now</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-blue-800 mb-1">
                        <span>parenting meme</span>
                        <span className="font-semibold">5,000/mo</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-blue-800 mb-1">
                        <span>dad parenting memes</span>
                        <span className="font-semibold">10,500/mo</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-blue-800 mb-1">
                        <span>funny mother son memes</span>
                        <span className="font-semibold">1,000/mo</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Meme Articles */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMemes.map((meme) => (
                  <article key={meme.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {memeCategories.find(cat => cat.id === meme.category)?.name}
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-orange-600 transition-colors duration-200">
                        {meme.title}
                      </h2>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {meme.keywords.slice(0, 3).map((keyword, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium border border-gray-200"
                          >
                            #{keyword}
                          </span>
                        ))}
                        {meme.keywords.length > 3 && (
                          <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-lg text-xs">
                            +{meme.keywords.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {meme.description}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                            {meme.searchVolume.toLocaleString()}/mo
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            meme.competition === 'Low' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {meme.competition} Competition
                          </span>
                        </div>
                        
                        <Link 
                          href={`/parenting-memes/${meme.id}`}
                          className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          View Memes
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* FAQ Section */}
              <section className="mt-12 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Parenting Memes FAQ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Why are parenting memes so popular?
                      </h3>
                      <p className="text-gray-600">
                        Parenting memes provide validation and humor for the daily challenges of raising children. They create a sense of community and help parents realize they're not alone in their experiences.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        What makes a parenting meme go viral?
                      </h3>
                      <p className="text-gray-600">
                        The most viral parenting memes capture universal truths about parenting that resonate across different cultures and parenting styles. Relatability is key!
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Are there different types of parenting memes?
                      </h3>
                      <p className="text-gray-600">
                        Yes! From dad memes and mom memes to teenager memes, gentle parenting memes, holiday memes, and niche categories like co-parenting or step-parent memes.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Can memes actually help with parenting stress?
                      </h3>
                      <p className="text-gray-600">
                        Absolutely! Laughter reduces stress hormones and increases endorphins. Sharing relatable memes can turn frustrating moments into shared laughter.
                      </p>
                    </div>
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