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
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@next/next/no-img-element': 'off',
  },
};
