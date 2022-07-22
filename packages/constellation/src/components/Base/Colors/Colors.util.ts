// This retrieves all the --color CSS vars from the currently loaded stylesheets and returns them as an array.

export const getCSSVars = (container: string) =>
  Array.from(document.styleSheets)
    .filter((sheet) => sheet.href === null || sheet.href.startsWith(window.location.origin))
    .reduce((acc: string[], sheet: CSSStyleSheet) => {
      const cssRules = Object.values(sheet.cssRules) as [CSSStyleRule]

      return [
        ...acc,
        ...cssRules.reduce(
          (def: string[], rule: CSSStyleRule) =>
            rule.selectorText === container
              ? [...def, ...Array.from(rule.style).filter((name) => name.startsWith('--color'))]
              : def,
          [],
        ),
      ]
    }, []) as unknown as [string]
