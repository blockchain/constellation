import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Profile as ProfileComponent, ProfileComponent as ProfileComponentTypes } from '.'

export default {
  argTypes: {},
  args: {
    imgSrc: 'https://avatars.githubusercontent.com/u/11708259?v=4',
    name: 'John Doe',
    size: 'large',
  },
  component: ProfileComponent,
  title: 'Primitives/Profile',
} as ComponentMeta<ProfileComponentTypes>

const Template: ComponentStory<ProfileComponentTypes> = (args) => {
  return <ProfileComponent {...args} />
}

export const Profile = Template.bind({})
