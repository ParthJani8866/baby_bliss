"use client";

import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import Link from "next/link";
import SocialShare from "../components/SocialShare";
import Image from "next/image";

export default function OvulationCalculatorPage() {
    const [lmp, setLmp] = useState("");
    const [cycleLength, setCycleLength] = useState(28);
    const [ovulationData, setOvulationData] = useState(null);
    const [futureCycles, setFutureCycles] = useState([]);
    const [calendarMonth, setCalendarMonth] = useState(null);

    const faqData = [
        {
            question: "How accurate is ovulation prediction?",
            answer: "Ovulation calculators provide an estimate based on your cycle length and LMP. Actual ovulation may vary, especially if your cycle is irregular. Combining with ovulation tests or temperature tracking improves accuracy."
        },
        {
            question: "Can I get pregnant outside my fertile window?",
            answer: "While the highest probability of conception is during the fertile window, pregnancy is still possible a few days before or after ovulation due to sperm viability."
        },
        {
            question: "How do I use this for pregnancy planning?",
            answer: "Enter your LMP and average cycle length. The tool will calculate your ovulation window, most probable ovulation day, intercourse window, pregnancy test date, and estimated due date if pregnant."
        },
        {
            question: "Does cycle length affect due date?",
            answer: "Yes. A longer or shorter cycle shifts ovulation and therefore affects the estimated due date. Adjusting cycle length makes predictions more accurate."
        },
        {
            question: "Can IVF or assisted conception use this tool?",
            answer: "Yes, but IVF has precise dates. You can enter embryo transfer or fertilization date as your 'LMP equivalent' for accurate calculations."
        },
    ];
    const suggestedLinks = [
        { title: "Pregnancy Week-by-Week", href: "/pregnancy-week-wise/pregnancy-week-1" },
        { title: "Pregnancy Calculator", href: "/pregnancy/pregnancy-due-date-calculator" },
        { title: "Newborn Baby Clothes", href: "/blogs/newborn-baby-clothes" },
        { title: "Breastfeeding vs Formula", href: "/blogs/breastfeeding-vs-formula" },
        { title: "Baby Names Search", href: "/baby-names/baby-names-search" },
    ];
    const calculateOvulation = () => {
        if (!lmp) return;

        const startDate = new Date(lmp);
        const lutealPhase = 14;
        const ovulationDate = new Date(startDate);
        ovulationDate.setDate(startDate.getDate() + (cycleLength - lutealPhase));

        const fertileStart = new Date(ovulationDate);
        fertileStart.setDate(ovulationDate.getDate() - 2);
        const fertileEnd = new Date(ovulationDate);
        fertileEnd.setDate(ovulationDate.getDate() + 2);

        const intercourseStart = new Date(fertileStart);
        intercourseStart.setDate(fertileStart.getDate() - 3);
        const intercourseEnd = new Date(fertileEnd);

        const pregnancyTestDate = new Date(ovulationDate);
        pregnancyTestDate.setDate(ovulationDate.getDate() + 9);

        const nextPeriod = new Date(startDate);
        nextPeriod.setDate(startDate.getDate() + cycleLength);

        const due = new Date(ovulationDate);
        due.setDate(ovulationDate.getDate() + 38 * 7);

        setOvulationData({
            ovulationWindow: `${fertileStart.toDateString()} - ${fertileEnd.toDateString()}`,
            mostProbableOvulation: ovulationDate.toDateString(),
            intercourseWindow: `${intercourseStart.toDateString()} - ${intercourseEnd.toDateString()}`,
            pregnancyTest: pregnancyTestDate.toDateString(),
            nextPeriod: nextPeriod.toDateString(),
            dueDate: due.toDateString(),
        });

        // Future cycles
        const cycles = [];
        let periodStart = new Date(startDate);
        for (let i = 0; i < 6; i++) {
            const cycleOvStart = new Date(periodStart);
            cycleOvStart.setDate(periodStart.getDate() + (cycleLength - lutealPhase - 2));
            const cycleOvEnd = new Date(periodStart);
            cycleOvEnd.setDate(periodStart.getDate() + (cycleLength - lutealPhase + 2));
            const cycleDue = new Date(cycleOvEnd);
            cycleDue.setDate(cycleOvEnd.getDate() + 38 * 7);

            cycles.push({
                periodStart: periodStart.toDateString(),
                ovulationWindow: `${cycleOvStart.toDateString()} - ${cycleOvEnd.toDateString()}`,
                dueDate: cycleDue.toDateString(),
            });

            periodStart = new Date(periodStart);
            periodStart.setDate(periodStart.getDate() + cycleLength);
        }
        setFutureCycles(cycles);

        // Set calendar month for display (current month of LMP)
        setCalendarMonth(startDate);
    };

    const renderCalendar = (monthDate) => {
        if (!monthDate) return null;

        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();

        const weeks = [];
        let day = 1 - firstDay;
        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++, day++) {
                week.push(day > 0 && day <= daysInMonth ? day : null);
            }
            weeks.push(week);
        }

        return (
            <table className="w-full border border-gray-300 mt-4">
                <thead className="bg-gray-100">
                    <tr>
                        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                            <th key={d} className="border px-2 py-1">{d}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, i) => (
                        <tr key={i}>
                            {week.map((day, j) => (
                                <td key={j} className="border h-10 text-center align-middle">
                                    {day || ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="bg-white text-black min-h-screen">
            <Head>
                <title>Ovulation & Due Date Calculator | Belly Buds</title>
                <meta
                    name="description"
                    content="Calculate your ovulation window, intercourse window, next period, pregnancy test, and estimated due date. Track cycles and plan pregnancy."
                />
            </Head>

            <Header />

            <section className="container mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    <div className="my-4 flex flex-col items-center gap-4">
                        <div className="w-full max-w-md h-90 relative">
                            <Image src={'https://i.pinimg.com/736x/28/3c/54/283c54f04fb9ecdb9769d7d4cc87279e.jpg'} alt={'Pregnancy Due Date Calculator'} width={400}
                                height={300} className="rounded object-cover" />
                        </div>
                        <SocialShare imageUrl={'https://i.pinimg.com/736x/28/3c/54/283c54f04fb9ecdb9769d7d4cc87279e.jpg'} title={'Pregnancy Due Date Calculator'} />
                    </div>
                    <h1 className="text-3xl font-bold text-orange-600 text-center md:text-left">
                        Ovulation & Due Date Calculator
                    </h1>

                    <p className="text-gray-700">
                        Enter the first day of your last menstrual period (LMP) and your average cycle length. This tool will calculate your ovulation window, most probable ovulation day, fertile intercourse days, pregnancy test date, next period, and estimated due date. Track future cycles and plan effectively.
                    </p>

                    <div className="bg-orange-50 p-6 rounded-xl shadow-md space-y-4">
                        <label className="block text-gray-700 font-medium">Last Menstrual Period (LMP):</label>
                        <input
                            type="date"
                            value={lmp}
                            onChange={(e) => setLmp(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        />

                        <label className="block text-gray-700 font-medium">Cycle Length (days):</label>
                        <input
                            type="number"
                            value={cycleLength}
                            onChange={(e) => setCycleLength(Number(e.target.value))}
                            min={20}
                            max={40}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        />

                        <button
                            onClick={calculateOvulation}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                            Calculate
                        </button>
                    </div>

                    {ovulationData && (
                        <>
                            <h2 className="text-2xl font-semibold text-orange-600 mt-6">Ovulation & Pregnancy Info</h2>
                            <table className="w-full border border-gray-300 rounded-lg text-left">
                                <tbody>
                                    {Object.entries(ovulationData).map(([key, value]) => (
                                        <tr key={key}>
                                            <td className="border px-4 py-2 font-medium">{key.replace(/([A-Z])/g, ' $1')}</td>
                                            <td className="border px-4 py-2">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h3 className="text-xl font-semibold mt-6 text-orange-600">Important Dates for Next 6 Cycles</h3>
                            <table className="w-full border border-gray-300 rounded-lg text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border px-4 py-2">Period Start</th>
                                        <th className="border px-4 py-2">Ovulation Window</th>
                                        <th className="border px-4 py-2">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {futureCycles.map((cycle, idx) => (
                                        <tr key={idx}>
                                            <td className="border px-4 py-2">{cycle.periodStart}</td>
                                            <td className="border px-4 py-2">{cycle.ovulationWindow}</td>
                                            <td className="border px-4 py-2">{cycle.dueDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h3 className="text-xl font-semibold mt-6 text-orange-600">Monthly Calendar View</h3>
                            {renderCalendar(calendarMonth)}

                            {/* FAQ */}
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
                        </>
                    )}
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
                {/* Suggested Links */}

                {/* Right/Sidebar */}
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
