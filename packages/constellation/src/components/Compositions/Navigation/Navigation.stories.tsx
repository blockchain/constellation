import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import {
  Navigation as NavigationComponent,
  NavigationComponent as NavigationComponentType,
} from '.'

export default {
  argTypes: {},
  args: {
    title: 'Wallet',
  },
  component: NavigationComponent,
  title: 'Compositions/Navigation',
} as ComponentMeta<NavigationComponentType>

const Template: ComponentStory<NavigationComponentType> = (args) => {
  return <NavigationComponent {...args} />
}

export const Navigation = Template.bind({})
