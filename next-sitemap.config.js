const slugify = require('slugify');
const { categories } = require('./data/categories');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const genders = ['boy', 'girl'];

module.exports = {
  siteUrl: 'https://baby-toys.shop',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  additionalPaths: async (config) => {
    const babyNamePaths = [];

    genders.forEach((gender) => {
      alphabet.forEach((letter) => {
        babyNamePaths.push({
          loc: `/baby-names/${gender}-names-with-${letter}`,
          changefreq: 'daily',
          priority: 0.9,
        });
      });
    });

    return [...babyNamePaths];
  },
};
