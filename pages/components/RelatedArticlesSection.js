import Link from 'next/link';

const relatedArticles = [
  {
    title: "Top 100 Baby Names of 2024",
    slug: "blogs/top-100-baby-names-2024",
    description: "Discover the most popular and trending baby names for boys and girls this year.",
    category: "Popular Names"
  },
  {
    title: "Unique Baby Names with Beautiful Meanings",
    slug: "blogs/unique-baby-names-meanings",
    description: "Explore rare and meaningful baby names that stand out from the crowd.",
    category: "Unique Names"
  },
  {
    title: "Traditional & Classic Baby Names",
    slug: "blogs/traditional-classic-baby-names",
    description: "Timeless names that have stood the test of time and never go out of style.",
    category: "Classic Names"
  }
];

const articleTags = [
  "Baby Names", "Name Meanings", "Boy Names", "Girl Names", "Popular Names",
  "Unique Names", "Traditional Names", "Modern Names", "Name Origins"
];

export default function RelatedArticlesSection() {
  return (
    <>
      {/* Article Tags */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          📚 Related Topics
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {articleTags.map((tag, index) => (
            <span
              key={index}
              className="bg-white px-4 py-2 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-medium hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          📖 Continue Reading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <Link
              key={index}
              href={`/${article.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              prefetch={true}
            >
              <div className="p-6">
                <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3 leading-relaxed">
                  {article.description}
                </p>
                <span className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 group-hover:text-blue-700 transition-colors">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}