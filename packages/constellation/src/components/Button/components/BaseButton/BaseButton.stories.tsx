import { IconActivity } from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { BaseButton } from '.'
import { BaseButtonComponent } from './BaseButton.types'

export default {
  component: BaseButton,
  title: 'Components/Button/BaseButton',
} as ComponentMeta<BaseButtonComponent>

const Template: ComponentStory<BaseButtonComponent> = (args) => <BaseButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Click me',
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  children: 'Click me',
  endIcon: <IconActivity />,
  startIcon: <IconActivity />,
}
