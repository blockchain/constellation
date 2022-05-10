import React, { Children } from 'react'

import { Separator } from '../Separator'
import { SeparatedListComponent, SeparatorBuilder } from './SeparatedList.types'

const defaultSeparatorBuilder: SeparatorBuilder = () => <Separator />

export const SeparatedList: SeparatedListComponent = ({
  children,
  separatorBuilder = defaultSeparatorBuilder,
  includeEndSeparator = false,
  includeStartSeparator = false,
}) => {
  const lastIndex = Children.count(children) - 1

  return (
    <>
      {Children.map(children, (child, index) => {
        if (index === 0 && includeStartSeparator) {
          return (
            <>
              {separatorBuilder(index - 1)}
              {child}
            </>
          )
        }

        if (index === 0) return child

        if (lastIndex === index && includeEndSeparator) {
          return (
            <>
              {separatorBuilder(index - 1)}
              {child}
              {separatorBuilder(index - 1)}
            </>
          )
        }

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
