import React, { useEffect, useState } from 'react'

import { ColorsComponent } from './Colors.types'
import { getCSSVars } from './Colors.util'
import ColorSection from './ColorSection'

const Colors: ColorsComponent = () => {
  const [colorsState, setColorsState] = useState<{ colors: [string]; title: string }[]>()

  useEffect(() => {
    const semanticColors = getCSSVars('.mode-dark')
    const colors = getCSSVars(':root')

    setColorsState([
      { colors: semanticColors, title: 'Semantic Colors' },
      {
        colors: colors.filter((color) => color.includes('--color-overlay')) as [string],
        title: 'Overlay',
      },
      {
        colors: colors.filter((color) => color.includes('--color-blue')) as [string],
        title: 'Blue',
      },
      {
        colors: colors.filter((color) => color.includes('--color-green')) as [string],
        title: 'Green',
      },
      {
        colors: colors.filter((color) => color.includes('--color-red')) as [string],
        title: 'Red',
      },
      {
        colors: colors.filter((color) => color.includes('--color-orange')) as [string],
        title: 'Orange',
      },
      {
        colors: colors.filter((color) => color.includes('--color-purple')) as [string],
        title: 'Purple',
      },
      {
        colors: colors.filter((color) => color.includes('--color-teal')) as [string],
        title: 'Teal',
      },
      {
        colors: colors.filter((color) => color.includes('--color-grey')) as [string],
        title: 'Grey',
      },
    ])
  }, [])

  return (
    <div className='constellation flex flex-row flex-nowrap'>
      {colorsState?.map((colors, index) => (
        <ColorSection colors={colors.colors} title={colors.title} key={index} />
      ))}
    </div>
  )
}

export default Colors
