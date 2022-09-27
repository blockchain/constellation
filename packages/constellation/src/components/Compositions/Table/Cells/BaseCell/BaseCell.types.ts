import { FC } from 'react'

type Props = {
  /**
   * Used to change the alignment of the cell. Defaults to left.
   */
  align?: 'left' | 'center' | 'right'
  /*
    Controlled by the Row component. isHeader is true when the cell is in a header row.
    When isHeader is true, the cell will render as a th otherwise it will render as a td.
  */
  isHeader?: boolean
  /**
   * If sort exists ans isHeader is true, the cell will render a small arrow button
   * that will run the toggleSort function.
   */
  sort?: 'asc' | 'desc' | undefined | false
  /**
   * toggleSort is run every time the sort button is clicked. This should be used with something
   * like react-table to handle sorting the table.
   * eg: App side use useState to store the sort state, pass the sort state to react-table and
   * use toggleSort to update the sort state.
   */
  toggleSort?: (event: unknown) => void | (() => void)
  /**
   * value is used here to help with the sorting of a certain column
   */
  value?: string | number
  /**
   * The width of the cell, auto fills the available space. Content sets the with of the cell to
   * the width of the content. Defaults to auto.
   */
  width?: 'auto' | 'content' | 'fill'
}
type Component = FC<Props>

export type { Component, Props }
