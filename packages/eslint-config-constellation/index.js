module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': [0],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'prefer-const': 'error',
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: 'src/packages',
      },
    },
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'new-cap': 0,
    'no-alert': 2,
    'no-case-declarations': 0,
    'no-console': 2,
    'no-underscore-dangle': 0,
    camelcase: 0,
    'jsx-quotes': [2, 'prefer-single'],
  },
};
