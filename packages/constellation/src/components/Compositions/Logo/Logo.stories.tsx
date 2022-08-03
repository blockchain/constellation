/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import * as Icons from '../../Base/Icon'
import { Logo, LogoComponent } from '.'

export default {
  argTypes: {
    circle: {
      control: { type: 'boolean' },
    },
    primaryIcon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    primaryText: {
      control: { type: 'text' },
    },
    secondaryIcon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    secondaryText: {
      control: { type: 'text' },
    },
    secondaryVariant: {
      control: { options: ['primary', 'badge'], type: 'radio' },
    },
  },
  args: {
    backgroundColor: 'var(--color-primary)',
    circle: true,
    iconColor: '#FFFFFF',
    primaryText: 'TEST',
    secondaryVariant: 'primary',
  },
  component: Logo,
  title: 'Compositions/Logo',
} as ComponentMeta<LogoComponent>

const Template: ComponentStory<LogoComponent> = ({
  iconColor,
  primaryIcon,
  secondaryIcon,
  ...args
}) => {
  const PrimaryIcon =
    primaryIcon && (Icons[primaryIcon as keyof typeof Icons] as React.FC<Icons.IconProps>)
  const SecondaryIcon =
    secondaryIcon && (Icons[secondaryIcon as keyof typeof Icons] as React.FC<Icons.IconProps>)

  // We have to ignore some TS errors here because storybook is able to add all props that usually cant be used together.
  return (
    <>
      {/* @ts-ignore */}
      <Logo
        /* @ts-ignore */
        primaryIcon={primaryIcon && <PrimaryIcon color={iconColor} />}
        /* @ts-ignore */
        secondaryIcon={secondaryIcon && <SecondaryIcon color={iconColor} />}
        {...args}
      />
    </>
  )
}

export const Primary = Template.bind({})
