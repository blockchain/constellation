import { useMemo } from 'react'

export const useEdgeInsetResolver = (
  all: number | undefined,
  axis: number | undefined,
  edge: number,
): string =>
  useMemo(() => {
    if (all !== undefined) {
      return `${all}rem`
    }

    if (axis !== undefined) {
      return `${axis}rem`
    }

    return `${edge}rem`
  }, [all, axis, edge])
