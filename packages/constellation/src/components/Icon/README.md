# Icons

---

## Adding New Icons
1) Copy new svg icon(s) to src/components/Icon/icons. 
   1) Follow the camel-cased naming convention
   2) If an icon with the same name already exists, simply version the new file (e.g. myIconV2)
2) Set the `fill` attribute on the `<svg>` element to `fill="#98A1B2"`
3) CAREFULLY: On each of the child elements inside of `<svg>`, remove the `fill` attribute if it equals `fill="#98A1B2"`. 
Some child elements `fill` will be set to `white` or other colors and those should probably be left alone.
4) Run the entire icon folder through the [SVGO](https://github.com/svg/svgo) optimizer by running `svgo -f ./src/components/Icon/icons`. Note that the path is 
relative, and it may need to change depending on your CD.
5) In `Icons/index.tsx`, import your new icon svg file(s) and update the `iconComponentMap`.

### Example of Steps 2-3

---

*Original File*
```xml
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="..." fill="#98A1B2"/>
<path d="..." fill="#98A1B2"/>
<path d="..." fill="#98A1B2"/>
</svg>
```

*Modified File*
```xml
<svg width="22" height="22" viewBox="0 0 22 22" fill="#98A1B2" xmlns="http://www.w3.org/2000/svg">
  <path d="..." />
  <path d="..." />
  <path d="..." />
</svg>
```

---

*Original File*
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="5" width="4" height="14" fill="white"/>
  <path d="..." fill="#98A1B2"/>
</svg>
```

*Modified File*
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="#98A1B2" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="5" width="4" height="14" fill="white"/>
  <path d="..."/>
</svg>
```