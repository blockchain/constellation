import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { SemanticColors } from '../..'
import { Text as TextComponent, TextComponentType } from '.'
import { textVariants } from './Text.types'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'p', 'div', 'h1'],
    },
    children: { control: { type: 'text' } },
    color: {
      control: { type: 'select' },
      defaultValue: SemanticColors.body,
      options: Object.values(SemanticColors),
    },
    textAlign: {
      control: { type: 'select' },
      options: ['center', 'end', 'justify', 'start', 'right', 'left'],
    },
    transform: {
      control: { type: 'select' },
      options: ['capitalize', 'lowercase', 'uppercase', 'normalcase'],
    },
    truncate: { control: { type: 'boolean' } },
    variant: {
      control: { type: 'select' },
      options: textVariants,
    },
  },
  component: TextComponent,
  title: 'Base/Typography/Text',
} as ComponentMeta<TextComponentType>

const Template: ComponentStory<TextComponentType> = ({
  children = 'The quick brown fox jumps over the lazy dog',
  color,
  variant,
  ...args
}) => {
  return (
    <TextComponent variant={variant} color={color} {...args}>
      {children}
    </TextComponent>
  )
}

export const Text = Template.bind({})
