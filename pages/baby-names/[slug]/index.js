"use client";

import { useParams } from "next/navigation";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner";
import babyNames from "../../../data/babyNamesArray";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function BabyNamesSlugPage() {
  const params = useParams();
  const slug = params?.slug ?? "default";

  // Parse slug, e.g. "girl-names-with-a"
  const lowerSlug = slug.toLowerCase();

  let selectedGender = "All";
  if (lowerSlug.includes("girl")) selectedGender = "Girl";
  else if (lowerSlug.includes("boy")) selectedGender = "Boy";

  const selectedLetterMatch = lowerSlug.match(/with-([a-z])/);
  const selectedLetter = selectedLetterMatch
    ? selectedLetterMatch[1].toUpperCase()
    : null;

  const filteredNames = selectedLetter
    ? babyNames.filter(
        (b) =>
          b.name.startsWith(selectedLetter) &&
          (selectedGender === "All" || b.gender === selectedGender)
      )
    : [];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Head>
        <title>
          {selectedGender === "All"
            ? `Baby Names Starting with ${selectedLetter}`
            : `${selectedGender} Names Starting with ${selectedLetter}`}{" "}
          | Belly Buds
        </title>
        <meta
          name="description"
          content={`Browse ${selectedGender === "All" ? "baby" : selectedGender.toLowerCase()} names that start with ${selectedLetter}. Find the perfect name for your baby.`}
        />
      </Head>

      <Header />

      <div className="my-8 p-4 bg-orange-50 border rounded shadow">
        <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
        <AdBanner />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-orange-500 text-center">
          {selectedGender === "All"
            ? `Baby Names Starting with "${selectedLetter}"`
            : `${selectedGender} Names Starting with "${selectedLetter}"`}
        </h1>

        {/* Navigation Links */}
        <div className="grid grid-cols-8 sm:grid-cols-13 gap-2 text-center mb-6">
          {alphabet.map((letter) => (
            <Link
              key={letter}
              href={`/baby-names/${selectedGender.toLowerCase()}-names-with-${letter.toLowerCase()}`}
              className={`p-2 rounded-lg text-sm font-semibold border shadow-sm transition ${
                selectedLetter === letter
                  ? "bg-orange-500 text-white border-orange-600"
                  : "bg-white hover:bg-gray-100 border-gray-300"
              }`}
            >
              {letter}
            </Link>
          ))}
        </div>

        {/* Results */}
        {selectedLetter ? (
          filteredNames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {filteredNames.map((baby, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                >
                  <span className="font-medium">{baby.name}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      baby.gender === "Boy"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-pink-100 text-pink-700"
                    }`}
                  >
                    {baby.gender}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-center">
              No {selectedGender.toLowerCase()} names found for “{selectedLetter}”.
            </p>
          )
        ) : (
          <p className="text-center text-gray-500 italic">
            Please choose a letter above.
          </p>
        )}
      </main>

      <div className="my-8 p-4 bg-orange-50 border rounded shadow">
        <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
        <AdBanner />
      </div>

      <Footer />
    </div>
  );
}
