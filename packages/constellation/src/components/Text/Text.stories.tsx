import { Story } from '@storybook/react'

import Component from '.'
import { TextProps } from './types'

export default {
  argTypes: {
    htmlFor: {
      description: 'html element that is going to be rendered',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      type: 'select',
    },
  },
  component: Component,
  title: 'Components/Text',
}

const Template: Story<TextProps> = (args) => <Component {...args} />

export const Text = Template.bind({})

Text.args = { children: 'Text', htmlFor: 'span', variant: 'body-1' }
