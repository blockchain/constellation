import { Story } from '@storybook/react'
import React from 'react'

import Component, { htmlElement } from '.'
import { TextProps } from './types'

export default {
  argTypes: {
    htmlFor: {
      description: 'html element that is going to be rendered',
      options: Object.keys(htmlElement),
      type: 'select',
    },
  },
  component: Component,
  title: 'Components/Text',
}

const Template: Story<TextProps> = (args) => <Component {...args} />

export const Text = Template.bind({})

Text.args = { children: 'Text', htmlFor: 'span', variant: 'body-1' }
