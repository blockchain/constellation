import React, { useEffect, useRef, useState } from 'react'
import { useDarkMode } from 'storybook-dark-mode'

const Color = ({ colorVar }: { colorVar: string }) => {
  const colorRef = useRef<HTMLDivElement>(null)
  const [color, setColor] = useState({ id: '', title: '', value: '' })
  const isDark = useDarkMode() // NOTE: useDarkMode is storybook specific as this component is not meant to be exported

  useEffect(() => {
    const id = colorVar.split('--color-')[1]
    let value = ''
    if (colorRef.current) {
      value = window.getComputedStyle(colorRef.current).getPropertyValue(colorVar)
    }

    setColor({
      id,
      title: id.replace(/-/g, ' '),
      value,
    })
  }, [colorRef, colorVar, isDark])

  return (
    <div className='drop-shadow-control bg-background-light w-48 overflow-hidden'>
      <div className='w-full h-24' style={{ backgroundColor: `var(${colorVar})` }} ref={colorRef} />
      <p className='capitalize text-title ml-2 my-0 mt-2'>{color.title}</p>
      <p className='text-body ml-2 text-sm my-2'>ID: {color.id}</p>
      <p className='text-body ml-2 text-sm my-0 pb-2'>{color.value}</p>
    </div>
  )
}

export default Color
