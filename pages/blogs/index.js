"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blogs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

 const blogPosts = [
  {
    title: "Newborn Baby Clothes: What You Need to Know in 2025",
    slug: "newborn-baby-clothes",
    description:
      "Complete guide to newborn baby clothes, essentials, safety tips, brands, and care instructions.",
  },
  {
    title: "10 Best Baby Diapers: Absorbency, Comfort & Eco-friendly Picks",
    slug: "best-baby-diapers",
    description:
      "Explore the top diapers for babies, including eco-friendly and comfortable options.",
  },
  {
    title: "Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider",
    slug: "breastfeeding-vs-formula",
    description:
      "Learn about breastfeeding and formula feeding, and decide what’s best for your baby.",
  },
  {
    title: "5 Ways to Calm a Crying Baby: Tested and Soothing Remedies",
    slug: "calm-crying-baby",
    description:
      "Effective tips to calm your baby when crying, backed by expert advice.",
  },
  {
    title: "How to Make Your Home Baby-Safe: A Complete Baby-Proofing Guide",
    slug: "baby-proofing-guide",
    description:
      "Step-by-step guide to make your home safe for newborns and toddlers.",
  },
  {
    title: "10 Best Lullabies to Help Your Baby Sleep Peacefully",
    slug: "best-baby-lullabies",
    description:
      "Discover soothing lullabies that help your baby sleep better at night.",
  },
  {
    title: "5 Milestones to Expect in Your Baby’s First Year",
    slug: "baby-first-year-milestones",
    description:
      "Track your baby’s development with these important first-year milestones.",
  },
  {
    title: "How to Swaddle Your Baby: Step-by-Step Techniques for Comfort",
    slug: "how-to-swaddle",
    description:
      "Learn proper swaddling techniques to keep your baby comfortable and secure.",
  },
  {
    title: "What to Expect the First 24 Hours After Giving Birth",
    slug: "first-24-hours-after-birth",
    description:
      "Guide for new parents on what happens in the first 24 hours after birth.",
  },
  {
    title: "Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance",
    slug: "self-care-for-moms",
    description:
      "Important self-care tips for stay-at-home moms to maintain health and balance.",
  },
  {
    title: "Baby Diapers: Absorbency, Comfort, Disposable Bags & Diaper Liners",
    slug: "disposable-bags-and-diaper-liners",
    description:
      "Guide on disposable diaper bags and liners for a cleaner, easier diaper-changing routine.",
  },
  {
    title: "Top 10 Must-Have Baby Gear Essentials for New Parents",
    slug: "baby-gear-essentials",
    description:
      "Bringing a newborn home can be overwhelming, but having the right gear can make a huge difference.",
  },
];


  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <Head>
        <title>Baby Bliss Blogs | Baby Products Tips & Guides</title>
        <meta
          name="description"
          content="Read expert blogs and guides on baby products, newborn care, and parenting tips."
        />
      </Head>

      <div className="flex max-w-7xl mx-auto px-4 py-12">
        {/* LEFT SIDEBAR PRODUCTS */}
        <div className="hidden lg:block w-1/5 pr-4">
          <div className="sticky top-4">
            <div id="left-amazon" className="bg-white border p-3 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Baby Products
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {products.slice(0, 7).map((product, i) => (
                  <a
                    key={`left-${product.id || i}`} // ✅ Added key
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                  >
                    <div className="h-32 w-full flex items-center justify-center bg-white">
                      <img
                        src={`/images/${product.image}`}
                        alt={product.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <p className="text-xs mt-2 font-medium text-gray-700 text-center px-1 line-clamp-2">
                      {product.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-orange-500">
            Baby Bliss Blogs
          </h1>
          <ul className="space-y-6">
            {blogPosts.map((blog) => (
              <li key={blog.slug} className="border-b pb-4">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-xl font-semibold text-blue-700 hover:underline"
                >
                  {blog.title}
                </Link>
                <p className="text-gray-600 mt-1">{blog.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDEBAR PRODUCTS */}
        <div className="hidden lg:block w-1/5 pl-4">
          <div className="sticky top-4">
            <div id="right-amazon" className="bg-white border p-3 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Baby Products
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {products.slice(7, 14).map((product, i) => (
                  <a
                    key={`right-${product.id || i}`} // ✅ Added key
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                  >
                    <div className="h-32 w-full flex items-center justify-center bg-white">
                      <img
                        src={`/images/${product.image}`}
                        alt={product.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <p className="text-xs mt-2 font-medium text-gray-700 text-center px-1 line-clamp-2">
                      {product.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
