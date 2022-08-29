/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta } from '@storybook/react'
import React from 'react'

import * as Icons from '../../Base/Icon'
import { Logo as LogoComponent, LogoComponent as LogoComponentProps, LogoProps } from '.'

export default {
  argTypes: {
    circle: {
      control: { type: 'boolean' },
    },
    primaryContent: {
      control: { disable: true },
      description:
        'All the primary content props have been split out so that storybook can edit them separately.',
    },
    'primaryContent.icon': {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    'primaryContent.iconColor': {
      control: { type: 'color' },
    },
    'primaryContent.imgSrc': {
      control: { type: 'text' },
    },
    'primaryContent.text': {
      control: { type: 'text' },
    },
    secondaryContent: {
      control: { disable: true },
      description:
        'All the secondary content props have been split out so that storybook can edit them separately.',
    },
    'secondaryContent.icon': {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    'secondaryContent.iconColor': {
      control: { type: 'color' },
    },
    'secondaryContent.imgSrc': {
      control: { type: 'text' },
    },
    'secondaryContent.text': {
      control: { type: 'text' },
    },
  },
  args: {
    circle: true,
    'primaryContent.iconColor': '#fff',
    'primaryContent.text': 'TEST',
    'secondaryContent.iconColor': '#fff',
    size: 'base',
  },
  component: LogoComponent,
  title: 'Compositions/Logo',
} as ComponentMeta<LogoComponentProps>

interface StoryType {
  circle: boolean
  'primaryContent.icon': keyof typeof Icons
  'primaryContent.iconColor': string
  'primaryContent.imgSrc': string
  'primaryContent.text': string
  'secondaryContent.icon': keyof typeof Icons
  'secondaryContent.iconColor': string
  'secondaryContent.imgSrc': string
  'secondaryContent.text': string
}

type StoryComponent = React.FC<StoryType & LogoProps>

const Template: StoryComponent = ({
  circle,
  doubleVariant,
  'primaryContent.icon': primaryIcon,
  'primaryContent.iconColor': primaryIconColor,
  'primaryContent.imgSrc': primaryImgSrc,
  'primaryContent.text': primaryText,
  'secondaryContent.icon': secondaryIcon,
  'secondaryContent.iconColor': secondaryIconColor,
  'secondaryContent.imgSrc': secondaryImgSrc,
  'secondaryContent.text': secondaryText,
  size,
}) => {
  const PrimaryIcon = primaryIcon && (Icons[primaryIcon as keyof typeof Icons] as React.FC)
  const SecondaryIcon = secondaryIcon && (Icons[secondaryIcon as keyof typeof Icons] as React.FC)
  return (
    // We have to ignore some TS errors here because storybook is able to add all props that usually cant be used together.
    <LogoComponent
      circle={circle}
      doubleVariant={doubleVariant}
      /* @ts-ignore */
      primaryContent={{
        icon: PrimaryIcon,
        /* @ts-ignore */
        iconColor: primaryIconColor,
        imgSrc: primaryImgSrc,
        text: primaryText,
      }}
      /* @ts-ignore */
      secondaryContent={
        (secondaryText || secondaryIcon || secondaryImgSrc) && {
          icon: SecondaryIcon,
          /* @ts-ignore */
          iconColor: secondaryIconColor,
          imgSrc: secondaryImgSrc,
          text: secondaryText,
        }
      }
      size={size}
    />
  )
}

export const Logo = Template.bind({})
