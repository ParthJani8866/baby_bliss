"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/Footer";
import Script from "next/script";

export default function Blogs() {
    const blogPosts = [
        {
            title: "Newborn Baby Clothes: What You Need to Know in 2025",
            slug: "newborn-baby-clothes",
            description: "Complete guide to newborn baby clothes, essentials, safety tips, brands, and care instructions."
        },
        {
            title: "10 Best Baby Diapers: Absorbency, Comfort & Eco-friendly Picks",
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
            title: "How to Make Your Home Baby-Safe: A Complete Baby-Proofing Guide",
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

            {/* Ad scripts */}
            <Script type='text/javascript' src='//pl27553777.revenuecpmgate.com/df/af/59/dfaf59384b36255eb7c96260e0fb4db8.js'></Script>
            <Script async data-cfasync="false" src="//geographicalpaperworkmovie.com/14557498d6b14f90b64bcba955b87ea1/invoke.js"></Script>

            <div className="flex max-w-7xl mx-auto px-4 py-12">
                {/* LEFT SIDEBAR AD */}
                <div className="hidden lg:block w-1/5 pr-4">
                    <div className="sticky top-4">
                        <div id="left-ad" className="bg-gray-100 p-4 text-center shadow-md">
                            <p className="font-bold text-sm mb-2">Sponsored</p>
                            <div id="left-ad-container">
                                <div id="container-14557498d6b14f90b64bcba955b87ea1"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="flex-1 max-w-4xl">
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

                {/* RIGHT SIDEBAR AD */}
                <div className="hidden lg:block w-1/5 pl-4">
                    <div className="sticky top-4">
                        <div id="right-ad" className="bg-gray-100 p-4 text-center shadow-md">
                            <p className="font-bold text-sm mb-2">Sponsored</p>
                            <div id="right-ad-container">
                                <div id="container-14557498d6b14f90b64bcba955b87ea1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
