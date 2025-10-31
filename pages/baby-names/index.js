import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const metadata = {
  title: "Baby Names Directory | Browse Names by Letter & Gender | Belly Buds",
  description: "Comprehensive baby names directory. Browse thousands of boy names, girl names, and unisex names by letter. Find perfect baby names with meanings and origins.",
  keywords: "baby names, boy names, girl names, name meanings, baby name directory, alphabetical names",
}

export default function BabyNamesIndex() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <Header />
      <BreadcrumbSchema 
        title={metadata.title} 
        breadcrumbs={[
          { name: "Home", url: "https://baby-toys.shop" },
          { name: "Baby Names", url: "https://baby-toys.shop/baby-names" }
        ]} 
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Baby Names Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover thousands of beautiful baby names organized alphabetically. 
            Browse by letter and gender to find the perfect name for your baby.
          </p>
        </section>

        {/* Gender Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Browse Names by Gender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Link
              href="/baby-names/boy-names-with-a"
              className="group bg-blue-50 rounded-2xl p-8 text-center border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">👦</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Boy Names</h3>
              <p className="text-blue-600">Traditional, modern, and unique names for boys</p>
            </Link>

            <Link
              href="/baby-names/girl-names-with-a"
              className="group bg-pink-50 rounded-2xl p-8 text-center border-2 border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">👧</div>
              <h3 className="text-xl font-bold text-pink-700 mb-2">Girl Names</h3>
              <p className="text-pink-600">Beautiful, classic, and trendy names for girls</p>
            </Link>

            <Link
              href="/baby-names/baby-names-with-a"
              className="group bg-gray-50 rounded-2xl p-8 text-center border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">All Names</h3>
              <p className="text-gray-600">Complete directory of all baby names</p>
            </Link>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Browse Names by Letter
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-13 gap-3 max-w-4xl mx-auto">
            {alphabet.map((letter) => (
              <div key={letter} className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">{letter}</h3>
                <div className="space-y-2">
                  <Link
                    href={`/baby-names/boy-names-with-${letter.toLowerCase()}`}
                    className="block bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    Boys
                  </Link>
                  <Link
                    href={`/baby-names/girl-names-with-${letter.toLowerCase()}`}
                    className="block bg-pink-100 text-pink-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-pink-200 transition-colors"
                  >
                    Girls
                  </Link>
                  <Link
                    href={`/baby-names/baby-names-with-${letter.toLowerCase()}`}
                    className="block bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    All
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Why Use Our Baby Names Directory?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">Easy Search</h3>
              <p className="text-gray-600">Browse names alphabetically by letter and gender</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Database</h3>
              <p className="text-gray-600">Thousands of names from various cultures and origins</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold mb-2">Save Favorites</h3>
              <p className="text-gray-600">Like and save your favorite names for later</p>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-white border-y border-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <AdBanner />
        </div>
      </div>

      <Footer />
    </div>
  );
}