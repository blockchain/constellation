# Constellation

Base component library for React based applications built and used by [Blockchain.com](blockchain.com).

## Using the Library

1. Install the library `yarn add @blockchain/constellation`
2. Import Inter font. [see](/docs/fonts/index.md)
3. Import and wrap your entire App with the ThemeProvider component. Example below

   ```js
    import { useEffect } from 'react'

    import {
      ThemeProvider,
      useThemeMode,
      useLocalStorage,
      ThemeMode
    } from '@blockchain/constellation'

    function App(): JSX.Element {
      const [themeMode] = useLocalStorage<ThemeMode>('themeMode', 'light')
      const theme = useThemeMode(themeMode)

      return (
        <Store>
          <ThemeProvider theme={theme}>
              <Router>
                  ...
              </Router>
          </ThemeProvider>
        <Store />
      )
    }
   ```

4. That's it, happy hacking!

## Local Hacking Guide

If you would like to develop this library while consuming it via another application, follow these steps:

### Prerequisites

- Requires Yarn 2 (Berry) and Webpack 5. It may be possible to use in other setups, but they remain untested.\*\*
- Ensure the Webpack 5 config has `symlinks: false` in the resolve config.

### Steps

1. From Constellation repo, run `yarn workspace @blockchain-com/constellation build` to compile Constellation.
2. In the app you would like to symlink the repo to, change the dependency install in package.json

   ```sh
   "@blockchain-com/constellation": "portal:../constellation/packages/constellation", // relative path may be different!
   ```

3. In consuming app, run `yarn install`
4. You can now make changes to Constellation components and use them directly in the consuming app!

NOTE: For now you will have to manually rebuild (rerun step 1) after every change to a Constellation component.

### Scripts

- `yarn storybook` - Start and open storybook in the browser
- `yarn build` - Builds the package
- `yarn test` - Run all tests
- `yarn test --watch` - Run jest in watch mode
- `yarn analyze_bundle:open` - Create an bundle report and open in the browser
- `yarn analyze_bundle:json` - Create an bundle report json in `./stats.json`
