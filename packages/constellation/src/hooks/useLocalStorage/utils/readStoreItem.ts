import { StoreItem } from '../types'

const readStoreItem = <T>(key: string, initialValue: T): StoreItem<T> => {
  const storedJson = window.localStorage.getItem(key)

  const initialStoreItem: StoreItem<T> = {
    key,
    value: initialValue,
  }

  if (storedJson == null) return initialStoreItem

  try {
    return JSON.parse(storedJson)
  } catch (err) {
    return initialStoreItem
  }
}

export default readStoreItem
