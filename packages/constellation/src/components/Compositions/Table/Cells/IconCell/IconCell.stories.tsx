import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import * as Icons from '../../../../Base/Icon'
import { IconCell as IconCellComponent, IconCellComponentType } from '.'

export default {
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
  },
  args: {
    icon: 'IconApple',
  },
  component: IconCellComponent,
  title: 'Compositions/Table/Cells/IconCell',
} as ComponentMeta<IconCellComponentType>

const Template: ComponentStory<IconCellComponentType> = ({ icon, ...args }) => {
  const StoryIcon = Icons[icon as keyof typeof Icons] as React.FC
  const Icon = icon ? <StoryIcon /> : null

  return <IconCellComponent icon={Icon} {...args} />
}

export const IconCell = Template.bind({})
