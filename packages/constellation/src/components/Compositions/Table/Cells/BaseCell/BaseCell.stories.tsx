import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { BaseCell as BaseCellComponent, BaseCellComponent as BaseCellComponentType } from '.'

export default {
  argTypes: {},
  args: {},
  component: BaseCellComponent,
  title: 'Compositions/Table/Cells/BaseCell',
} as ComponentMeta<BaseCellComponentType>

const Template: ComponentStory<BaseCellComponentType> = (args) => {
  return (
    <BaseCellComponent {...args}>
      <span>This is some content for the BaseCell</span>
    </BaseCellComponent>
  )
}

export const BaseCell = Template.bind({})
