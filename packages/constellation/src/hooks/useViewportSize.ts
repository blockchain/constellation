import { useCallback, useState } from 'react'

import { debounce } from '../utils'
import useWindowEvent from './useWindowEvent'

const eventListenerOptions = {
  passive: true
}

const isBrowser = typeof window !== 'undefined'

const useViewportSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: isBrowser ? window.innerHeight : 0,
    width: isBrowser ? window.innerWidth : 0
  })

  const setSize = useCallback((e: Event) => {
    setWindowSize({
      height: window.innerHeight || 0,
      width: window.innerWidth || 0
    })
  }, [])

  useWindowEvent('resize', debounce(setSize, 500), eventListenerOptions)

  useWindowEvent('orientationchange', setSize, eventListenerOptions)

  return windowSize
}

export default useViewportSize
