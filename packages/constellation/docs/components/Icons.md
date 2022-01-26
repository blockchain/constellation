# Icons

---

## Adding New Icons

1. Copy the new `svg` icon file(s) to src/components/Icon/icons.
   1. Follow the camel-cased naming convention
   2. If an icon with the same name already exists, simply version the new file (e.g. myIconV2)
2. From root of package, run the entire icon folder through the [SVGO](https://github.com/svg/svgo) optimizer via `svgo -f ./src/components/Icon/icons`.
3. In `Icons/index.tsx`, import your new icon svg file(s) and update the `iconComponentMap` and type definitions.
