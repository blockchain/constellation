import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { CheckboxCell as CheckboxCellComponent, CheckboxCellComponentType } from '.'

export default {
  argTypes: {},
  args: {
    text: 'Text',
  },
  component: CheckboxCellComponent,
  title: 'Compositions/Table/Cells/CheckboxCell',
} as ComponentMeta<CheckboxCellComponentType>

const Template: ComponentStory<CheckboxCellComponentType> = (args) => {
  return <CheckboxCellComponent {...args} />
}

export const CheckboxCell = Template.bind({})
