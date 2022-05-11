import { FC, ReactNode } from 'react'

export type SeparatorBuilder = (index: number) => ReactNode

export type SeparatedListProps = {
  includeEndSeparator?: boolean
  includeStartSeparator?: boolean
  separatorBuilder?: SeparatorBuilder
}

export type SeparatedListComponent = FC<SeparatedListProps>
