import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { InformationalCell as InformationalCellComponent, InformationalCellComponentType } from '.'

export default {
  argTypes: {},
  args: {
    text: 'Text',
  },
  component: InformationalCellComponent,
  title: 'Compositions/Table/Cells/InformationalCell',
} as ComponentMeta<InformationalCellComponentType>

const Template: ComponentStory<InformationalCellComponentType> = (args) => {
  return <InformationalCellComponent {...args} />
}

export const InformationalCell = Template.bind({})
