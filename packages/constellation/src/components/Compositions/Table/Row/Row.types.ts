import React from 'react'

export interface Props {
  /**
   * Changes the style of the row background and sets the isHeader prop on the cells.
   */
  header?: boolean
}

export type Component = React.FC<Props>
