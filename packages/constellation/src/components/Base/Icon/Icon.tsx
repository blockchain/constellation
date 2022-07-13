import React from 'react'

import { Props } from './Icon.types'

/**
 * Icons are used to represent common actions, such as "Add/Remove",
 * "Open/Close", or concepts such as "Location" or "User". The component
 * renders an inline SVG. Where possible, it is preferable to import and use
 * only the individual Icon components required.
 *
 * This function is used to generate an Icon component from an SVG. All props are forwarded to the inner `<svg>` element.
 * This includes all appropriate HTML attributes or aria tags.
 */
export const createIconComponent =
  (Icon: React.ElementType): React.FC<Props> =>
  ({ color, size = 1, titleId, ...otherProps }) =>
    (
      <Icon
        {...{
          color: color ? `${color}` : 'inherit',
        }}
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        width={`${size}rem`}
        height={`${size}rem`}
        aria-labelledby={titleId}
        focusable='false'
        {...otherProps}
      />
    )
