"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/Footer"; // adjust path if needed
import Script from "next/script";

export default function Blogs() {
    // Array of blog posts
    const blogPosts = [
        {
            title: "Newborn Baby Clothes: What You Need to Know in 2025",
            slug: "newborn-baby-clothes",
            description: "Complete guide to newborn baby clothes, essentials, safety tips, brands, and care instructions."
        },
        {
            title: "10 Best Baby Diapers: Absorbency, Comfort & Eco‑friendly Picks",
            slug: "best-baby-diapers",
            description: "Explore the top diapers for babies, including eco-friendly and comfortable options."
        },
        {
            title: "Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider",
            slug: "breastfeeding-vs-formula",
            description: "Learn about breastfeeding and formula feeding, and decide what’s best for your baby."
        },
        {
            title: "5 Ways to Calm a Crying Baby: Tested and Soothing Remedies",
            slug: "calm-crying-baby",
            description: "Effective tips to calm your baby when crying, backed by expert advice."
        },
        {
            title: "How to Make Your Home Baby-Safe: A Complete Baby‑Proofing Guide",
            slug: "baby-proofing-guide",
            description: "Step-by-step guide to make your home safe for newborns and toddlers."
        },
        {
            title: "10 Best Lullabies to Help Your Baby Sleep Peacefully",
            slug: "best-baby-lullabies",
            description: "Discover soothing lullabies that help your baby sleep better at night."
        },
        {
            title: "5 Milestones to Expect in Your Baby’s First Year",
            slug: "baby-first-year-milestones",
            description: "Track your baby’s development with these important first-year milestones."
        },
        {
            title: "How to Swaddle Your Baby: Step-by-Step Techniques for Comfort",
            slug: "how-to-swaddle",
            description: "Learn proper swaddling techniques to keep your baby comfortable and secure."
        },
        {
            title: "What to Expect the First 24 Hours After Giving Birth",
            slug: "first-24-hours-after-birth",
            description: "Guide for new parents on what happens in the first 24 hours after birth."
        },
        {
            title: "Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance",
            slug: "self-care-for-moms",
            description: "Important self-care tips for stay-at-home moms to maintain health and balance."
        },
        {
            title: "Baby Diapers: Absorbency, Comfort , disposable-bags",
            slug: "disposable-bags-and-diaper-liners",
            description: "Important self-care tips for stay-at-home moms to maintain health and balance."
        }
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
            <Script id="custom-ad-script" strategy="afterInteractive">
                {`
          (function(xlu){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = xlu || {};
            s.src = "//weepy-attack.com/b.XPVqsBdWGtl/0yYfWccv/eekmi9HuaZ_UslHk_PuTcYT2/MBzMQi3eNuTLAztINmjpYTzQNnDjci1pMYQg";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
          })({})
        `}
            </Script>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-orange-500">Baby Bliss Blogs</h1>

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
            <Footer />
        </div>
    );
}
