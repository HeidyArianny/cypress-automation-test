import cypressPlugin from 'eslint-plugin-cypress';

export default [
  {
    plugins: {
      cypress: cypressPlugin
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      "no-unused-vars": ["warn"], // Warns for unused variables
      "curly": "error", // Requires consisten use of curly braces
      "indent": ["error", 2], // 2-space indentation required
      "quotes": ["error", "single", { avoidEscape: true }], // Enforce single quotes except when avoiding escape
      "semi": ["error", "always"], // Requires semicolons
      "comma-dangle": ["error", "only-multiline"], // Requires trailing commas only for multiline elements
      "no-trailing-spaces": "error", // Trailing whitespaces not allowed
      "cypress/no-force": "warn" // Encourages not using '{ force: true }' unless strictly necessary
    },
    files: ['cypress/**/*.js'], // Target Cypress files only
  }
];