const debounceWithMaxCount = <T extends (...args: any[]) => ReturnType<T>>(
  debouncedCallback: T,
  waitFor: number,
  maxCount: number
): ((...args: Parameters<T>) => ReturnType<T>) => {
  let timeout: NodeJS.Timeout

  let counter = 0

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any

    if (timeout) clearTimeout(timeout)

    if (counter >= maxCount - 1) {
      counter = 0

      clearTimeout(timeout)

      return debouncedCallback(...args)
    }

    timeout = setTimeout(() => {
      counter = 0

      result = debouncedCallback(...args)
    }, waitFor)

    counter += 1

    return result
  }
}

export default debounceWithMaxCount
