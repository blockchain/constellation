import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { SemanticColors } from '../../../../Base'
import * as Icons from '../../../../Base/Icon'
import { IconCell as IconCellComponent, IconCellProps } from '.'

type IconCellStoryComponent = FC<IconCellProps & { iconId: string }>

export default {
  argTypes: {
    icon: { control: { disable: true } },
    iconId: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
  },
  args: {
    iconId: 'IconApple',
    iconProps: {
      color: SemanticColors.title,
      size: 'large',
    },
  },
  component: IconCellComponent,
  title: 'Compositions/Table/Cells/IconCell',
} as ComponentMeta<IconCellStoryComponent>

const Template: ComponentStory<IconCellStoryComponent> = ({ iconId, ...args }) => {
  const StoryIcon = Icons[iconId as keyof typeof Icons]

  return <IconCellComponent icon={StoryIcon} {...args} />
}

export const IconCell = Template.bind({})
