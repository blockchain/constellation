import React, { useEffect, useState } from 'react'

import { ColorsComponent } from './Slider.types'
import { getCSSVars } from './Colors.util'
import ColorSection from './ColorSection'

const Colors: ColorsComponent = () => {
  const [colorsState, setColorsState] = useState<{ title: string; colors: [string] }[]>()

  useEffect(() => {
    const semanticColors = getCSSVars('.theme-dark')
    const colors = getCSSVars(':root')

    setColorsState([
      { title: 'Semantic Colors', colors: semanticColors },
      {
        title: 'Overlay',
        colors: colors.filter(color => color.includes('--color-overlay')) as [string],
      },
      {
        title: 'Blue',
        colors: colors.filter(color => color.includes('--color-blue')) as [string],
      },
      {
        title: 'Green',
        colors: colors.filter(color => color.includes('--color-green')) as [string],
      },
      {
        title: 'Red',
        colors: colors.filter(color => color.includes('--color-red')) as [string],
      },
      {
        title: 'Orange',
        colors: colors.filter(color => color.includes('--color-orange')) as [string],
      },
      {
        title: 'Purple',
        colors: colors.filter(color => color.includes('--color-purple')) as [string],
      },
      {
        title: 'Teal',
        colors: colors.filter(color => color.includes('--color-teal')) as [string],
      },
      {
        title: 'Grey',
        colors: colors.filter(color => color.includes('--color-grey')) as [string],
      },
    ])
  }, [])

  return (
    <div className='flex flex-row flex-nowrap'>
      {colorsState?.map((colors, index) => (
        <ColorSection colors={colors.colors} title={colors.title} key={index} />
      ))}
    </div>
  )
}

export default Colors
