module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'next',
    'next/core-web-vitals',
    'standard',
    'standard-react',
    'prettier',
  ],
  rules: {
    '@next/next/no-img-element': 'off',
    'react/prop-types': 'off',
  },
};
