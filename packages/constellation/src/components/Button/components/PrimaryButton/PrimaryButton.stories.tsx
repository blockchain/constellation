import { IconActivity } from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PrimaryButton, PrimaryButtonComponent } from 'components'
import React from 'react'

export default {
  argTypes: {
    title: {
      defaultValue: 'Text',
    },
  },
  component: PrimaryButton,
  title: 'Components/Button/PrimaryButton',
} as ComponentMeta<PrimaryButtonComponent>

const Template: ComponentStory<PrimaryButtonComponent> = (args) => <PrimaryButton {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  startIcon: <IconActivity />,
}

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
  endIcon: <IconActivity />,
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  endIcon: <IconActivity />,
  startIcon: <IconActivity />,
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
