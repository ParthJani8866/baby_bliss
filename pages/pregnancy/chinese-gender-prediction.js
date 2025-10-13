"use client";

import { useState } from "react";
import Head from "next/head";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import SocialShare from "../components/SocialShare";
import Link from "next/link";
import Image from "next/image";

export default function ChineseGenderPredictionPage() {
    const [age, setAge] = useState("");
    const [month, setMonth] = useState("");
    const [prediction, setPrediction] = useState(null);

    // Simplified Chinese Gender Chart (based on lunar age + month)
    const chineseGenderChart = {
        18: ["Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl"],
        19: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        20: ["Boy", "Girl", "Boy", "Boy", "Girl", "Girl", "Boy", "Boy", "Girl", "Girl", "Boy", "Girl"],
        21: ["Girl", "Boy", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Girl", "Boy"],
        22: ["Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl"],
        23: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        24: ["Boy", "Girl", "Girl", "Boy", "Boy", "Girl", "Girl", "Boy", "Boy", "Girl", "Girl", "Boy"],
        25: ["Girl", "Boy", "Girl", "Girl", "Boy", "Boy", "Girl", "Girl", "Boy", "Boy", "Girl", "Boy"],
        26: ["Boy", "Boy", "Girl", "Girl", "Boy", "Girl", "Boy", "Girl", "Girl", "Boy", "Boy", "Girl"],
        27: ["Girl", "Boy", "Boy", "Girl", "Boy", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        28: ["Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl"],
        29: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        30: ["Boy", "Girl", "Boy", "Boy", "Girl", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl"],
        31: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        32: ["Boy", "Boy", "Girl", "Boy", "Girl", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Boy"],
        33: ["Girl", "Girl", "Boy", "Girl", "Boy", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Girl"],
        34: ["Boy", "Boy", "Girl", "Boy", "Girl", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Boy"],
        35: ["Girl", "Girl", "Boy", "Girl", "Boy", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Girl"],
        36: ["Boy", "Boy", "Girl", "Boy", "Girl", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Boy"],
        37: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        38: ["Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl"],
        39: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        40: ["Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl"],
        41: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        42: ["Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl"],
        43: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
        44: ["Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl"],
        45: ["Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy", "Girl", "Boy"],
    };


    const calculatePrediction = () => {
        const ageNum = parseInt(age);
        const monthNum = parseInt(month);

        if (!ageNum || !monthNum) {
            alert("Please enter your age and select the month of conception.");
            return;
        }

        const row = chineseGenderChart[ageNum];
        if (row) {
            const gender = row[monthNum - 1];
            setPrediction(gender);
        } else {
            setPrediction("Age out of range (18–30).");
        }
    };

    const faqData = [
        {
            question: "How does the Chinese Gender Prediction Calendar work?",
            answer:
                "It predicts a baby's gender based on the mother’s lunar age and the lunar month of conception. It’s based on an ancient chart discovered in China centuries ago.",
        },
        {
            question: "Is the Chinese Gender Prediction Chart accurate?",
            answer:
                "It’s considered a fun tool for entertainment purposes and not a scientifically proven method. However, many users report around 70% accuracy based on anecdotal results.",
        },
        {
            question: "What do I need to use the chart?",
            answer:
                "You need the mother’s age at conception and the month when conception likely occurred. The chart will then estimate whether you’re having a boy or a girl.",
        },
        {
            question: "Does it use lunar or Gregorian dates?",
            answer:
                "Traditionally, it uses the Chinese lunar calendar. This version simplifies it using your current age and month of conception for easy use.",
        },
    ];

    const suggestedLinks = [
        { title: "Pregnancy Week-by-Week", href: "/pregnancy-week-wise/pregnancy-week-1" },
        { title: "Pregnancy Due Date Calculator", href: "/pregnancy/pregnancy-due-date-calculator" },
        { title: "Ovulation Calculator", href: "/ovulation-calculator" },
        { title: "Baby Names Finder", href: "/baby-names/baby-names-search" },
    ];

    return (
        <div className="bg-white text-black min-h-screen">
            <NextSeo
                title="Chinese Gender Prediction Calendar 2025 | Baby Boy or Girl Chart"
                description="Try the Chinese Gender Prediction Calendar 2025! Estimate your baby's gender using your age and conception month with this ancient Chinese gender chart."
                canonical="https://baby-toys.shop/chinese-gender-prediction"
                openGraph={{
                    url: "https://baby-toys.shop/chinese-gender-prediction",
                    title: "Chinese Gender Prediction Calendar 2025 | Baby Boy or Girl Chart",
                    description:
                        "Use the ancient Chinese Gender Chart to predict if your baby will be a boy or girl based on lunar age and conception month.",
                    images: [
                        {
                            url: "https://i.pinimg.com/736x/28/3c/54/283c54f04fb9ecdb9769d7d4cc87279e.jpg",
                            width: 800,
                            height: 600,
                            alt: "Chinese Gender Prediction Calendar",
                        },
                    ],
                    siteName: "Baby Toys Shop",
                }}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "Chinese Gender Prediction, Chinese Gender Calendar, Baby Gender Predictor, Boy or Girl Chart, Pregnancy Tools, Baby Gender Calculator",
                    },
                ]}
            />

            <BreadcrumbJsonLd
                itemListElements={[
                    { position: 1, name: "Home", item: "https://baby-toys.shop" },
                    { position: 2, name: "Pregnancy Tools", item: "https://baby-toys.shop/pregnancy-tools" },
                    { position: 3, name: "Chinese Gender Prediction", item: "https://baby-toys.shop/chinese-gender-prediction" },
                ]}
            />

            <Head>
                <title>Chinese Gender Prediction Calendar 2025</title>
            </Head>

            <Header />

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 px-6 mt-4">
                <Link href="/" className="hover:text-orange-500">
                    Home
                </Link>{" "}
                &gt;{" "}
                <Link href="/pregnancy-tools" className="hover:text-orange-500">
                    Pregnancy Tools
                </Link>{" "}
                &gt; <span className="text-orange-600 font-medium">Chinese Gender Prediction</span>
            </nav>

            <section className="container mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    <div className="my-4 flex flex-col items-center gap-4">
                        <div className="w-full max-w-md h-90 relative">
                            <Image
                                src="/images/ChineseGenderPredictionPage.jpg"
                                alt="Chinese Gender Prediction Calendar"
                                width={400}
                                height={300}
                                className="rounded object-cover"
                            />
                        </div>
                        <SocialShare
                            imageUrl="https://i.pinimg.com/736x/28/3c/54/283c54f04fb9ecdb9769d7d4cc87279e.jpg"
                            title="Chinese Gender Prediction Calendar"
                        />
                    </div>

                    <h1 className="text-3xl font-bold text-orange-600 text-center md:text-left">
                        Chinese Gender Prediction Calendar 2025
                    </h1>
                    <p className="text-gray-700">
                        The Chinese Gender Prediction Calendar is an ancient chart believed to predict a baby’s gender based on the
                        mother’s lunar age and conception month. Although it’s not scientifically proven, it’s a fun and popular way
                        for expecting parents to guess their baby’s gender.
                    </p>

                    <div className="bg-orange-50 p-6 rounded-xl shadow-md space-y-4">
                        <label className="block text-gray-700 font-medium">Mother’s Age at Conception:</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            min={18}
                            max={45}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        />

                        <label className="block text-gray-700 font-medium">Month of Conception:</label>
                        <select
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        >
                            <option value="">Select Month</option>
                            {[
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December",
                            ].map((m, idx) => (
                                <option key={idx} value={idx + 1}>
                                    {m}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={calculatePrediction}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                            Predict Baby Gender
                        </button>
                    </div>

                    {prediction && (
                        <div className="mt-6 text-center">
                            <h2 className="text-2xl font-semibold text-orange-600">
                                Predicted Gender: <span className="capitalize">{prediction}</span>
                            </h2>
                        </div>
                    )}

                    {/* FAQs */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                                    <p className="font-medium text-gray-800">{faq.question}</p>
                                    <p className="text-gray-700 mt-1">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Internal SEO Links */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Explore More Pregnancy Tools</h2>
                        <ul className="space-y-2">
                            {suggestedLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-orange-500 hover:underline font-medium">
                                        {link.title} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="hidden md:block">
                    <div className="sticky top-28 space-y-6">
                        <div className="border rounded-lg shadow p-4 bg-white">
                            <h3 className="text-center text-gray-500 uppercase font-bold text-sm mb-4">ADVERTISEMENT</h3>
                            <AdBanner />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: { "@type": "Answer", text: faq.answer },
                        })),
                    }),
                }}
            />

            <Footer />
        </div>
    );
}
