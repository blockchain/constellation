<h1 align="center">Constellation</h1>

<div align="center">

Constellation is [Blockchain.com](https://blockchain.com)'s open sourced component library and base code linting configs.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://https://github.com/blockchain/constellation/blob/master/LICENSE)

</div>

## Installation

Constellation is mono-repo of various open-sourced packages available on [NPM](https://www.npmjs.com/~blockchain-official/constellation).

## Publish

To publish a package you have to first bump the version that you want it to be, then push it with the name `Bumping version`, then you should run:

```sh
yarn workspace [package] npm publish
```

and it will publish the package for you.

## Deploying Storybook

```sh
yarn workspace @blockchain-com/constellation deploy:storybook
```

## Packages

### [constellation](./packages/constellation)

Our component library is available on [NPM](https://www.npmjs.com/package/@blockchain-com/constellation).

### [eslint-config-constellation](./packages/eslint-config-constellation)

Our base ESLint ruleset is available on [NPM](https://www.npmjs.com/package/eslint-config-constellation).

### [prettier-config-constellation](./packages/prettier-config-constellation)

Our base Prettier ruleset is available on [NPM](https://www.npmjs.com/package/prettier-config-constellation).

### [stylelint-config-constellation](./packages/stylelint-config-constellation)

Our base Stylelint ruleset is available on [NPM](https://www.npmjs.com/package/stylelint-config-constellation).
