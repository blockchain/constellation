import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Padding, PaddingComponent } from '.'

export default {
  argTypes: {
    children: {},
  },
  args: {
    children: <span>Padding content</span>,
  },
  component: Padding,
  title: 'Base/Padding',
} as ComponentMeta<PaddingComponent>

const Template: ComponentStory<PaddingComponent> = ({ children, ...props }) => (
  <div style={{ backgroundColor: 'blue', color: 'white' }}>
    <Padding {...props}>
      <div style={{ backgroundColor: 'red' }}>{children}</div>
    </Padding>
  </div>
)

export const PaddingEdgeInset = Template.bind({})
PaddingEdgeInset.args = {
  bottom: 4,
  left: 2,
  right: 3,
  top: 1,
}

export const PaddingSymetric = Template.bind({})
PaddingSymetric.args = {
  horizontal: 1,
  vertical: 0.5,
}

export const PaddingAll = Template.bind({})
PaddingAll.args = {
  all: 1,
}
