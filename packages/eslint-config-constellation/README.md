# ESLint Config Constellation

## Install

```sh
yarn add --dev eslint-config-constellation
```

and then

```sh
npx install-peerdeps --dev eslint-config-constellation
```

## Usage

On your `.eslintrc`

```json
{
  "extends": ["eslint-config-constellation"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json"
      }
    }
  }
}
```
