"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";

export default function PregnancyWeightGainCalculator() {
    const [week, setWeek] = useState(20);
    const [isTwins, setIsTwins] = useState(false);
    const [heightFeet, setHeightFeet] = useState(5);
    const [heightInches, setHeightInches] = useState(6);
    const [preWeight, setPreWeight] = useState(120);
    const [currentWeight, setCurrentWeight] = useState(130);

    const [statusMessage, setStatusMessage] = useState("");
    const [recommendedGain, setRecommendedGain] = useState(null);
    const [weeklyChart, setWeeklyChart] = useState([]);

    const calculateWeightGain = () => {
        const heightInMeters =
            (parseInt(heightFeet) * 12 + parseInt(heightInches)) * 0.0254;
        const bmi = preWeight / (heightInMeters * heightInMeters);

        let minGain, maxGain;

        if (!isTwins) {
            // singleton pregnancy
            if (bmi < 18.5) {
                minGain = 28;
                maxGain = 40;
            } else if (bmi < 25) {
                minGain = 25;
                maxGain = 35;
            } else if (bmi < 30) {
                minGain = 15;
                maxGain = 25;
            } else {
                minGain = 11;
                maxGain = 20;
            }
        } else {
            // twins
            minGain = 37;
            maxGain = 54;
        }

        const gained = currentWeight - preWeight;
        let message = "";
        if (gained < minGain) {
            message = "You are gaining below recommended weight. Consider discussing nutrition with your doctor.";
        } else if (gained > maxGain) {
            message = "You are gaining above recommended weight. Consider discussing nutrition with your doctor.";
        } else {
            message = "Your weight gain is within the recommended range. Keep it up!";
        }

        setStatusMessage(message);
        setRecommendedGain({ minGain, maxGain, gained });

        // Generate weekly chart for 40 weeks
        const chart = [];
        for (let w = 1; w <= 40; w++) {
            const minWeekGain = (minGain / 40) * w;
            const maxWeekGain = (maxGain / 40) * w;
            chart.push({
                week: w,
                minWeekGain: minWeekGain.toFixed(1),
                maxWeekGain: maxWeekGain.toFixed(1),
            });
        }

        const weeklyData = chart.map((week) => {
            let cumulativeMin = currentWeight;
            let cumulativeMax = currentWeight;
            cumulativeMin += parseFloat(week.minWeekGain); // add current week's min
            cumulativeMax += parseFloat(week.maxWeekGain); // add current week's max

            week.cumulativeMin = cumulativeMin.toFixed(1); // optional: format to 1 decimal
            week.cumulativeMax = cumulativeMax.toFixed(1);
            return {
                ...week,
                cumulativeMin,
                cumulativeMax,
            };
        });
        setWeeklyChart(weeklyData);
    };

    // Suggested links
    const suggestedLinks = [
        { title: "Pregnancy Week-by-Week", href: "/pregnancy-week-wise/pregnancy-week-1" },
        { title: "Pregnancy Due Date Calculator", href: "/pregnancy/ovulation-calculator" },
        { title: "Motherhood Month 1", href: "/motherhood-blogs/Motherhood-month-1" },
        { title: "Baby Nutrition Tips", href: "/blogs/baby-nutrition" },
    ];

    const faqData = [
        {
            question: "How much weight should I gain during pregnancy?",
            answer:
                "Recommended weight gain depends on your BMI before pregnancy and whether you are carrying twins or singletons. Consult your doctor for personalized advice.",
        },
        {
            question: "Why does BMI matter for weight gain?",
            answer:
                "BMI helps estimate your body composition. Women with lower BMI are generally advised to gain more weight, and women with higher BMI gain less, to maintain a healthy pregnancy.",
        },
        {
            question: "What if I'm gaining too much or too little?",
            answer:
                "Gaining too little may affect baby’s growth, while gaining too much may cause complications. Speak to your healthcare provider for guidance.",
        },
        {
            question: "Can I track weekly weight gain?",
            answer:
                "Yes! The weekly chart helps you monitor weight gain and compare it to recommended ranges for each week of pregnancy.",
        },
    ];

    return (
        <div className="bg-white text-black min-h-screen">
            <Head>
                <title>Pregnancy Weight Gain Calculator | Belly Buds</title>
                <meta
                    name="description"
                    content="Calculate your pregnancy weight gain and see if it's within the recommended range. Track weekly progress and explore pregnancy tips and resources."
                />
            </Head>

            <Header />

            <section className="container mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center md:text-left">
                        Pregnancy Weight Gain Calculator
                    </h1>

                    <div className="bg-orange-50 p-6 rounded-xl shadow-md space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block font-medium text-gray-700">Current Pregnancy Week:</label>
                                <input
                                    type="number"
                                    value={week}
                                    onChange={(e) => setWeek(Number(e.target.value))}
                                    min={1}
                                    max={40}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Pregnant with Twins?</label>
                                <select
                                    value={isTwins}
                                    onChange={(e) => setIsTwins(e.target.value === "true")}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                >
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Height (Feet):</label>
                                <input
                                    type="number"
                                    value={heightFeet}
                                    onChange={(e) => setHeightFeet(Number(e.target.value))}
                                    min={4}
                                    max={7}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Height (Inches):</label>
                                <input
                                    type="number"
                                    value={heightInches}
                                    onChange={(e) => setHeightInches(Number(e.target.value))}
                                    min={0}
                                    max={11}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Weight Before Pregnancy (lbs):</label>
                                <input
                                    type="number"
                                    value={preWeight}
                                    onChange={(e) => setPreWeight(Number(e.target.value))}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Current Weight (lbs):</label>
                                <input
                                    type="number"
                                    value={currentWeight}
                                    onChange={(e) => setCurrentWeight(Number(e.target.value))}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                        </div>

                        <button
                            onClick={calculateWeightGain}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
                        >
                            Calculate
                        </button>
                    </div>


                    {/* Result */}
                    {recommendedGain && (
                        <div className="mt-6 p-4 border border-orange-200 rounded-lg shadow-md text-center">
                            <p
                                className={`text-lg font-medium ${recommendedGain.gained >= recommendedGain.minGain &&
                                    recommendedGain.gained <= recommendedGain.maxGain
                                    ? "text-green-600"
                                    : "text-red-600"
                                    }`}
                            >
                                {statusMessage}
                            </p>
                            <p className="mt-2 text-gray-700">
                                You have gained <strong>{recommendedGain.gained} lbs</strong>. Recommended range: {recommendedGain.minGain} - {recommendedGain.maxGain} lbs.
                            </p>
                        </div>
                    )}

                    {/* Weekly Chart */}
                    {weeklyChart.length > 0 && (
                        <div className="mt-8 overflow-x-auto">
                            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Weekly Weight Gain Chart</h2>
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-orange-100">
                                        <th className="border border-gray-300 px-2 py-1">Week</th>
                                        <th className="border border-gray-300 px-2 py-1">Min Gain (lbs)</th>
                                        <th className="border border-gray-300 px-2 py-1">Max Gain (lbs)</th>
                                        <th className="border border-gray-300 px-2 py-1">Min - Max (lbs)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {weeklyChart.map((week) => (
                                        <tr key={week.week}>
                                            <td className="border border-gray-300 px-2 py-1 text-center">
                                                Pregnancy Week {week.week}
                                            </td>
                                            <td className="border border-gray-300 px-2 py-1 text-center">
                                                {week.minWeekGain}
                                            </td>
                                            <td className="border border-gray-300 px-2 py-1 text-center">
                                                {week.maxWeekGain}
                                            </td>
                                            <td className="border border-gray-300 px-2 py-1 text-center">
                                                {parseFloat(week.cumulativeMin).toFixed(1)} - {parseFloat(week.cumulativeMax).toFixed(1)}

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* FAQ */}
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
                                    <Link href={link.href} className="text-orange-500 hover:underline font-medium">
                                        {link.title} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Advertisement Sidebar */}
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
