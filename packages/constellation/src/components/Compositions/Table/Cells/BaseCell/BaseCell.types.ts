import { FC } from 'react'

type Props = {
  /*
    Controled by the Row component. isHeader is true when the cell is in a header row.
    When isHeader is true, the cell will render as a th otherwise it will render as a td.
  */
  isHeader?: boolean
}
type Component = FC<Props>

export type { Component, Props }
