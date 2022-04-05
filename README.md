<h1 align="center">Constellation</h1>
<div align="center">

Constellation is [Blockchain.com](https://blockchain.com)'s open sourced component library and base code linting configs.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://https://github.com/blockchain/constellation/blob/master/LICENSE)

</div>

## Installation/Usage

`@blockchain-com/icons` must be built before running repo's storybook, so first:

```
yarn && yarn workspace @blockchain-com/icons build
```

After building the icons run storybook with:

```
yarn storybook
```

Constellation is mono-repo of various open-sourced packages available on [NPM](https://www.npmjs.com/~blockchain-official/constellation).
Find more details on each package below.

## Packages

| Name                                                                        | Description                                              |
| --------------------------------------------------------------------------- | -------------------------------------------------------- |
| [constellation](./packages/constellation)                                   | Our base component library for React based applications. |
| [eslint-config-constellation](./packages/eslint-config-constellation)       | Our base ESLint ruleset.                                 |
| [prettier-config-constellation](./packages/prettier-config-constellation)   | Our base Prettier ruleset.                               |
| [stylelint-config-constellation](./packages/stylelint-config-constellation) | Our base Stylelint ruleset.                              |
| [@blockchain-com/icons](./packages/icons)                                   | React Icons                                              |

For more details on the packages above, see their README.md's

## Publish To NPM

1. Bump the package.json to next version following [Semantic Versioning](https://semver.org/)
2. Commit change for version bump
3. Depending on your setup, run either of the following commands from project root

```sh
`yarn workspace [package] npm publish` or `npm publish`
```

## Deploying Storybook

```sh
yarn workspace @blockchain-com/constellation deploy:storybook
```
