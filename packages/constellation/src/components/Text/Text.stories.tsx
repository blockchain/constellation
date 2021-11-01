import { Story } from '@storybook/react'
import React from 'react'

import Component from '.'
import { TextProps } from './types'

export default {
  component: Component,
  title: 'Components/Text'
}

const Template: Story<TextProps> = (args) => <Component {...args} />

export const Text = Template.bind({})

Text.args = { children: 'Text', variant: 'display' }
