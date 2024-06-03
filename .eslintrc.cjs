/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    project: true,
    tsConfigRootDir: __dirname,
  },
  root: true,
  rules: {
    'no-console': 'error',
    'dot-notation': 'error',
  },
};
