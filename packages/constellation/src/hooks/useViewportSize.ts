import { useCallback, useEffect, useState } from 'react'

const eventListenerOptions = {
  passive: true
}

const isBrowser = typeof window !== 'undefined'

const useWindowEvent = <K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) => {
  useEffect(() => {
    window.addEventListener(type, listener, options)

    return () => window.removeEventListener(type, listener, options)
  }, [listener, options, type])
}

const useViewportSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: isBrowser ? window.innerHeight : 0,
    width: isBrowser ? window.innerWidth : 0
  })

  const setSize = useCallback(() => {
    setWindowSize({
      height: window.innerHeight || 0,
      width: window.innerWidth || 0
    })
  }, [])

  useWindowEvent('resize', setSize, eventListenerOptions)

  useWindowEvent('orientationchange', setSize, eventListenerOptions)

  return windowSize
}

export default useViewportSize
