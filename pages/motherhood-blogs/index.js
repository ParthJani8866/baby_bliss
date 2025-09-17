"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function MotherhoodBlogs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const motherhoodPosts = [
    {
      month: 1,
      title: "Month 1 — Surviving the First 30 Days",
      slug: "Motherhood-month-1",
      description:
        "Practical tips, feeding schedules, growth milestones, real mom stories, and checklists for the first month of motherhood."
    },
    {
      month: 2,
      title: "Month 2 — Smiles & Early Connections",
      slug: "Motherhood-month-2",
      description:
        "Month 2 focuses on first smiles, bonding, and early growth milestones."
    },
    {
      month: 3,
      title: "Month 3 — Social Smiles & Tummy Time",
      slug: "Motherhood-month-3",
      description:
        "Month 3 emphasizes social interaction, improved motor skills, and strengthening neck muscles."
    },
    {
      month: 4,
      title: "Month 4 — Strengthening Muscles & Interaction",
      slug: "Motherhood-month-4",
      description:
        "Focus on rolling, better head control, and early communication cues."
    },
    {
      month: 5,
      title: "Month 5 — Rolling, Sitting & Exploring",
      slug: "Motherhood-month-5",
      description:
        "Babies start exploring more, rolling independently, and sitting with support."
    },
    {
      month: 6,
      title: "Month 6 — First Solids & Responsive Play",
      slug: "Motherhood-month-6",
      description:
        "Introduction of solids, improved grasping, and interactive play."
    },
    {
      month: 7,
      title: "Month 7 — Sitting Confidently & Babbling",
      slug: "Motherhood-month-7",
      description:
        "Babies sit steadily, babble more, and respond socially."
    },
    {
      month: 8,
      title: "Month 8 — Crawling, Grasping & Social Play",
      slug: "Motherhood-month-8",
      description:
        "Crawling begins, fine motor skills improve, and social interactions deepen."
    },
    {
      month: 9,
      title: "Month 9 — Standing, Stronger Communication & Play",
      slug: "Motherhood-month-9",
      description:
        "Babies pull to stand, understand more words, and enjoy active play."
    },
    {
      month: 10,
      title: "Month 10 — First Words, Peek-a-Boo & Mobility",
      slug: "Motherhood-month-10",
      description:
        "Early words emerge, mobility increases, and interactive games like peek-a-boo are fun."
    },
    {
      month: 11,
      title: "Month 11 — Early Walking & Playful Independence",
      slug: "Motherhood-month-11",
      description:
        "Babies take first steps, show independence, and explore surroundings safely."
    },
    {
      month: 12,
      title: "Month 12 — First Birthday, Walking & Talking",
      slug: "Motherhood-month-12",
      description:
        "Celebrate the first birthday; walking and talking skills develop rapidly."
    }
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <Head>
        <title>Motherhood Blogs | Baby Bliss</title>
        <meta name="description" content="Explore motherhood month by month – a complete guide from newborn care to toddlerhood. Motherhood Month 1: newborn care, postpartum recovery, breastfeeding struggles, and sleep patterns. Motherhood Month 2: colic relief, bonding tips, postpartum emotions, and daily mom routines. Motherhood Month 3: baby growth spurts, tummy time milestones, new motherhood challenges, and self-care. Motherhood Month 4: first laughs, sleep regression, teething signs, and motherhood adjustments. Motherhood Month 5: feeding tips, baby development milestones, motherhood self-care, and emotional health. Motherhood Month 6: introducing solid foods, crawling preparation, balancing motherhood with household life. Motherhood Month 7: teething remedies, separation anxiety, and playful motherhood activities. Motherhood Month 8: mobility changes, motherhood patience, and sleep schedule struggles. Motherhood Month 9: interactive play ideas, new words, and advanced motherhood bonding. Motherhood Month 10: pulling up, standing practice, and motherhood energy management. Motherhood Month 11: first steps, baby communication, and motherhood routines. Motherhood Month 12: first birthday planning, toddler transitions, and reflections on the first year of motherhood. Plus real mom stories, postpartum recovery, mental health support, feeding schedules, sleep training, diapering, bonding, and practical parenting tips for every stage of motherhood month by month."></meta>

      </Head>

      <div className="flex max-w-7xl mx-auto px-4 py-12">
        {/* LEFT SIDEBAR PRODUCTS */}
        <div className="hidden lg:block w-1/5 pr-4">
          <div className="sticky top-4">
            <div className="bg-white border p-3 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Baby Products
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {products.slice(0, 7).map((product, i) => (
                  <a
                    key={`left-${product.id || i}`}
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
            Month-by-Month Motherhood Blogs
          </h1>
          <ul className="space-y-6">
            {motherhoodPosts.map((blog) => (
              <li key={blog.slug} className="border-b pb-4">
                <Link
                  href={`/motherhood-blogs/${blog.slug}`}
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
            <div className="bg-white border p-3 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Baby Products
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {products.slice(7, 14).map((product, i) => (
                  <a
                    key={`right-${product.id || i}`}
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
