import { useMemo } from 'react'

export const useEdgeInsetResolver = (
  all: number | undefined,
  axis: number | undefined,
  edge: number,
): number =>
  useMemo(() => {
    if (all !== undefined) {
      return all
    }

    if (axis !== undefined) {
      return axis
    }

    return edge
  }, [all, axis, edge])
