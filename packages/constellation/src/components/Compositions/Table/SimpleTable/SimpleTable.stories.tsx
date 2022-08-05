import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { ButtonCell, TextCell } from '..'
import { SimpleTable as SimpleTableComponent } from '.'

export default {
  argTypes: {},
  args: {},
  component: SimpleTableComponent,
  title: 'Compositions/Table/SimpleTable',
} as ComponentMeta<FC>

const Template: ComponentStory<FC> = () => {
  return <SimpleTableComponent />
}

export const SimpleTable = Template.bind({})
