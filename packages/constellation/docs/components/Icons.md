# Tracking

## Process to create new icons

1. Copy the SVG from Figma

2. Pass it through [SVGOMG]('https://jakearchibald.github.io/svgomg/')

3. Create a component for it on `/components/Icons`

4. Create default props and spread the rest

```js
    { color = 'currentColor', height = 24, width = 24, ...props }
```
