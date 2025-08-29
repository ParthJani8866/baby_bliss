const { google } = require('googleapis');
const key = require('../service-account.json');
const { categories } = require('../data/categories');
const slugify = require('slugify');

const auth = new google.auth.GoogleAuth({
  credentials: key,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

const indexing = google.indexing({ version: 'v3', auth });

async function publishUrl(url) {
  await indexing.urlNotifications.publish({
    requestBody: { url, type: 'URL_UPDATED' }
  });
  console.log(`Requested indexing for: ${url}`);
}

async function run() {
  for (const cat of categories) {
    const url = `https://truevivah.com/categories/${slugify(cat.name, { lower: true })}`;
    await publishUrl(url);
  }
}

run();
