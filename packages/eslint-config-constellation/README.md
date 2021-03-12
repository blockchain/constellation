# ESLint Config Constellation

## Install

```sh
yarn add --dev eslint-config-constellation
```

## Usage

On your `.eslintrc`

```json
{
  "extends": ["eslint-config-constellation"]
}
```

On your `.prettierrc.js`

```js
module.exports = {
  ...require('eslint-config-constellation/prettier.config'),
  semi: false,
};
```

On your `.stylelintrc`

```json
{
  "extends": "eslint-config-constellation/stylelint.config"
}
```
