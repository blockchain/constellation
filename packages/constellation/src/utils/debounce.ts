const debounce = <T extends unknown, U extends void>(
  callback: (...args: T[]) => PromiseLike<U> | U,
  wait = 500,
  maxCount = Infinity
) => {
  let timer: ReturnType<typeof setTimeout>

  let counter = 0

  return (...args: T[]): PromiseLike<U> => {
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
