# Constellation

This is the component library used by Blockchain.com, used across all its apps (frontend).

It contains:

## Services

This is used to make service (api) calls easier.

### [tracking](./docs/services/tracking.md)

## Components

This is used to create our primitive components

### [Icons](./docs/components/Icons.md)

## Utils

This is used to create our util functions that are used across our apps.

### Development

Following the patterns outlined here [https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#can-i-import-esm-packages-in-my-typescript-project](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#can-i-import-esm-packages-in-my-typescript-project) there are a couple considerations to keep in mind when creating new components in the constellation package.

1. File names are in `.ts` and `.tsx` like normal but when using `import` from one file to another you'll need to reference them as `.js` and use the full path. So `import { Foo } from '.'` becomes `import { Foo } from './index.js`
2. Each `.tsx` you create needs to have `import React from 'react'` at the top in order for your project to interperet the files correctly.
