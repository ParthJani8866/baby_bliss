// pages/api/sitemap.xml.js
const BLOG_POSTS = [
  "newborn-baby-clothes",
  "best-baby-diapers",
  "breastfeeding-vs-formula",
  "calm-crying-baby",
  "baby-proofing-guide",
  "best-baby-lullabies",
  "baby-first-year-milestones",
  "how-to-swaddle",
  "first-24-hours-after-birth",
  "self-care-for-moms",
  "disposable-bags-and-diaper-liners",
  "baby-gear-essentials",
];

const categories = [
  { id: 1, name: "Activity and Play Time", image: "img6.jpg" },
  { id: 5, name: "Walkers and Ride-Ons", image: "img17.jpg" },
  { id: 6, name: "Tricycles and Kids Cycles", image: "img34.jpg" },
  { id: 7, name: "Rattles and Plush Toys", image: "img23.jpg" },
  { id: 2, name: "Baby Care", image: "img8.jpg" },
  { id: 8, name: "Books and Learning Material", image: "img51.jpg" },
  { id: 3, name: "Bath and Hygiene", image: "img13.jpg" },
  { id: 4, name: "Playmats and Gyms", image: "img15.jpg" },
];

// Helper function to convert category names into slugs
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

export default function handler(req, res) {
  const baseUrl = "http://baby-toys.shop";

  const staticPages = [
    { url: "", priority: 1.0 },
    { url: "blogs", priority: 0.8 },
  ];

  // Add blog posts dynamically
  const blogUrls = BLOG_POSTS.map(
    (slug) => `
      <url>
        <loc>${baseUrl}/blogs/${slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `
  );

  const allUrls = [
    ...staticPages.map(
      (page) => `
      <url>
        <loc>${baseUrl}/${page.url}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `
    ),
    ...blogUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
