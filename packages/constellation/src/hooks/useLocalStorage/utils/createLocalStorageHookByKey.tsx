import { UseLocalStorageReturn } from '../types'
import { useLocalStorage } from '../useLocalStorage'

export const createLocalStorageHookByKey =
  <T,>(key: string, initialValue: T) =>
  (): UseLocalStorageReturn<T> =>
    useLocalStorage<T>(key, initialValue)
