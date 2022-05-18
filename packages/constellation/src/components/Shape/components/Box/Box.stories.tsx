import { ComponentStory } from '@storybook/react'
import { Padding } from 'components/Padding'
import { Text } from 'components/Text'
import React from 'react'

import { BoxComponent } from '.'
import Box from './Box'

export default {
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      defaultValue: 'default',
      description: 'The background color of the box',
      options: ['default', 'light'],
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'default | light | HEX color | RGB color | RGBA color' },
      },
    },
    borderColor: {
      control: { type: 'select' },
      description: 'The border color of the box',
      options: ['regular'],
      table: {
        defaultValue: { summary: 'regular' },
        type: { summary: 'regular | HEX color | RGB color | RGBA color' },
      },
    },
    borderRadius: {
      control: { type: 'select' },
      description: 'The border radius of the box',
      options: ['medium'],
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'medium | REM number' },
      },
    },
    borderWidth: {
      control: { type: 'select' },
      description: 'The border width of the box',
      options: ['small'],
      table: {
        defaultValue: { summary: 'small' },
        type: { summary: 'small | REM number' },
      },
    },
    boxShadow: {
      control: { type: 'select' },
      description: 'The box shadow',
      options: ['elevation1'],
      table: {
        type: { summary: 'elevation1 | Box Shadow css value' },
      },
    },
    children: {
      defaultValue: (
        <Padding all={1}>
          <Text>Box content</Text>
        </Padding>
      ),
    },
    fullHeight: {
      control: { type: 'boolean' },
      description: 'Weather the box will go full width',
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'Weather the box will go full height',
    },
    height: {
      control: { type: 'number' },
      description: 'The box exect height',
      table: {
        type: { summary: 'REM number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: 'The box exect width',
      table: {
        type: { summary: 'REM number' },
      },
    },
  },
  component: Box,
  title: 'Components/Shape/Box',
}

const Template: ComponentStory<BoxComponent> = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {}

export const OutlinedCard = Template.bind({})
OutlinedCard.args = {
  backgroundColor: 'default',
  borderColor: 'regular',
  borderRadius: 'medium',
  borderWidth: 'small',
}

export const ElevatedCard = Template.bind({})
ElevatedCard.args = {
  backgroundColor: 'default',
  borderRadius: 'medium',
  boxShadow: 'elevation1',
}
