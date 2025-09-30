"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";

export default function DueDateCalculatorPage() {
    const [lmp, setLmp] = useState(""); // Last menstrual period
    const [cycleLength, setCycleLength] = useState(28); // Optional: customize cycle length
    const [dueDate, setDueDate] = useState(null);
    const [weeksPregnant, setWeeksPregnant] = useState(null);

    const calculateDueDate = () => {
        if (!lmp) return;

        const lmpDate = new Date(lmp);
        const lutealPhase = 14; // typical luteal phase
        const ovulationDate = new Date(lmpDate);
        ovulationDate.setDate(lmpDate.getDate() + (cycleLength - lutealPhase));

        const due = new Date(ovulationDate);
        due.setDate(ovulationDate.getDate() + 38 * 7); // 38 weeks from ovulation

        const today = new Date();
        const diff = today.getTime() - lmpDate.getTime();
        const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

        setDueDate(due.toDateString());
        setWeeksPregnant(weeks);
    };

    // Suggested links data
    const suggestedLinks = [
        { title: "Pregnancy Week-by-Week", href: "/pregnancy-week-wise/pregnancy-week-1" },
        { title: "Motherhood Month 1", href: "/motherhood-blogs/Motherhood-month-1" },
        { title: "Newborn Baby Clothes", href: "/blogs/newborn-baby-clothes" },
        { title: "Breastfeeding vs Formula", href: "/blogs/breastfeeding-vs-formula" },
        { title: "Baby Names Search", href: "/baby-names/baby-names-search" },
    ];
    const faqData = [
        {
            question: "How accurate is a due date calculator?",
            answer: "A due date calculator gives an estimate based on your last menstrual period, conception date, or ultrasound. It’s generally accurate within a week for most pregnancies, but only a healthcare provider can confirm the exact gestational age."
        },
        {
            question: "Can my cycle length affect my due date?",
            answer: "Yes! Standard calculators assume a 28-day cycle, but if your cycle is shorter or longer, adjusting it can give a more accurate estimate. Ovulation typically occurs around 14 days before your next period, so knowing your cycle helps."
        },
        {
            question: "What if I know my exact conception date?",
            answer: "If you know the day of conception, you can count 38 weeks from that date to estimate your due date. However, sperm can survive several days, so conception may not have happened exactly on that day."
        },
        {
            question: "How does ultrasound help determine due date?",
            answer: "An early ultrasound, usually in the first trimester, measures your baby’s size to estimate gestational age. This method is often more precise than using LMP, especially if your cycles are irregular."
        },
        {
            question: "Do twins or multiples have a different due date?",
            answer: "Yes, twins or multiples often arrive earlier than single babies. While you can use the standard calculator, your doctor may adjust the expected delivery date based on the type of multiple pregnancy."
        },
        {
            question: "Can IVF pregnancies have a precise due date?",
            answer: "Absolutely. IVF allows you to know the exact date of fertilization or embryo transfer, making it possible to calculate an accurate due date. Day-3 and day-5 embryos have slightly different timelines."
        }
    ];
    return (
        <div className="bg-white text-black min-h-screen">
            <Head>
                <title>Pregnancy Due Date Calculator | Belly Buds</title>
                <meta
                    name="description"
                    content="Easily calculate your pregnancy due date using LMP, conception date, IVF, or ultrasound. Learn how far along you are, and explore week-by-week pregnancy and baby care guides."
                />
            </Head>

            <Header />

            <section className="container mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-8">
                {/* Left/Main Content */}
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center md:text-left">
                        Pregnancy Due Date Calculator
                    </h1>

                    <p className="text-gray-700 mb-6">
                        Wondering when your little one will arrive? Use this calculator to estimate your due date based on the first day of your last menstrual period (LMP) or your conception date. You can also adjust for your average menstrual cycle length to make the estimate more accurate. This tool helps you track your pregnancy week-by-week and plan for prenatal appointments, shopping, and preparation for your baby’s arrival.
                    </p>

                    <div className="bg-orange-50 p-6 rounded-xl shadow-md space-y-4">
                        <label className="block text-gray-700 font-medium">
                            Last Menstrual Period (LMP):
                        </label>
                        <input
                            type="date"
                            value={lmp}
                            onChange={(e) => setLmp(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        />

                        <label className="block text-gray-700 font-medium">
                            Cycle Length (days):
                        </label>
                        <input
                            type="number"
                            value={cycleLength}
                            onChange={(e) => setCycleLength(Number(e.target.value))}
                            min={20}
                            max={40}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        />

                        <button
                            onClick={calculateDueDate}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                            Calculate
                        </button>
                    </div>

                    {dueDate && (
                        <div className="mt-6 p-4 bg-white border border-orange-200 rounded-lg text-center space-y-2 shadow-md">
                            <p className="text-lg font-semibold text-gray-800">
                                Estimated Due Date: <span className="text-orange-600">{dueDate}</span>
                            </p>
                            {weeksPregnant !== null && (
                                <p className="text-gray-700">
                                    You are approximately <strong>{weeksPregnant} weeks</strong> pregnant.<br />
                                    {40 - weeksPregnant > 0
                                        ? `${40 - weeksPregnant} weeks remaining`
                                        : "You may be close to delivery!"}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Additional Pregnancy Info */}
                    <div className="mt-10 bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
                        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Understanding Different Due Date Methods</h2>

                        <p className="text-gray-700">
                            <strong>Based on LMP:</strong> This is the most common method. Your pregnancy is calculated from the first day of your last menstrual period, assuming a standard 28-day cycle.
                        </p>

                        <p className="text-gray-700">
                            <strong>By Conception:</strong> If you know the exact day of conception, you can estimate your due date by counting 38 weeks from that day. Keep in mind conception may not always happen on the day of intercourse due to sperm survival.
                        </p>

                        <p className="text-gray-700">
                            <strong>Using Ultrasound:</strong> An early ultrasound, usually in the first trimester, can measure your baby and confirm gestational age. This is especially useful if your menstrual cycle is irregular.
                        </p>

                        <p className="text-gray-700">
                            <strong>IVF Pregnancies:</strong> For those who conceived via IVF, the date of fertilization or embryo transfer can be used to calculate an accurate due date. Day-3 and day-5 embryos have slightly different calculations.
                        </p>

                        <p className="text-gray-700">
                            <strong>Twins or Multiples:</strong> Multiple pregnancies often arrive earlier than singletons. You can still use LMP or conception-based calculators, but expect possible adjustments from your doctor.
                        </p>

                        <p className="text-gray-700">
                            Remember, these calculators provide estimates. Only your healthcare provider can confirm your baby’s due date and track your pregnancy accurately.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold mb-6 text-orange-600">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                                    <p className="font-medium text-gray-800">{faq.question}</p>
                                    <p className="text-gray-700 mt-1">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Suggested Links */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Suggested Links</h2>
                        <ul className="space-y-2">
                            {suggestedLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-orange-500 hover:underline font-medium"
                                    >
                                        {link.title} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right/Sidebar Advertisement */}
                <div className="hidden md:block">
                    <div className="sticky top-28 space-y-6">
                        <div className="border rounded-lg shadow p-4 bg-white">
                            <h3 className="text-center text-gray-500 uppercase font-bold text-sm mb-4">ADVERTISEMENT</h3>
                            <AdBanner />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
