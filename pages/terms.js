"use client";

import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function TermsAndConditions() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            {/* Header */}
            <Header />

            {/* SEO */}
            <Head>
                <title>Terms & Conditions | Belly Buds Boutique</title>
                <meta
                    name="description"
                    content="Read the Terms & Conditions for Belly Buds Boutique. Learn about the rules and guidelines for using our website and services."
                />
            </Head>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6 text-orange-500">Terms & Conditions</h1>

                <p className="mb-4 leading-relaxed">
                    Welcome to Belly Buds Boutique. By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">1. Use of Website</h2>
                <p className="mb-4">
                    You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">2. Intellectual Property</h2>
                <p className="mb-4">
                    All content on this website, including text, images, graphics, logos, and software, is the property of Belly Buds Boutique or its licensors and is protected by copyright laws.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">3. Products and Pricing</h2>
                <p className="mb-4">
                    We strive to provide accurate product information and pricing. However, we do not guarantee that all details are accurate, complete, or current. Prices are subject to change without notice.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">4. Third-Party Links</h2>
                <p className="mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of information on these external sites.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">5. Disclaimer of Warranties</h2>
                <p className="mb-4">
                    This website is provided “as is” without any warranties of any kind, either express or implied. Belly Buds Boutique does not guarantee that the website will be error-free or uninterrupted.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
                <p className="mb-4">
                    In no event shall Belly Buds Boutique be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or its content.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">7. User Responsibilities</h2>
                <p className="mb-4">
                    Users agree not to misuse the website by engaging in harmful, unlawful, or abusive activities. You are responsible for maintaining the confidentiality of your account information if applicable.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">8. Privacy</h2>
                <p className="mb-4">
                    Our use of personal information is described in our{" "}
                    <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                        Privacy Policy
                    </Link>
                    . By using the website, you consent to our collection and use of information as outlined there.
                </p>


                <h2 className="text-2xl font-semibold mt-6 mb-3">9. Changes to Terms</h2>
                <p className="mb-4">
                    Belly Buds Boutique reserves the right to update or modify these Terms & Conditions at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated terms.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">10. Governing Law</h2>
                <p className="mb-4">
                    These Terms & Conditions are governed by and construed in accordance with the laws of your country. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in your jurisdiction.
                </p>

                <p className="mt-6">
                    By using this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
                </p>
            </div>
            <Footer />
        </div>
    );
}
