import { Story } from '@storybook/react'

import Component from '.'
import { CopyToClipBoardTypes } from './types'

export default {
  argTypes: {
    light: {
      control: 'boolean',
    },
    value: {
      description: 'Enter text',
      type: 'Text',
    },
  },
  component: Component,
  title: 'Components/CopyToClipBoard',
}

const Template: Story<CopyToClipBoardTypes> = (args) => <Component {...args} />

export const CopyToClipBoard = Template.bind({})

CopyToClipBoard.args = {
  value: 'https:blockchain.com',
}
