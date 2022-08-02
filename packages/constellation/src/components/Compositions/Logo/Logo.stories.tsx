import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { SingleLogo, LogoComponent, DoubleLogo, BadgeLogo } from '.'

export default {
  argTypes: {},
  component: SingleLogo,
  title: 'Compositions/Logo',
} as ComponentMeta<LogoComponent>

const Template: ComponentStory<LogoComponent> = () => {
  return <SingleLogo />
}

export const Primary = Template.bind({})

export const Double = () => {
  return <DoubleLogo />
}

export const Badge = () => {
  return <BadgeLogo />
}
