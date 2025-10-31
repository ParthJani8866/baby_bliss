import Link from 'next/link';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function NavigationSection({ selectedGender, selectedLetter }) {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-13 gap-2 mb-6">
        {alphabet.map((letter) => (
          <Link
            key={letter}
            href={`/baby-names/${selectedGender.toLowerCase()}-names-with-${letter.toLowerCase()}`}
            className={`p-3 rounded-xl text-center font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
              selectedLetter === letter
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
                : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-md"
            }`}
            prefetch={true}
          >
            {letter}
          </Link>
        ))}
      </div>

      {/* Gender Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <Link
          href={`/baby-names/boy-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
          className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
            selectedGender === "Boy"
              ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-transparent shadow-lg"
              : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300"
          }`}
          prefetch={true}
        >
          👦 Boy Names
        </Link>
        <Link
          href={`/baby-names/girl-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
          className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 ${
            selectedGender === "Girl"
              ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white border-transparent shadow-lg"
              : "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300"
          }`}
          prefetch={true}
        >
          👧 Girl Names
        </Link>
        <Link
          href={`/baby-names/baby-names-with-${selectedLetter?.toLowerCase() || 'a'}`}
          className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 ${
            selectedGender === "All"
              ? "bg-gradient-to-r from-gray-500 to-gray-700 text-white border-transparent shadow-lg"
              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
          }`}
          prefetch={true}
        >
          👶 All Names
        </Link>
      </div>
    </section>
  );
}