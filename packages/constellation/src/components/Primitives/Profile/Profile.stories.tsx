import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Profile as ProfileComponent, ProfileComponent as ProfileComponentTypes } from '.'

export default {
  argTypes: {},
  args: {
    imgSrc: 'https://picsum.photos/200',
    name: 'Lorenzo Von Matterhorn',
    size: 'large',
  },
  component: ProfileComponent,
  title: 'Primitives/Profile',
} as ComponentMeta<ProfileComponentTypes>

const Template: ComponentStory<ProfileComponentTypes> = (args) => {
  return <ProfileComponent {...args} />
}

export const Profile = Template.bind({})
