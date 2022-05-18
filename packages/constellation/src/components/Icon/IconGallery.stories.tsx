import * as Icons from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { colors } from 'colors'
import { Icon } from 'components'
import { Typography } from 'components/Typography'
import React, { FC } from 'react'

import { IconComponent } from './Icon.types'

export default {
  argTypes: {
    color: {
      control: {
        type: 'radio',
      },
      defaultValue: 'primary',
      description: 'The rendering color of the icon.',
      options: ['primary'],
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'medium',
      description: 'The size of the rendered the icon.',
      options: ['large', 'medium', 'small'],
    },
  },
  component: Icon,
  title: 'Components/Icon/Gallery',
} as ComponentMeta<IconComponent>

export const Gallery: ComponentStory<IconComponent> = ({ color, size }) => {
  const iconNames: string[] = Object.keys(Icons)
  const icons: FC[] = Object.values(Icons)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '16px',
        width: '100%',
      }}
    >
      {iconNames.map((iconName: string, index: number) => {
        const IconSvg = icons[index]

        if (!IconSvg) return null

        return (
          <div
            key={iconName}
            style={{
              alignItems: 'center',
              border: '1px solid #dcdcdc',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '16px 8px',
              width: '160px',
            }}
          >
            <Icon label={iconName} color={color} size={size}>
              <IconSvg />
            </Icon>

            <Typography.Paragraph2 color='secondary'>{iconName}</Typography.Paragraph2>
          </div>
        )
      })}
    </div>
  )
}

Gallery.parameters = {
  controls: { exclude: 'variant' },
}
