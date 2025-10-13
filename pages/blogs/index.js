"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Blogs() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (you can remove this if fetching real API)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    { title: "Newborn Baby Clothes: What You Need to Know in 2025", slug: "newborn-baby-clothes", description: "Complete guide to newborn baby clothes, essentials, safety tips, brands, and care instructions." },
    { title: "10 Best Baby Diapers: Absorbency, Comfort & Eco-friendly Picks", slug: "best-baby-diapers", description: "Explore the top diapers for babies, including eco-friendly and comfortable options." },
    { title: "Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider", slug: "breastfeeding-vs-formula", description: "Learn about breastfeeding and formula feeding, and decide what’s best for your baby." },
    { title: "5 Ways to Calm a Crying Baby: Tested and Soothing Remedies", slug: "calm-crying-baby", description: "Effective tips to calm your baby when crying, backed by expert advice." },
    { title: "How to Make Your Home Baby-Safe: A Complete Baby-Proofing Guide", slug: "baby-proofing-guide", description: "Step-by-step guide to make your home safe for newborns and toddlers." },
    { title: "10 Best Lullabies to Help Your Baby Sleep Peacefully", slug: "best-baby-lullabies", description: "Discover soothing lullabies that help your baby sleep better at night." },
    { title: "5 Milestones to Expect in Your Baby’s First Year", slug: "baby-first-year-milestones", description: "Track your baby’s development with these important first-year milestones." },
    { title: "How to Swaddle Your Baby: Step-by-Step Techniques for Comfort", slug: "how-to-swaddle", description: "Learn proper swaddling techniques to keep your baby comfortable and secure." },
    { title: "What to Expect the First 24 Hours After Giving Birth", slug: "first-24-hours-after-birth", description: "Guide for new parents on what happens in the first 24 hours after birth." },
    { title: "Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance", slug: "self-care-for-moms", description: "Important self-care tips for stay-at-home moms to maintain health and balance." },
    { title: "Baby Diapers: Absorbency, Comfort, Disposable Bags & Diaper Liners", slug: "disposable-bags-and-diaper-liners", description: "Guide on disposable diaper bags and liners for a cleaner, easier diaper-changing routine." },
    { title: "Top 10 Must-Have Baby Gear Essentials for New Parents", slug: "baby-gear-essentials", description: "Bringing a newborn home can be overwhelming, but having the right gear can make a huge difference." },
    { title: "Is Bad Parenting Based on a True Story?", slug: "is-bad-parenting-based-on-a-true-story", description: "A compassionate, evidence-informed long-form guide exploring whether portrayals of bad parenting reflect reality. Includes practical do’s & don’ts, a 6-week recovery plan, daily tools, and expanded FAQs." },
    
    { title: "Parental Opt-Out Rights: An Overview", slug: "parental-opt-out-rights-in-education", description: "Parental opt-out rights refer to the legal authority of parents to exempt their children from specific parts of their public school education that they find objectionable. This can include certain curricula, standardized tests, health services, and data collection activities. The concept is rooted in the fundamental belief that parents have the primary role in directing the upbringing and education of their children." },
    { title: "Parenting Styles: The Blueprint for Child Development", slug: "parenting-styles", description: "Your parenting style is more than just a collection of habits—it's the emotional climate you create and the strategic framework you use to raise your child. Developed from the groundbreaking work of psychologist Diana Baumrind in the 1960s and later expanded by others, parenting styles are categorized based on two crucial dimensions: responsiveness (warmth and support) and demandingness (control and expectations)." }
  ];
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <Head>
        <title>Belly Buds Blogs | Baby Tips & Guides</title>
        <meta
          name="description"
          content="Read expert blogs and guides on baby products, newborn care, and parenting tips."
        />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-10 text-orange-500 text-center">
          Parenting & Baby Care
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image automatically from slug */}
              <div className="relative h-48 w-full">
                <Image
                  src={`/images/blog-${blog.slug}.jpg`}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-xl font-semibold text-blue-700 hover:underline"
                >
                  {blog.title}
                </Link>
                <p className="text-gray-600 mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
