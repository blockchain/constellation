import cx from 'classnames'
import React from 'react'

import { FlexGrowComponent } from './FlexGrow.types'

const FlexGrow: FlexGrowComponent = ({ children, grow, shrink }) => {
  const componentStyle = {} as React.CSSProperties

  if (grow && grow > 1) {
    componentStyle.flexGrow = grow as number
  }

  if (shrink && shrink > 1) {
    componentStyle.flexShrink = shrink as number
  }

  return (
    <div
      className={cx(
        'constellation',
        { 'flex-grow': grow === true || grow === 1 },
        { 'flex-grow-0': grow === false || grow === 0 },
        { 'flex-shrink': shrink === true || shrink === 1 },
        { 'flex-shrink-0': shrink === false || shrink === 0 },
      )}
      style={componentStyle}
    >
      {children}
    </div>
  )
}

export default FlexGrow
