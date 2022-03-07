import { useCallback, useState } from 'react'

import useWindowEvent from '../useWindowEvent'
import { SetStoreItemValue, StoreItem, UseLocalStorageReturn } from './types'
import { dispatchLocalStoreEvent } from './utils/dispatchLocalStoreEvent'
import { readStoreItem } from './utils/readStoreItem'
import { saveStoreItem } from './utils/saveStoreItem'

export const useLocalStorage = <T extends unknown = unknown>(
  key: string,
  initialValue: T,
): UseLocalStorageReturn<T> => {
  const [storeItem, setStoreItem] = useState<StoreItem<T>>(readStoreItem(key, initialValue))

  const setStoreItemValue: SetStoreItemValue<T> = useCallback(
    (newValue) => {
      const resolvedValue = newValue instanceof Function ? newValue(storeItem.value) : newValue

      saveStoreItem({
        ...storeItem,
        value: resolvedValue,
      })

      dispatchLocalStoreEvent()
    },
    [storeItem],
  )

  const reloadFromStore = useCallback(() => {
    const lastestStoreItem = readStoreItem<T>(key, initialValue)

    if (lastestStoreItem.value !== storeItem.value) {
      setStoreItem(lastestStoreItem)
    }
  }, [setStoreItem, key, storeItem, initialValue])

  useWindowEvent('storage', reloadFromStore)

  return [storeItem.value, setStoreItemValue]
}

export type UseLocalStorage = typeof useLocalStorage
