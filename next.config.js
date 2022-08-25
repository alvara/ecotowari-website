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
    domains: ['via.placeholder.com', 'cdn.sanity.io', 'scontent-nrt1-1.cdninstagram.com'],
  },
  trailingSlash: true,
}
