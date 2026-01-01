"use client";

import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ContactUs() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <Header />

            <Head>
                <title>Contact Us | Belly Buds</title>
                <meta
                    name="description"
                    content="Contact Belly Buds for questions, support, or business inquiries."
                />
            </Head>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6 text-orange-500">Contact Us</h1>

                <p className="mb-4">
                    If you have any questions, feedback, or business inquiries, feel free to reach out to us.
                    We are always happy to help.
                </p>

                <div className="mt-6 space-y-4">
                    <p>
                        <span className="font-semibold">Email:</span> parthskyward@gmail.com
                    </p>
                    <p>
                        <span className="font-semibold">Address:</span> 41, payal park , Ahmedabad, Gujarat,India
                    </p>
                </div>

                <p className="mt-6">
                    We aim to respond to all inquiries as quickly as possible. Thank you for visiting
                    <span className="font-semibold"> Belly Buds</span>.
                </p>
            </div>

            <Footer />
        </div>
    );
}
