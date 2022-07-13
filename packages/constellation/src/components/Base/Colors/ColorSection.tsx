import React from 'react'

import Color from './Color'

const ColorSection = ({ colors, title }: { colors: [string]; title: string }) => {
  return (
    <div className='max-w-4xl flex-shrink-0'>
      <h2 className='text-title'>{title}</h2>

      <div className='flex flex-wrap gap-4 mt-5'>
        {colors?.map((color, index) => (
          <Color colorVar={color} key={index} />
        ))}
      </div>
    </div>
  )
}
export default ColorSection
