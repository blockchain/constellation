import { render } from '@testing-library/react'
import React from 'react'

import { SeparatedList } from './SeparatedList'

describe('<SeparatedList />', () => {
  it('Should not render any separator when there is a single child', () => {
    const separatorBuilderSpy = jest.fn(() => <div data-testid='separator' />)

    const { getByText, queryByTestId } = render(
      <SeparatedList separatorBuilder={separatorBuilderSpy}>
        <span>Item 1</span>
      </SeparatedList>,
    )

    expect(getByText('Item 1')).toBeInTheDocument()
    expect(queryByTestId('separator')).not.toBeInTheDocument()
    expect(separatorBuilderSpy).not.toHaveBeenCalled()
  })

  it('Should render all 3 children and only 2 separators', () => {
    const separatorBuilderSpy = jest.fn(() => <div data-testid='separator' />)

    const { getByText, queryAllByTestId } = render(
      <SeparatedList separatorBuilder={separatorBuilderSpy}>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </SeparatedList>,
    )

    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
    expect(getByText('Item 3')).toBeInTheDocument()
    expect(queryAllByTestId('separator')).toHaveLength(2)
    expect(separatorBuilderSpy).toHaveBeenCalledTimes(2)
    expect(separatorBuilderSpy.mock.calls[0]).toEqual([0])
    expect(separatorBuilderSpy.mock.calls[1]).toEqual([1])
  })
})
