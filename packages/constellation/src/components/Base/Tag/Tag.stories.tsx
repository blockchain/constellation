import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Tag as TagComponent, TagComponentType } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      defaultValue: 'div',
      description: 'Allows for overriding the underlying DOM element ',
      options: ['div', 'button', 'a'],
    },
    content: {
      control: { type: 'text' },
      defaultValue: 'Tag',
      description: 'The content of the tag',
    },
    size: {
      control: { type: 'select' },
      defaultValue: 'default',
      description: 'The variant of the tag',
      options: ['default', 'large'],
    },
    variant: {
      control: { type: 'select' },
      defaultValue: 'default',
      description: 'The variant of the tag',
      options: ['default', 'alt', 'success', 'warning', 'error'],
    },
  },
  component: TagComponent,
  title: 'Base/Tag',
} as ComponentMeta<TagComponentType>

const Template: ComponentStory<TagComponentType> = ({ ...args }) => {
  return <TagComponent {...args} />
}

export const Tag = Template.bind({})
