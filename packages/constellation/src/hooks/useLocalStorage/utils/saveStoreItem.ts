import { StoreItem } from '../types'

const saveStoreItem = <T>(storeItem: StoreItem<T>): StoreItem<T> => {
  const jsonValue = JSON.stringify(storeItem)

  window.localStorage.setItem(storeItem.key, jsonValue)

  return storeItem
}

export default saveStoreItem
