import { FC, ReactNode } from 'react'

export type SeparatorBuilder = (index: number) => ReactNode

export type SeparatedListProps = {
  separatorBuilder?: SeparatorBuilder
}

export type SeparatedListComponent = FC<SeparatedListProps>
