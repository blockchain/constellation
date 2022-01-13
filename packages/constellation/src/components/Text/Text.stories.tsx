import { Story } from '@storybook/react'
import React from 'react'

import { colors } from '../../colors'
import TextComponent from '.'
import { TextProps } from './types'

export default {
  argTypes: {
    color: {
      description: 'color of the icon',
      options: Object.keys(colors),
      type: 'select',
    },
    htmlFor: {
      description: 'html element that is going to be rendered',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      type: 'select',
    },
  },
  component: TextComponent,
  title: 'Components/Text',
}

const Template: Story<TextProps> = (args) => <TextComponent {...args} />

export const Text = Template.bind({})

Text.args = { children: 'Text', htmlFor: 'span', variant: 'body-1' }
