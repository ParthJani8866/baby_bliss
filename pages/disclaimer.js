"use client";

import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Disclaimer() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <Header />

            <Head>
                <title>Disclaimer | Belly Buds</title>
                <meta
                    name="description"
                    content="Disclaimer for Belly Buds Boutique. Read important information regarding website usage, accuracy, and third-party links."
                />
            </Head>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6 text-orange-500">Disclaimer</h1>

                <p className="mb-4">
                    All the information on Belly Buds is published in good faith and for general informational purposes only.
                    We do not make any warranties about the completeness, reliability, or accuracy of this information.
                </p>

                <p className="mb-4">
                    Any action you take upon the information you find on this website is strictly at your own risk.
                    Belly Buds Boutique will not be liable for any losses or damages in connection with the use of our website.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">External Links Disclaimer</h2>
                <p className="mb-4">
                    Our website may contain links to external websites that are not provided or maintained by us.
                    We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Advertising & Google AdSense</h2>
                <p className="mb-4">
                    This website may display advertisements from Google AdSense and other third-party vendors.
                    These vendors may use cookies or web beacons to show ads based on your visits to this and other websites.
                </p>

                <p className="mb-4">
                    Users may opt out of personalized advertising by visiting Google Ads Settings.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Consent</h2>
                <p className="mb-4">
                    By using our website, you hereby consent to our disclaimer and agree to its terms.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions regarding this disclaimer, please contact us at:
                </p>
                <p className="font-semibold">Email: parthskyward@gmail.com</p>
            </div>

            <Footer />
        </div>
    );
}
