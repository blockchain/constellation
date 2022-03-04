export type SetStoreItemValue<T> = (value: T | ((value: T) => T)) => void

export type UseLocalStorageReturn<T> = [T, SetStoreItemValue<T>]

export type StoreItem<T> = {
  key: string
  value: T
}
