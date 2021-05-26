<h1 align="center">Constellation</h1>
<div align="center">

Constellation is [Blockchain.com](https://blockchain.com)'s open sourced component library and base code linting configs.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://https://github.com/blockchain/constellation/blob/master/LICENSE)

<!--[![npm latest package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/@material-ui/core)
-->
</div>

## Installation

Constellation is mono-repo of various open-sourced packages available on [NPM](https://www.npmjs.com/~blockchain-official/constellation).

```sh
// NPM
npm install [package]

// Yarn
yarn add [package]
```

## Usage

TODO

## Publish

To publish a package you have to first bump the version that you want it to be, then push it with the name `Bumping version`, then you should run:

```sh
yarn workspace [package] npm publish
```

and it will publish the package for you.

## Packages

### [eslint-config-constellation](./packages/eslint-config-constellation)

Our base ESLint ruleset is available on [NPM](https://www.npmjs.com/package/eslint-config-constellation).

### [prettier-config-constellation](./packages/prettier-config-constellation)

Our base Prettier ruleset is available on [NPM](https://www.npmjs.com/package/prettier-config-constellation).

### [stylelint-config-constellation](./packages/stylelint-config-constellation)

Our base Stylelint ruleset is available on [NPM](https://www.npmjs.com/package/stylelint-config-constellation).
