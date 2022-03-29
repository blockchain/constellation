# @blockchain-com/icons

This package is responsable for providing the blockchain.com icons as an npm package

## Install

```sh
yarn add @blockchain-com/icons
```

## Usage

```ts
import { Activity } from "@blockchain-com/icons";

export const App = () => {
  return (
    <div>
      <Activity />
    </div>
  );
};
```

## Add new icon

- add icon named like this `{IconName}.svg` to `/assets` folder
- Run `yarn build`

Now your new icon is included in the `/dist` folder and you can publish a new version of this package

## Publish

-- TODO
