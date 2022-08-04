/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import * as Icons from '../../Base/Icon'
import { Logo, LogoComponent, LogoProps } from '.'

export default {
  argTypes: {
    circle: {
      control: { type: 'boolean' },
    },
    primaryContent: { control: { disable: true } },
    primaryIcon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    primaryImgSrc: {
      control: { type: 'text' },
    },
    primaryText: {
      control: { type: 'text' },
    },
    secondaryContent: { control: { disable: true } },
    secondaryIcon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    secondaryImgSrc: {
      control: { type: 'text' },
    },
    secondaryText: {
      control: { type: 'text' },
    },
  },
  args: {
    circle: true,
    primaryText: 'TEST',
  },
  component: Logo,
  title: 'Compositions/Logo',
} as ComponentMeta<LogoComponent>

interface StoryType {
  circle: boolean
  primaryIcon: keyof typeof Icons
  primaryImgSrc: string
  primaryText: string
  secondaryIcon: keyof typeof Icons
  secondaryImgSrc: string
  secondaryText: string
}

type StoryComponent = React.FC<StoryType & LogoProps>

const Template: ComponentStory<StoryComponent> = ({
  circle,
  doubleVariant,
  primaryIcon,
  primaryImgSrc,
  primaryText,
  secondaryIcon,
  secondaryImgSrc,
  secondaryText,
}) => {
  const PrimaryIcon =
    primaryIcon && (Icons[primaryIcon as keyof typeof Icons] as React.FC<Icons.IconProps>)
  const SecondaryIcon =
    secondaryIcon && (Icons[secondaryIcon as keyof typeof Icons] as React.FC<Icons.IconProps>)
  return (
    // We have to ignore some TS errors here because storybook is able to add all props that usually cant be used together.
    <Logo
      circle={circle}
      doubleVariant={doubleVariant}
      /* @ts-ignore */
      primaryContent={{ icon: PrimaryIcon, imgSrc: primaryImgSrc, text: primaryText }}
      /* @ts-ignore */
      secondaryContent={
        (secondaryText || secondaryIcon || secondaryImgSrc) && {
          icon: SecondaryIcon,
          imgSrc: secondaryImgSrc,
          text: secondaryText,
        }
      }
    />
  )
}

export const Primary = Template.bind({})
