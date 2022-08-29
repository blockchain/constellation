import { ComponentMeta } from '@storybook/react'
import React, { FC } from 'react'

import { SemanticColors } from '../../components/Base/Colors'
import { Text } from '../../components/Base/Typography'
import { useLocalStorage } from '.'

const useLocalStorageStoriesMeta: ComponentMeta<FC> = {
  title: 'hooks/useLocalStorage',
}

/**
 * The useLocalStorage hook value will be in sync with every other components that uses the same key
 * So if a new value is set in one component, that change will be reflected in other components.
 */
const UsageExample = () => {
  const [themeMode, setThemeMode] = useLocalStorage<'auto' | 'light' | 'dark'>('themeMode', 'light')

  return (
    <div>
      <Text color={SemanticColors.primary}>Current theme mode: {themeMode}</Text>

      <br />
      <button type='button' onClick={() => setThemeMode('dark')}>
        Dark
      </button>
      <button type='button' onClick={() => setThemeMode('light')}>
        Light
      </button>
      <button type='button' onClick={() => setThemeMode('auto')}>
        Sync with system
      </button>
    </div>
  )
}

/**
 * Persist the state with local storage so that it remains after a page refresh. This can be useful for a dark theme or to record session information. This hook is used in the same way as useState except that you must pass the storage key in the 1st parameter
 */
const MultipleSubscribers = () => {
  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
      <UsageExample />

      <UsageExample />
    </div>
  )
}

export { MultipleSubscribers, UsageExample }

export default useLocalStorageStoriesMeta
