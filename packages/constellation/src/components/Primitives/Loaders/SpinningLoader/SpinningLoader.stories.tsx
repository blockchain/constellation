import { ComponentMeta, ComponentStory } from '@storybook/react'
import cx from 'classnames'
import React from 'react'

import { SpinningLoader, SpinningLoaderComponent } from '.'

export default {
  argTypes: {
    borderWidth: {
      control: { type: 'radio' },
      options: ['default', 'large', 'small', 'xsmall'],
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
  args: {
    borderWidth: 'default',
    size: 'default',
    variant: 'color',
  },
  component: SpinningLoader,
  title: 'Primitives/Loaders',
} as ComponentMeta<SpinningLoaderComponent>

const Template: ComponentStory<SpinningLoaderComponent> = ({ borderWidth, size, variant }) => {
  return (
    <div
      className={cx('constellation w-72 h-72 p-4 grid place-items-center', {
        'bg-grey-800 mode-dark:bg-dark-900': variant === 'monotone',
      })}
    >
      <SpinningLoader variant={variant} size={size} borderWidth={borderWidth} />
    </div>
  )
}

export const spinningLoader = Template.bind({})
