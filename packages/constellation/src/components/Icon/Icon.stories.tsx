import { ComponentStory } from '@storybook/react'
import React from 'react'

import { colors } from '../../colors'
import { Icon as Component, iconSize } from '.'
import { IconName } from './types'

export default {
  argTypes: {
    bgColor: {
      description: 'color of the background',
      options: Object.keys(colors),
      type: 'select',
    },
    color: {
      description: 'color of the icon',
      options: Object.keys(colors),
      type: 'select',
    },
    name: {
      description: 'name of the icon',
      options: Object.values(IconName),
      type: 'select',
    },
    size: {
      description: 'size of the icon',
      options: Object.keys(iconSize),
      type: 'select',
    },
  },
  component: Component,
  title: 'Components/Icon',
}

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />

export const Icon = Template.bind({})

Icon.args = {
  name: IconName.BLOCKCHAIN,
  size: 'md',
}

export const AllIcons: ComponentStory<typeof Component> = (args) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', fontFamily: 'helvetica', fontSize: '0.8rem' }}>
      {Object.values(IconName).map((name) => (
        <div
          style={{ height: '5rem', margin: '1rem', textAlign: 'center', width: '5rem' }}
          key={name}
        >
          <Component {...args} name={name} />
          <div style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{name}</div>
        </div>
      ))}
    </div>
  )
}
