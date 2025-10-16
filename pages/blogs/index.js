"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Blogs() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    { 
      title: "Newborn Baby Clothes: What You Need to Know in 2025", 
      slug: "newborn-baby-clothes", 
      description: "Complete guide to newborn baby clothes, essentials, safety tips, brands, and care instructions.",
      category: "Newborn Care",
      readTime: "8 min",
      image: "/images/blog-newborn-baby-clothes.jpg"
    },
    { 
      title: "10 Best Baby Diapers: Absorbency, Comfort & Eco-friendly Picks", 
      slug: "best-baby-diapers", 
      description: "Explore the top diapers for babies, including eco-friendly and comfortable options.",
      category: "Baby Products",
      readTime: "6 min",
      image: "/images/blog-best-baby-diapers.jpg"
    },
    { 
      title: "Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider", 
      slug: "breastfeeding-vs-formula", 
      description: "Learn about breastfeeding and formula feeding, and decide what's best for your baby.",
      category: "Feeding",
      readTime: "10 min",
      image: "/images/blog-breastfeeding-vs-formula.jpg"
    },
    { 
      title: "5 Ways to Calm a Crying Baby: Tested and Soothing Remedies", 
      slug: "calm-crying-baby", 
      description: "Effective tips to calm your baby when crying, backed by expert advice.",
      category: "Baby Care",
      readTime: "5 min",
      image: "/images/blog-calm-crying-baby.jpg"
    },
    { 
      title: "How to Make Your Home Baby-Safe: A Complete Baby-Proofing Guide", 
      slug: "baby-proofing-guide", 
      description: "Step-by-step guide to make your home safe for newborns and toddlers.",
      category: "Safety",
      readTime: "12 min",
      image: "/images/blog-baby-proofing-guide.jpg"
    },
    { 
      title: "10 Best Lullabies to Help Your Baby Sleep Peacefully", 
      slug: "best-baby-lullabies", 
      description: "Discover soothing lullabies that help your baby sleep better at night.",
      category: "Sleep",
      readTime: "4 min",
      image: "/images/blog-best-baby-lullabies.jpg"
    },
    { 
      title: "5 Milestones to Expect in Your Baby's First Year", 
      slug: "baby-first-year-milestones", 
      description: "Track your baby's development with these important first-year milestones.",
      category: "Development",
      readTime: "7 min",
      image: "/images/blog-baby-first-year-milestones.jpg"
    },
    { 
      title: "How to Swaddle Your Baby: Step-by-Step Techniques for Comfort", 
      slug: "how-to-swaddle", 
      description: "Learn proper swaddling techniques to keep your baby comfortable and secure.",
      category: "Newborn Care",
      readTime: "5 min",
      image: "/images/blog-how-to-swaddle.jpg"
    },
    { 
      title: "What to Expect the First 24 Hours After Giving Birth", 
      slug: "first-24-hours-after-birth", 
      description: "Guide for new parents on what happens in the first 24 hours after birth.",
      category: "Postpartum",
      readTime: "9 min",
      image: "/images/blog-first-24-hours-after-birth.jpg"
    },
    { 
      title: "Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance", 
      slug: "self-care-for-moms", 
      description: "Important self-care tips for stay-at-home moms to maintain health and balance.",
      category: "Parenting",
      readTime: "8 min",
      image: "/images/blog-self-care-for-moms.jpg"
    },
    { 
      title: "Baby Diapers: Absorbency, Comfort, Disposable Bags & Diaper Liners", 
      slug: "disposable-bags-and-diaper-liners", 
      description: "Guide on disposable diaper bags and liners for a cleaner, easier diaper-changing routine.",
      category: "Baby Products",
      readTime: "6 min",
      image: "/images/blog-disposable-bags-and-diaper-liners.jpg"
    },
    { 
      title: "Top 10 Must-Have Baby Gear Essentials for New Parents", 
      slug: "baby-gear-essentials", 
      description: "Bringing a newborn home can be overwhelming, but having the right gear can make a huge difference.",
      category: "Baby Products",
      readTime: "11 min",
      image: "/images/blog-baby-gear-essentials.jpg"
    },
    { 
      title: "Is Bad Parenting Based on a True Story?", 
      slug: "is-bad-parenting-based-on-a-true-story", 
      description: "A compassionate, evidence-informed long-form guide exploring whether portrayals of bad parenting reflect reality.",
      category: "Parenting",
      readTime: "15 min",
      image: "/images/blog-is-bad-parenting-based-on-a-true-story.jpg"
    },
    { 
      title: "Parental Opt-Out Rights: An Overview", 
      slug: "parental-opt-out-rights-in-education", 
      description: "Parental opt-out rights refer to the legal authority of parents to exempt their children from specific parts of their public school education.",
      category: "Education",
      readTime: "10 min",
      image: "/images/blog-parental-opt-out-rights-in-education.jpg"
    },
    { 
      title: "Parenting Styles: The Blueprint for Child Development", 
      slug: "parenting-styles", 
      description: "Your parenting style is more than just a collection of habits—it's the emotional climate you create and the strategic framework you use to raise your child.",
      category: "Parenting",
      readTime: "12 min",
      image: "/images/blog-parenting-styles.jpg"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Topics", count: blogPosts.length },
    { id: "parenting", name: "Parenting", count: blogPosts.filter(post => post.category === "Parenting").length },
    { id: "newborn-care", name: "Newborn Care", count: blogPosts.filter(post => post.category === "Newborn Care").length },
    { id: "baby-products", name: "Baby Products", count: blogPosts.filter(post => post.category === "Baby Products").length },
    { id: "feeding", name: "Feeding", count: blogPosts.filter(post => post.category === "Feeding").length },
    { id: "development", name: "Development", count: blogPosts.filter(post => post.category === "Development").length },
    { id: "safety", name: "Safety", count: blogPosts.filter(post => post.category === "Safety").length }
  ];

  // Filtered posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           post.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // SEO Properties
  const seoProperties = {
    title: "Parenting Blogs & Baby Care Guides | Expert Tips & Advice | Belly Buds",
    description: "Discover comprehensive parenting blogs, baby care guides, and expert tips. From newborn care to parenting styles, find everything you need for your parenting journey.",
    canonical: "https://baby-toys.shop/blogs",
    keywords: "parenting blogs, baby care tips, newborn care, parenting advice, baby development, parenting styles"
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      <Head>
        <title>{seoProperties.title}</title>
        <meta name="description" content={seoProperties.description} />
        <meta name="keywords" content={seoProperties.keywords} />
        <link rel="canonical" href={seoProperties.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={seoProperties.title} />
        <meta property="og:description" content={seoProperties.description} />
        <meta property="og:url" content={seoProperties.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Belly Buds" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoProperties.title} />
        <meta name="twitter:description" content={seoProperties.description} />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Parenting Wisdom & 
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Baby Care Guides
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Expert advice, practical tips, and comprehensive guides for every stage of your parenting journey
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search parenting topics, baby care tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:shadow-md'
                }`}
              >
                <span className="font-semibold">{category.name}</span>
                <span className={`ml-2 text-sm ${
                  selectedCategory === category.id ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === "all" ? "All Parenting Articles" : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((blog) => (
                <article
                  key={blog.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                  <Link href={`/blogs/${blog.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      {/* Fallback if image fails to load */}
                      <div 
                        className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <div className="text-center text-blue-600">
                          <div className="text-4xl mb-2">📖</div>
                          <p className="font-semibold">Parenting Blog</p>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                          {blog.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        {blog.readTime}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {blog.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                          Read Article →
                        </span>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <span>📖</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with Parenting Tips
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Get the latest parenting advice, baby care tips, and exclusive content delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Popular Topics
            </h2>
            <p className="text-lg text-gray-600">
              Dive deeper into specific parenting and baby care categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Newborn Care", icon: "👶", count: "15+ articles" },
              { name: "Sleep Training", icon: "💤", count: "8+ articles" },
              { name: "Baby Nutrition", icon: "🍼", count: "12+ articles" },
              { name: "Parenting Tips", icon: "💡", count: "20+ articles" },
              { name: "Development", icon: "📈", count: "10+ articles" },
              { name: "Product Reviews", icon: "⭐", count: "15+ articles" },
              { name: "Health & Safety", icon: "🏥", count: "18+ articles" },
              { name: "Activities & Play", icon: "🎮", count: "9+ articles" }
            ].map((topic, index) => (
              <Link
                key={index}
                href={`/blogs/category/${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{topic.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{topic.name}</h3>
                <p className="text-sm text-gray-500">{topic.count}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}