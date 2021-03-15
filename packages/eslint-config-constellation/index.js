module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:jest-dom/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort", "typescript-sort-keys"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    APP_VERSION: true,
  },
  env: {
    browser: true,

    "jest/globals": true,

    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": [0],
    "prefer-const": "error",
    "sort-keys": [
      "error",
      "asc",
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "new-cap": 0,
    "no-alert": 2,
    "no-case-declarations": 0,
    "no-console": 2,
    "no-underscore-dangle": 0,
    camelcase: 0,
    "generator-star-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "require-yield": 2,
    "space-before-function-paren": 2,
    "typescript-sort-keys/interface": 2,
    "typescript-sort-keys/string-enum": 2,
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/switch-exhaustiveness-check": 2,
  },
};
