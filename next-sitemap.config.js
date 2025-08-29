const slugify = require('slugify');
const { categories } = require('./data/categories');

module.exports = {
  siteUrl: 'https://truevivah.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  additionalPaths: async (config) => {
    return categories.map((category) => ({
      loc: `/categories/${slugify(category.name, { lower: true })}`,
      changefreq: 'daily',
      priority: 0.8,
    }));
  },
};