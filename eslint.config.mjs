import globals from "globals";
import pluginJs from "@eslint/js";
import pluginCypress from "eslint-plugin-cypress"; // Imports the Cypress plugin

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...pluginCypress.configs.recommended.env
    },
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
  }
},
  pluginJs.configs.recommended,
  pluginCypress.configs.recommended // Adds the recommended Cypress configuration and rules
];