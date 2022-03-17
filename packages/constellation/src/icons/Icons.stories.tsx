import { ComponentMeta, ComponentStory } from '@storybook/react'
import { colors } from 'colors'
import Icon from 'components/Icon'
import Text from 'components/Text'
import React, { FC } from 'react'

import * as Icons from '.'

const iconsStoriesMeta: ComponentMeta<typeof Icon> = {
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      description: 'The rendering color of the icon.',
      options: Object.keys(colors),
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'sm',
      description: 'The size of the rendered the icon.',
    },
  },
  component: Icon,
  title: 'Components/Icon',
}

export const All: ComponentStory<typeof Icon> = ({ color, size }) => {
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
              padding: '16px 8px',
              width: '125px',
            }}
          >
            <Icon label={iconName} color={color} size={size}>
              <IconSvg />
            </Icon>

            <Text color='grey700' variant='paragraph-2' css={{ marginTop: '16px' }}>
              {iconName}
            </Text>
          </div>
        )
      })}
    </div>
  )
}

All.parameters = {
  controls: { exclude: 'variant' },
}

export default iconsStoriesMeta
