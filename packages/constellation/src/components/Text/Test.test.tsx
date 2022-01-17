import { render, screen } from '@testing-library/react'
import React from 'react'

import Text from '.'

describe('Text Component', () => {
  test('Render with no errors', () => {
    render(<Text>Text</Text>)

    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
