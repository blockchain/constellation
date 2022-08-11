import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import * as Icons from '../../../../Base/Icon'
import { TextCell as TextCellComponent, TextCellComponentType } from '.'

export default {
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
  },
  args: {
    subtext: 'Subtext',
    text: 'Text',
  },
  component: TextCellComponent,
  title: 'Compositions/Table/Cells/TextCell',
} as ComponentMeta<TextCellComponentType>

const Template: ComponentStory<TextCellComponentType> = ({ icon, ...args }) => {
  const StoryIcon = Icons[icon as keyof typeof Icons] as React.FC
  const Icon = icon ? <StoryIcon /> : null

  return <TextCellComponent icon={Icon} {...args} />
}

export const TextCell = Template.bind({})
