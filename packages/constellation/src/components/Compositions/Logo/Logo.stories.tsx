import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Logo, LogoComponent } from '.'

export default {
  argTypes: {},
  component: Logo,
  title: 'Compositions/Logo',
} as ComponentMeta<LogoComponent>

const Template: ComponentStory<LogoComponent> = () => {
  return <Logo />
}

export const Primary = Template.bind({})
