import React, { Children } from 'react'

import Separator from '../Separator'
import { SeparatedListComponent, SeparatorBuilder } from './types'

const defaultSeparatorBuilder: SeparatorBuilder = () => <Separator variant='medium' />

export const SeparatedList: SeparatedListComponent = ({
  children,
  separatorBuilder = defaultSeparatorBuilder,
}) => {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (index === 0) return child

        return (
          <>
            {separatorBuilder(index - 1)}
            {child}
          </>
        )
      })}
    </>
  )
}
