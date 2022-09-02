import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import React, { useEffect, useMemo, useRef } from 'react'

import { InternalLogoComponent } from './Logo.types'

const InternalLogo: InternalLogoComponent = ({
  altText,
  backgroundColor,
  circle,
  className,
  icon,
  imgSrc,
  size = 'base',
  text,
  variant = 'base',
}) => {
  const genSizes = (
    singeVariant: 'base' | 'large' | 'small',
  ): { badge: string; base: string; double: string } => {
    switch (singeVariant) {
      case 'large':
        return {
          badge: 'w-4 h-4',
          base: 'w-10 h-10',
          double: 'w-8 h-8',
        }
      case 'small':
        return {
          badge: 'w-2 h-2',
          base: 'w-5 h-5',
          double: 'w-4 h-4',
        }
      default:
        return {
          badge: 'w-3 h-3',
          base: 'w-8 h-8',
          double: 'w-6 h-6',
        }
    }
  }

  const variantStyles = useMemo(() => genSizes(size), [size])

  const containerRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const [textScale, setTextScale] = React.useState(1)

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const newScale =
        (containerRef.current.offsetWidth - containerRef.current.offsetWidth * 0.2) /
        textRef.current.offsetWidth

      if (newScale !== textScale) {
        setTextScale(newScale)
      }
    }
  }, [containerRef, textRef, textScale])

  return (
    <Avatar.Root
      className={cx(
        { '!rounded-full': circle },
        'rounded flex justify-center items-center bg-primary relative overflow-hidden',
        variantStyles[variant],
        className,
      )}
      style={backgroundColor && { backgroundColor }}
      ref={containerRef}
    >
      <>
        <Avatar.Image src={imgSrc} className='w-full h-full object-cover' alt={altText} />
        <Avatar.Fallback className='min-w-full text-center flex'>
          {(icon &&
            (size === 'large' && React.isValidElement(icon)
              ? React.cloneElement(icon, { size: 'medium' })
              : icon)) || (
            <span
              className='text-white-000 text-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              style={{ transform: `translate(-50%, -50%) scale(${textScale})` }}
              ref={textRef}
            >
              {text}
            </span>
          )}
        </Avatar.Fallback>
      </>
    </Avatar.Root>
  )
}

export default InternalLogo
