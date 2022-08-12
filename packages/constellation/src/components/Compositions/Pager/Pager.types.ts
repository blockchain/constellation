import { FC } from 'react'

interface IndicatorProps {
  index: number
  onChange: (page: number) => void
  selected: boolean
}

interface ArrowProps {
  direction: 'left' | 'right'
  disabled?: boolean
  onChange: (page: number) => void
  selectedPage: number
}

interface PagerProps {
  /**
   * The callback function to be calledwhen the use clicks on anindicator or an arrow.
   * The callback function receives the new page number as an argument
   */
  onChange: (page: number) => void
  /**
   * The current selected page number
   */
  selectedPage: number
  /**
   * The total number of pages.
   */
  totalPages: number
}

type PagerComponent = FC<PagerProps>

export type { ArrowProps, IndicatorProps, PagerComponent, PagerProps }
