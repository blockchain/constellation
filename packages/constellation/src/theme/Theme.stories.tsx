import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from 'components/Text'
import React, { useState } from 'react'
import {
  createDarkTheme,
  createLightTheme,
  styled,
  ThemeMode,
  ThemeProvider,
  ThemeProviderComponent,
  useThemeMode,
} from 'theme'

const themeStoriesMeta: ComponentMeta<ThemeProviderComponent> = {
  component: ThemeProvider,
  title: 'Theme',
}
const Wrapper = styled('div', { backgroundColor: 'white900' })

export const Default: ComponentStory<ThemeProviderComponent> = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  const theme = useThemeMode({
    darkThemeData: createDarkTheme(),
    lightThemeData: createLightTheme(),
    mode: themeMode,
  })

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div>
          <button type='button' onClick={() => setThemeMode('auto')}>
            Sync with system
          </button>

          <button type='button' onClick={() => setThemeMode('dark')}>
            Dark
          </button>

          <button type='button' onClick={() => setThemeMode('light')}>
            Light
          </button>
        </div>

        <Text>The quick brown fox jumps over the lazy dog 0123456789</Text>
      </Wrapper>
    </ThemeProvider>
  )
}

export default themeStoriesMeta
