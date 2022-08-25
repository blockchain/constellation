import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { SectionHeader as RenderedSectionHeader, SectionHeaderComponent } from '.'

export default {
  argTypes: {
    children: {
      control: { type: 'boolean' },
    },
  },
  args: {},
  component: RenderedSectionHeader,
  title: 'Compositions/Headers/SectionHeader',
} as ComponentMeta<SectionHeaderComponent>

const Template: ComponentStory<SectionHeaderComponent> = ({ ...args }) => {
  return <RenderedSectionHeader {...args} />
}

export const SectionHeader = Template.bind({})
