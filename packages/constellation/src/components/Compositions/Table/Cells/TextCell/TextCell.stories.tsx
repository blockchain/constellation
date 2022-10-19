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
    tag: {
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

const Template: ComponentStory<TextCellComponentType> = ({ icon, tag, ...args }) => {
  const StoryIcon = Icons[icon as keyof typeof Icons] as React.FC
  const StoryTag = Icons[tag as keyof typeof Icons] as React.FC
  const Icon = icon ? <StoryIcon /> : null
  const Tag = tag ? <StoryTag /> : null

  return <TextCellComponent icon={Icon} tag={Tag} {...args} />
}

export const TextCell = Template.bind({})
