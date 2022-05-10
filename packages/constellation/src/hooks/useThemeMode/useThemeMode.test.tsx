import { renderHook } from '@testing-library/react-hooks'
import { darkTheme, lightTheme } from 'themes'

import { useThemeMode } from '.'
import { createMatchMediaMock } from './mocks/matchMedia'

describe('useThemeMode()', () => {
  const matchMediaMock = createMatchMediaMock()

  afterEach(() => {
    matchMediaMock.reset()
  })

  describe('When system theme is light', () => {
    beforeEach(() => {
      matchMediaMock.mock({
        matches: false,
      })
    })

    describe('When mode is light', () => {
      it('Should return the light color', () => {
        const { result } = renderHook(() => useThemeMode('light'))

        expect(result.current).toBe(lightTheme)
      })
    })

    describe('When mode is dark', () => {
      it('Should return the dark color', () => {
        const { result } = renderHook(() => useThemeMode('dark'))

        expect(result.current).toBe(darkTheme)
      })
    })

    describe('When mode is auto', () => {
      it('Should return the light mode', () => {
        const { result } = renderHook(() => useThemeMode('auto'))

        expect(result.current).toBe(lightTheme)
      })
    })
  })

  describe('When system theme is dark', () => {
    beforeEach(() => {
      matchMediaMock.mock({
        matches: true,
      })
    })

    describe('When mode is light', () => {
      it('Should return the light color', () => {
        const { result } = renderHook(() => useThemeMode('light'))

        expect(result.current).toBe(lightTheme)
      })
    })

    describe('When mode is dark', () => {
      it('Should return the dark color', () => {
        const { result } = renderHook(() => useThemeMode('dark'))

        expect(result.current).toBe(darkTheme)
      })
    })

    describe('When mode is auto', () => {
      it('Should return the light mode', () => {
        const { result } = renderHook(() => useThemeMode('auto'))

        expect(result.current).toBe(darkTheme)
      })
    })
  })
})
