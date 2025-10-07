"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function AboutUs() {
    return (
        <div className="bg-white text-gray-800 min-h-screen flex flex-col">
            <Header />

            <Head>
                <title>About Us | Belly Buds</title>
                <meta
                    name="description"
                    content="Learn more about Belly Buds – your trusted source for pregnancy, parenting, motherhood, and baby names content, along with safe and fun baby toys."
                />
            </Head>

            <main className="max-w-6xl mx-auto px-6 py-12 flex-1">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-500 mb-4">About Us</h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Welcome to <strong>Belly Buds</strong> – a community-driven platform
                        where we celebrate <em>pregnancy</em>, guide new parents through{" "}
                        <em>parenting</em>, embrace the journey of <em>parenting</em>, and
                        share beautiful <em>baby names</em> inspirations.
                        Our mission is to support families with trusted advice, engaging
                        stories, and products that nurture every stage of your baby’s life.
                    </p>
                </section>

                {/* Our Story */}
                <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-green-700">
                            Our Story
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Belly Buds began with a simple idea – to create a safe, supportive
                            space for parents and caregivers. From the early days of pregnancy
                            to the exciting stages of baby’s first words, steps, and toys, we
                            aim to guide you with reliable information, thoughtful resources,
                            and products that matter.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Our team is made up of parents, educators, and baby-care experts
                            who know the challenges and joys of raising children. Together,
                            we’ve built a platform that blends heartfelt advice with modern
                            tools to make parenting easier.
                        </p>
                    </div>
                    <div className="relative w-full h-72">
                        <Image
                            src="/images/baby-cream.png"
                            alt="Family with baby"
                            fill
                            className="object-cover rounded-lg shadow-md"
                        />
                    </div>
                </section>

                {/* What We Offer */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-green-700">
                        What We Offer
                    </h2>
                    <ul className="grid md:grid-cols-2 gap-6 list-disc pl-6">
                        <li className="text-gray-700 leading-relaxed">
                            Trusted articles on pregnancy, parenting, and motherhood.
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                            Inspiration for meaningful and unique baby names.
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                            Reviews and recommendations for safe baby toys and products.
                        </li>
                        <li className="text-gray-700 leading-relaxed">
                            A supportive community for parents to connect and share
                            experiences.
                        </li>
                    </ul>
                </section>

                {/* Join Us CTA */}
                <section className="bg-orange-50 border border-orange-200 p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">
                        Join Our Journey
                    </h2>
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                        Whether you’re expecting, already navigating parenthood, or just
                        searching for the perfect baby name, Belly Buds is here to support
                        you. Explore our blogs, join discussions, and discover products that
                        make family life brighter.
                    </p>
                    <Link
                        href="#"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition"
                    >
                        Contact Us
                    </Link>

                    <p className="text-sm">Email: parthskyward@gmail.com</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
