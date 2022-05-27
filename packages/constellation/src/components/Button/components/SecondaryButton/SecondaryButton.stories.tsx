import { IconActivity, IconAlert } from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SecondaryButton, SecondaryButtonComponent } from 'components'
import { createIconStorybookSelect } from 'components/Icon/utils/createIconStorybookSelect'
import React from 'react'

import { ButtonOverlay } from '../ButtonOverlay'

export default {
  argTypes: {
    endIcon: createIconStorybookSelect(),
    overlay: {
      control: { type: 'radio' },
      mapping: {
        loading: <ButtonOverlay.Loading />,
        'no overlay': null,
        success: <ButtonOverlay.Success />,
      },
      options: ['no overlay', 'loading', 'success'],
    },
    startIcon: createIconStorybookSelect(),
  },
  component: SecondaryButton,
  title: 'Components/Button/SecondaryButton',
} as ComponentMeta<SecondaryButtonComponent>

const Template: ComponentStory<SecondaryButtonComponent> = (args) => <SecondaryButton {...args} />

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

export const Alert = Template.bind({})
Alert.args = {
  children: 'Click me',
  rounded: true,
  startIcon: <IconAlert color='#FFA133' />,
}
