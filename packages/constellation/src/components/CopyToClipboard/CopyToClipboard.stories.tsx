import { Story } from '@storybook/react'

import Component from '.'
import colors from '../../colors'
import { CopyToClipboardTypes } from './types'

export default {
  argTypes: {
    color: {
      options: Object.keys(colors),
      type: 'select',
      description: 'Clipboard color',
    },
    hoverColor: {
      options: Object.keys(colors),
      type: 'select',
      description: 'Clipboard hover color',
    },
    successColor: {
      options: Object.keys(colors),
      type: 'select',
      description: 'Success color',
    },
    successHoverColor: {
      options: Object.keys(colors),
      type: 'select',
      description: 'Success hover color',
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
