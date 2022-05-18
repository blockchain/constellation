import { IconActivity } from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon } from 'components/Icon'
import React from 'react'
import { convertHexToRGBA } from 'utils'

import { Circle, CircleComponent } from '.'

export default {
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      description: 'The background color of the circle',
      options: ['default', 'light'],
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'default | light | HEX color | RGB color | RGBA color' },
      },
    },
    borderColor: {
      control: { type: 'select' },
      description: 'The border color of the circle',
      options: ['regular'],
      table: {
        defaultValue: { summary: 'regular' },
        type: { summary: 'regular | HEX color | RGB color | RGBA color' },
      },
    },
    borderWidth: {
      control: { type: 'select' },
      description: 'The border width of the circle',
      options: ['small'],
      table: {
        defaultValue: { summary: 'small' },
        type: { summary: 'small | REM number' },
      },
    },
    boxShadow: {
      control: { type: 'select' },
      description: 'The circle shadow',
      options: ['elevation1'],
      table: {
        type: { summary: 'elevation1 | Box Shadow css value' },
      },
    },
    centerContent: {
      control: { type: 'boolean' },
      description: 'Weather the content is centered with flex',
    },
    children: {
      defaultValue: (
        <Icon label=''>
          <IconActivity />
        </Icon>
      ),
    },
    size: {
      control: { type: 'number' },
      defaultValue: 4,
      description: 'The circle size',
      table: {
        defaultValue: { summary: '4' },
        type: { summary: 'REM number' },
      },
    },
  },
  component: Circle,
  title: 'Components/Shape/Circle',
} as ComponentMeta<CircleComponent>

const Template: ComponentStory<CircleComponent> = (args) => <Circle {...args} />

export const Default = Template.bind({})
Default.args = {}

export const CircularIconShape = Template.bind({})
CircularIconShape.args = {
  backgroundColor: convertHexToRGBA('#FF9B22', 0.15),
  centerContent: true,
  children: (
    <Icon label='' color='#FF9B22'>
      <IconActivity />
    </Icon>
  ),
  size: 3,
}

export const OutlinedCircularIconShape = Template.bind({})
OutlinedCircularIconShape.args = {
  backgroundColor: convertHexToRGBA('#FF9B22', 0.15),
  borderColor: convertHexToRGBA('#FF9B22', 0.15),
  borderWidth: 'small',
  centerContent: true,
  children: (
    <Icon label='' color='#FF9B22'>
      <IconActivity />
    </Icon>
  ),
  size: 3,
}

export const ElevatedCircularIconShape = Template.bind({})
ElevatedCircularIconShape.args = {
  backgroundColor: convertHexToRGBA('#FF9B22', 0.15),
  boxShadow: 'elevation1',
  centerContent: true,
  children: (
    <Icon label='' color='#FF9B22'>
      <IconActivity />
    </Icon>
  ),
  size: 3,
}
