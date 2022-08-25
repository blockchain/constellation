import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { SettingsHeader as RenderedSettingsHeader, SettingsHeaderComponent } from '.'

export default {
  argTypes: {
    children: {
      control: { type: 'boolean' },
    },
  },
  args: {},
  component: RenderedSettingsHeader,
  title: 'Compositions/Headers/SettingsHeader',
} as ComponentMeta<SettingsHeaderComponent>

const Template: ComponentStory<SettingsHeaderComponent> = ({ ...args }) => {
  return <RenderedSettingsHeader {...args} />
}

export const SettingsHeader = Template.bind({})
