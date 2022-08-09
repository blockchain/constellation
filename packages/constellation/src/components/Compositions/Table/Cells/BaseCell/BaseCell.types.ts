import { FC } from 'react'

type Props = {
  /*
    Controled by the Row component. isHeader is true when the cell is in a header row.
    When isHeader is true, the cell will render as a th otherwise it will render as a td.
  */
  isHeader?: boolean
  /**
   * If sort exists ans isHeader is true, the cell will render a small arrow button
   * that will run the toggleSort function.
   */
  sort?: 'up' | 'down' | false
  /**
   * toggleSort is run every time the sort button is clicked.
   */
  toggleSort?: () => void
}
type Component = FC<Props>

export type { Component, Props }
