import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { SpinningLoader, SpinningLoaderComponent } from '.'

export default {
  argTypes: {
    borderWidth: {
      control: { type: 'radio' },
      options: ['default', 'large', 'small'],
    },
    size: {
      control: { type: 'radio' },
      options: ['default', 'full', 'large', 'small'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['monotone', 'color'],
    },
  },
  component: SpinningLoader,
  title: 'Base/Loaders',
} as ComponentMeta<SpinningLoaderComponent>

const Template: ComponentStory<SpinningLoaderComponent> = ({ borderWidth, size, variant }) => {
  return (
    <div className='bg-body w-72 h-72 p-4 grid place-items-center'>
      <SpinningLoader variant={variant} size={size} borderWidth={borderWidth} />
    </div>
  )
}

export const spinningLoader = Template.bind({})
