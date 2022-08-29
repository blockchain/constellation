import { useEffect } from 'react'

const useWindowEvent = <K extends keyof WindowEventMap>(
  type: K,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
) => {
  useEffect(() => {
    window.addEventListener(type, listener, options)

    return () => window.removeEventListener(type, listener, options)
  }, [listener, options, type])
}

export default useWindowEvent
