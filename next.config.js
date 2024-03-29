/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  i18n: {
    // locales supported by this applications
    locales: ['ja', 'en'],
    // default locale used when non-locale path visited
    defaultLocale: 'ja',
  },
  images: {
    domains: [
      'via.placeholder.com',
      'dl.airtable.com',
      'v5.airtableusercontent.com',
    ],
  },
  trailingSlash: true,
};
