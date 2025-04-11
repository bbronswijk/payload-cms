/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ignore: ['src/migrations'],
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {},
}
