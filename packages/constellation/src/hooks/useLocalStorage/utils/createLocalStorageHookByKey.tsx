import { UseLocalStorageReturn } from '../types'
import useLocalStorage from '../useLocalStorage'

const createLocalStorageHookByKey =
  <T,>(key: string, initialValue: T) =>
  (): UseLocalStorageReturn<T> =>
    useLocalStorage<T>(key, initialValue)

export default createLocalStorageHookByKey
