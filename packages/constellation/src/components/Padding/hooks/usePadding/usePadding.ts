import { useEdgeInsetResolver } from '../useEdgeInsetResolver'
import { PaddingHook } from './usePadding.types'

const usePadding: PaddingHook = ({
  all,
  bottom = 0,
  horizontal,
  left = 0,
  right = 0,
  top = 0,
  vertical,
}) => {
  const paddingTop = useEdgeInsetResolver(all, vertical, top)
  const paddingBottom = useEdgeInsetResolver(all, vertical, bottom)
  const paddingLeft = useEdgeInsetResolver(all, horizontal, left)
  const paddingRight = useEdgeInsetResolver(all, horizontal, right)

  return {
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
  }
}

export default usePadding
