"use client";

import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <Header />

            <Head>
                <title>Privacy Policy | Belly Buds</title>
                <meta
                    name="description"
                    content="Privacy Policy for Belly Buds . Learn how we collect, use, and protect your personal information when you visit our website."
                />
            </Head>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-6 text-orange-500">Privacy Policy</h1>

                <p className="mb-4">
                    At Belly Buds , we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect the following types of information:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Personal information you provide, such as name, email address, or contact details when you subscribe or contact us.</li>
                    <li>Non-personal information automatically collected, including IP addresses, browser type, pages visited, and website usage data.</li>
                    <li>Cookies and similar technologies to enhance user experience.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
                <p className="mb-4">
                    The information we collect is used for:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Providing and improving our website and services.</li>
                    <li>Sending newsletters or promotional content (if you have opted in).</li>
                    <li>Responding to inquiries or support requests.</li>
                    <li>Analyzing website usage to improve content and user experience.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">3. Sharing Your Information</h2>
                <p className="mb-4">
                    We do not sell or rent your personal information to third parties. We may share your data with trusted service providers to assist in website operations, analytics, or marketing. All third-party services are bound by confidentiality and data protection agreements.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">4. Google AdSense & Third-Party Ads</h2>
                <p className="mb-4">
                    Our website may use Google AdSense and other advertising services that may collect non-personal information (e.g., cookies, device information) to serve relevant ads. This information is used to improve ad targeting and user experience. Please refer to the respective third-party privacy policies for more information.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">5. Data Security</h2>
                <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, or loss. However, no method of transmission over the Internet is 100% secure.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">6. Your Rights</h2>
                <p className="mb-4">
                    You have the right to:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Access the personal data we hold about you.</li>
                    <li>Request correction or deletion of your data.</li>
                    <li>Opt out of marketing communications.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">7. Cookies</h2>
                <p className="mb-4">
                    Our website uses cookies to improve user experience, analyze traffic, and serve personalized content. You can manage cookie settings in your browser preferences.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">8. Third-Party Links</h2>
                <p className="mb-4">
                    Our website may contain links to third-party websites. We are not responsible for their privacy practices, so we encourage you to review their privacy policies.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">9. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy periodically. Updates will be posted on this page with the revised effective date.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
                <p className="mb-4">
                    If you have questions or concerns about this Privacy Policy or your personal information, please contact us at:
                </p>
                <p className="mb-4 font-semibold">Email: parthskyward@gmail.com</p>
                <p className="mb-4 font-semibold">Address: 41, payal park , Ahmedabad, Gujarat,India</p>

                <p className="mt-6">
                    By using our website, you agree to the terms outlined in this Privacy Policy.
                </p>
            </div>
            <Footer />
        </div>
    );
}
