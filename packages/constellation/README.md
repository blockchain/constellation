# Constellation

Base component library for React based applications built and used by [Blockchain.com](blockchain.com).

## Using the Library

1. Install the library `yarn add @blockchain/constellation`
2. Import and wrap your entire App with the ThemeProvider component. Example below

   ```js
    import { useEffect } from 'react'

    import { ThemeProvider, ColorMode } from '@blockchain/constellation'

    const COLOR_MODE = 'CUSTOM_NAME_FOR_APP_THEME'

    function App(): JSX.Element {
      const { setColorMode } = useTheme()

      const handleColorMode = (colorMode: ColorMode) => {
        localStorage.setItem(COLOR_MODE, colorMode)

        setColorMode(colorMode)
      }

      useEffect(() => {
        const savedColorMode = localStorage.getItem(COLOR_MODE) as ColorMode | null

        if (savedColorMode) {
          setColorMode(savedColorMode)

          return
        }

        const systemDarkColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches

        setColorMode(systemDarkColorMode ? ColorMode.DARK : ColorMode.LIGHT)
      }, [])

      return (
        <Store>
          <ThemeProvider>
              <Router>
                  ...
              </Router>
          </ThemeProvider>
        <Store />
      )
    }
   ```

3. Then you can use the persisted/preferred theme on a child component if you want to

   ```js
    import { useEffect } from 'react'

    import { ColorMode } from '@blockchain/constellation'

    const COLOR_MODE = 'CUSTOM_NAME_FOR_APP_THEME'

    function Root(): JSX.Element {
      const { setColorMode } = useTheme()

      const handleColorMode = (colorMode: ColorMode) => {
        localStorage.setItem(COLOR_MODE, colorMode)

        setColorMode(colorMode)
      }

      useEffect(() => {
        const savedColorMode = localStorage.getItem(COLOR_MODE) as ColorMode | null

        if (savedColorMode) {
          setColorMode(savedColorMode)

          return
        }

        const systemDarkColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches

        setColorMode(systemDarkColorMode ? ColorMode.DARK : ColorMode.LIGHT)
      }, [])

      return ...
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
