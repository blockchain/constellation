import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Profile as ProfileComponent, ProfileComponent as ProfileComponentTypes } from '.'

export default {
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: {
        options: ['small', 'large'],
        type: 'radio',
      },
    },
    storyshotOverride: {
      control: {
        type: 'boolean',
      },
      description:
        'Used to override the gradient angle. This allows the storyshot tests to pass. Disable this to see the randomized gradient angle.',
    },
  },
  args: {
    imgSrc: 'https://picsum.photos/200',
    name: 'Lorenzo Von Matterhorn',
    size: 'large',
    storyshotOverride: true,
  },
  component: ProfileComponent,
  title: 'Primitives/Profile',
} as ComponentMeta<ProfileComponentTypes>

const Template: ComponentStory<ProfileComponentTypes> = (args) => {
  return <ProfileComponent {...args} />
}

export const Profile = Template.bind({})
