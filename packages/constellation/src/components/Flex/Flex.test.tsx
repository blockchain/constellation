import { render } from '@testing-library/react'
import React from 'react'

import { Flex } from '.'

describe('Flex', () => {
  it('Should create the flex element with the correct flex parameters', () => {
    const { container } = render(
      <Flex
        data-e2e='hello'
        gap={12}
        flexDirection='column'
        alignItems='center'
        justifyContent='space-between'
      />,
    )

    const style = container.firstElementChild?.getAttribute('style')

    expect(style).toEqual(
      'align-items: center; display: flex; flex-direction: column; gap: 12px; justify-content: space-between;',
    )
  })
})
