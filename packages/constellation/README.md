# Constellation
Base component library for React based applications built and used by [Blockchain.com](blockchain.com).

## Installation
```sh
yarn add @blockchain/constellation styled-components
```

## TODO LIST
- [ ] Configure an automated hook to re-run build after changes to components for local development

## Local Development Guide
If you would like to develop this library while consuming it via another application, follow these steps:


**The following requires Yarn 2 (Berry) and Webpack 5.  It may be possible to use in other setups, but they remain untested.**

1) From Constellation repo, run `yarn workspace @blockchain-com/constellation build` to compile Constellation.
2) In the app you would like to symlink the repo to, change the dependency install in package.json 
```sh
"@blockchain-com/constellation": "portal:../constellation/packages/constellation", // relative path may be different!
```
3) In consuming app, run `yarn install`
4) In consuming app, ensure the Webpack 5 config has `symlinks: false` in the resolve config.
5) You can now make changes to Constellation components and use them directly in the consuming app!

NOTE: For now you will have to manually rebuild (rerun step 1) after every change to a Constellation component.
