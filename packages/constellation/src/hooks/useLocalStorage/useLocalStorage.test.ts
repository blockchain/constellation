import { act, renderHook } from '@testing-library/react-hooks'

import { createLocalStorageHookByKey } from '.'
import { StoreItem } from './types'

describe('#useLocalStorage()', () => {
  const useTestHook = createLocalStorageHookByKey<'test_1' | 'test_2'>('test_mode', 'test_1')

  it('should load the initial value from store', () => {
    const testStoreItem: StoreItem<string> = {
      key: 'test_mode',
      value: 'test_2',
    }

    localStorage.setItem(testStoreItem.key, JSON.stringify(testStoreItem))

    const { result } = renderHook(() => useTestHook())

    const [value] = result.current

    expect(value).toEqual(testStoreItem.value)
  })

  it('should use the initial value when the store is empty', () => {
    const { result } = renderHook(() => useTestHook())

    const [value] = result.current

    expect(value).toEqual('test_1')
  })

  it('should save new value to store', async () => {
    const { result } = renderHook(() => useTestHook())

    const value = result.current[0]
    const setValue = result.current[1]

    expect(value).toEqual('test_1')

    act(() => setValue('test_2'))

    expect(dispatchEvent).toHaveBeenCalledWith(new Event('storage'))

    const [newValue] = result.current

    expect(newValue).toEqual('test_2')
  })

  it("should dispath an 'storage' event when store is updated", () => {
    const { result } = renderHook(() => useTestHook())

    const setValue = result.current[1]

    act(() => setValue('test_2'))

    expect(dispatchEvent).toHaveBeenCalledWith(new Event('storage'))
  })
})
