import React from 'react'
import { Story } from '@storybook/react'

import colors from '../../colors'
import { iconSize } from '../Icon'
import Component from '.'
import { CopyToClipboardTypes } from './types'

export default {
  argTypes: {
    color: {
      description: 'Clipboard color',
      options: Object.keys(colors),
      type: 'select',
    },
    hoverColor: {
      description: 'Clipboard hover color',
      options: Object.keys(colors),
      type: 'select',
    },
    size: {
      description: 'Clipboard hover color',
      options: Object.keys(iconSize),
      type: 'select',
    },
    successColor: {
      description: 'Success color',
      options: Object.keys(colors),
      type: 'select',
    },
    successHoverColor: {
      description: 'Success hover color',
      options: Object.keys(colors),
      type: 'select',
    },
    value: {
      description: 'Enter text to be copied',
      type: 'Text',
    },
  },
  component: Component,
  title: 'Components/CopyToClipboard',
}

const Template: Story<CopyToClipboardTypes> = (args) => <Component {...args} />

export const CopyToClipboard = Template.bind({})

CopyToClipboard.args = {
  value: 'https:blockchain.com',
}
