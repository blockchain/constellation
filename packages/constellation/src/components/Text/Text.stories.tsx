import { Story } from '@storybook/react'
import React from 'react'

import Component from '.'
import { TextProps } from './types'

export default {
  argTypes: {
    htmlFor: {
      description: 'html element that is going to be rendered',
    },
  },
  component: Component,
  title: 'Components/Text',
}

const Template: Story<TextProps> = (args) => <Component {...args} />

export const Text = Template.bind({})

Text.args = { children: 'Text', htmlFor: 'span', variant: 'display' }
