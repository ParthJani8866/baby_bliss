"use client";

import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import all names from the generated file
import babyNames from "../../data/babyNamesArray"; // adjust path if needed
import AdBanner from "../components/AdBanner";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const genders = ["All", "Boy", "Girl"];

export default function BabyNamesSearch() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedGender, setSelectedGender] = useState("All");

  // Only filter names if a letter is selected
  const filteredNames = selectedLetter
    ? babyNames.filter(
      (b) =>
        b.name.startsWith(selectedLetter) &&
        (selectedGender === "All" || b.gender === selectedGender)
    )
    : [];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <div className="my-8 p-4 bg-orange-50 border rounded shadow">
        <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
        <AdBanner />
      </div>
      <Head>
        <title>Baby Names Alphabetical Search | Belly Buds</title>
        <meta
          name="description"
          content="Discover unique and popular baby names alphabetically. Browse boy and girl names by letter and find the perfect name for your little one."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8 text-orange-500 text-center">
          Baby Names Alphabetical Search
        </h1>

        {/* Alphabet buttons */}
        <div className="grid grid-cols-8 sm:grid-cols-13 gap-2 text-center mb-4">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`p-2 rounded-lg text-sm font-semibold border shadow-sm transition ${selectedLetter === letter
                ? "bg-orange-500 text-white border-orange-600"
                : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Gender filter buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {genders.map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`px-4 py-2 rounded-lg font-medium border transition ${selectedGender === gender
                ? "bg-orange-500 text-white border-orange-600"
                : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
            >
              {gender}
            </button>
          ))}
        </div>

        {/* Results */}
        {selectedLetter && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Names starting with “{selectedLetter}”{" "}
              {selectedGender !== "All" ? `(${selectedGender})` : ""}
            </h2>

            {filteredNames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {filteredNames.map((baby, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                  >
                    <span className="font-medium">{baby.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${baby.gender === "Boy"
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
              <p className="text-gray-500 italic">
                No names found for {selectedLetter}{" "}
                {selectedGender !== "All" ? `(${selectedGender})` : ""}.
              </p>
            )}
          </div>
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
