import { ComponentStory } from '@storybook/react'
import React from 'react'

import Component, { iconSize } from '.'
import { IconName } from './types'

export default {
  argTypes: {
    color: {
      control: 'color',
      description: 'color of the icon',
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
  name: IconName.BLOCKCHAIN_CIRCLE,
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
          <Component {...args} name={name} size='md' />
          <div style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{name}</div>
        </div>
      ))}
    </div>
  )
}
