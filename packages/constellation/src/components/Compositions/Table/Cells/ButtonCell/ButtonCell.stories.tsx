import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ButtonCell as ButtonCellComponent, ButtonCellComponentType } from '.'

export default {
  argTypes: {},
  args: {
    primaryButton: {
      text: 'test',
      variant: 'minimal',
    },
  },
  component: ButtonCellComponent,
  title: 'Compositions/Table/Cells/ButtonCell',
} as ComponentMeta<ButtonCellComponentType>

const Template: ComponentStory<ButtonCellComponentType> = (args) => {
  return <ButtonCellComponent {...args} />
}

export const ButtonCell = Template.bind({})
