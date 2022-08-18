import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import * as Icons from '../../../Base'
import { AlertBanner, AlertBannerComponentType } from '.'

export default {
  argTypes: {
    boldContent: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: { options: ['default', 'warning', 'error'], type: 'radio' },
    },
  },
  args: {
    boldContent: 'https://login.blockchain.com',
    content: 'Check that the URL is correct.',
    icon: 'IconLockClosed',
    variant: 'default',
  },
  component: AlertBanner,
  title: 'Compositions/Alert/Banner',
} as ComponentMeta<AlertBannerComponentType>

const Template: ComponentStory<AlertBannerComponentType> = ({ icon, ...args }) => {
  const StoryIcon = Icons[icon as keyof typeof Icons] as React.FC

  return <AlertBanner icon={<StoryIcon />} {...args} />
}

export const Banner = Template.bind({})
