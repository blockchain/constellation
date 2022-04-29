import { Padding } from 'components/Padding'
import { Text } from 'components/Text'
import React from 'react'

import { CreateTypographyComponentUtility } from './createTypographyComponent.types'

const createTypographyComponent: CreateTypographyComponentUtility =
  ({ padding, text }) =>
  ({ children }) => {
    const textDom = <Text {...text}>{children}</Text>

    if (padding) {
      return <Padding {...padding}>{textDom}</Padding>
    }

    return textDom
  }

export default createTypographyComponent
