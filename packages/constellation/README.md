# Constellation
Base component library for React based applications built and used by [Blockchain.com](blockchain.com).

## Using the Library
1) Install the library `yarn add @blockchain/constellation`
2) Ensure your App loads Google's Inter font. There are two suggested ways:bundle and serve the font files locally
   1) Bundle and serve the font files locally in your app
   2) Include assets from CDN in your index.html file.
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" rel="stylesheet" />
```
3) Import and wrap your entire App with the ThemeProvider component. Example below
```js
import { ThemeProvider } from '@blockchain/constellation'

const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

function App(): JSX.Element {
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
4. Ensure to pass your desired theme to the Provider. This should be read first from users OS, then app state and finally a fallback. Currently, there is no support for custom themes other than 'light' or 'dark'
5. That's it, happy hacking!

## Local Hacking Guide
If you would like to develop this library while consuming it via another application, follow these steps:

### Prerequisites
- Requires Yarn 2 (Berry) and Webpack 5.  It may be possible to use in other setups, but they remain untested.**
- Ensure the Webpack 5 config has `symlinks: false` in the resolve config.

### Steps
1) From Constellation repo, run `yarn workspace @blockchain-com/constellation build` to compile Constellation.
2) In the app you would like to symlink the repo to, change the dependency install in package.json 
```sh
"@blockchain-com/constellation": "portal:../constellation/packages/constellation", // relative path may be different!
```
3) In consuming app, run `yarn install`
5) You can now make changes to Constellation components and use them directly in the consuming app!

NOTE: For now you will have to manually rebuild (rerun step 1) after every change to a Constellation component.
