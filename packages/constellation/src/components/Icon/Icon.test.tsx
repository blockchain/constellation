import { render, waitFor } from '@testing-library/react'
import { Icon } from 'components'
import React, { JSXElementConstructor, ReactElement } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from 'theme'
import { lightTheme } from 'themes'

const wrapper: JSXElementConstructor<{ children: ReactElement }> = ({ children }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
)

describe('Icon', () => {
  // Prevent error log in tests logs
  const consoleErrorFn = jest.spyOn(console, 'error').mockImplementation(() => jest.fn())

  afterAll(consoleErrorFn.mockRestore)

  it('Should use primary color as default color', () => {
    const { container } = render(
      <Icon label='test-icon'>
        <svg />
      </Icon>,
      {
        wrapper,
      },
    )

    const svg = container.querySelector('svg')

    expect(svg?.getAttribute('fill')).toEqual(lightTheme.icon.colors.primary)
  })

  it('Should allow for custom color', () => {
    const { container } = render(
      <Icon label='test-icon' color='#fff'>
        <svg />
      </Icon>,
      {
        wrapper,
      },
    )

    const svg = container.querySelector('svg')

    expect(svg?.getAttribute('fill')).toEqual('#fff')
  })

  it('Should throw error when multiple children are passed', async () => {
    const fallbackRender = jest.fn(() => null)

    render(
      <ErrorBoundary fallbackRender={fallbackRender}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Icon label='test-icon'>
          <svg />
          <svg />
        </Icon>
      </ErrorBoundary>,
      {
        wrapper,
      },
    )

    await waitFor(() => expect(fallbackRender).toHaveBeenCalled())

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { error } = fallbackRender.mock.calls[0][0]

    expect(error).toEqual(new Error('Icon can only take one svg children at a time.'))
  })
})
