"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function BabyNamesHome() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Head>
        <title>Baby Names Alphabetical Search | Belly Buds</title>
        <meta
          name="description"
          content="Explore unique baby names alphabetically. Browse boy and girl names by letter — find the perfect name for your baby with our A–Z baby name directory."
        />
      </Head>

      <Header />

      {/* Sponsored Ad - Top */}
      <div className="my-8 p-4 bg-orange-50 border rounded shadow">
        <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
        <AdBanner />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 text-orange-500 text-center">
          Baby Names Alphabetical Search
        </h1>

        {/* A–Z Letter Navigation */}
        <div className="grid grid-cols-8 sm:grid-cols-13 gap-2 text-center mb-8">
          {alphabet.map((letter) => (
            <Link
              key={letter}
              href={`/baby-names/baby-names-with-${letter.toLowerCase()}`}
              className="p-2 rounded-lg text-sm font-semibold border shadow-sm transition bg-white hover:bg-gray-100 border-gray-300"
            >
              {letter}
            </Link>
          ))}
        </div>

        {/* Boy & Girl Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {alphabet.map((letter) => (
            <div key={letter} className="flex justify-between items-center">
              <Link
                href={`/baby-names/boy-names-with-${letter.toLowerCase()}`}
                className="w-full text-center px-4 py-3 rounded-lg font-medium border hover:bg-gray-50 bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
              >
                Boy Names with {letter}
              </Link>
              <Link
                href={`/baby-names/girl-names-with-${letter.toLowerCase()}`}
                className="w-full text-center px-4 py-3 rounded-lg font-medium border hover:bg-gray-50 bg-pink-50 text-pink-700 border-pink-200 shadow-sm ml-3"
              >
                Girl Names with {letter}
              </Link>
            </div>
          ))}
        </div>

        {/* SEO Intro Text */}
        <div className="text-center text-gray-700 max-w-3xl mx-auto">
          <p className="mb-4">
            Welcome to the ultimate A–Z baby name search! Choose a letter above
            to explore <strong>popular, rare, and modern baby names</strong> for
            boys and girls. Whether you’re looking for traditional favorites or
            trendy new ideas, our list helps you find meaningful names that fit
            your baby’s unique personality.
          </p>
          <p>
            Each page includes detailed lists of{" "}
            <strong>boy names and girl names</strong> starting with your chosen
            letter — making it easy to browse and decide the perfect name for
            your little one.
          </p>
        </div>
      </main>

      {/* Sponsored Ad - Bottom */}
      <div className="my-8 p-4 bg-orange-50 border rounded shadow">
        <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
        <AdBanner />
      </div>

      <Footer />
    </div>
  );
}
