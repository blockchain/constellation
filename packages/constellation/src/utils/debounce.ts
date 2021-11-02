const debounce = <T extends unknown[]>(
  callback: (...args: T[]) => void,
  wait: number,
  maxCount = Infinity
) => {
  let timer: ReturnType<typeof setTimeout>

  let counter = 0

  return (...args: T[]): Promise<void> => {
    if (timer) clearTimeout(timer)

    if (counter >= maxCount) {
      counter = 0

      clearTimeout(timer)

      return new Promise((resolve) => {
        timer = setTimeout(() => resolve(callback(...args)), 0)
      })
    }

    counter += 1

    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(callback(...args)), wait)
    })
  }
}

export default debounce
