/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { IconProps, PaletteColors } from '../../Base'
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
  'primaryContent.imgSrc': primaryImgSrc,
  'primaryContent.text': primaryText,
  'secondaryContent.icon': secondaryIcon,
  'secondaryContent.imgSrc': secondaryImgSrc,
  'secondaryContent.text': secondaryText,
  size,
}) => {
  const PrimaryIcon =
    primaryIcon && (Icons[primaryIcon as keyof typeof Icons] as React.FC<IconProps>)
  const SecondaryIcon =
    secondaryIcon && (Icons[secondaryIcon as keyof typeof Icons] as React.FC<IconProps>)

  /**
   * This ComponentWrapper is just used as a workaround for a bug currently in the
   * Storybook Docs addon. It's a workaround for this issue:
   * https://github.com/storybookjs/storybook/issues/17720
   *
   * When using the Logo component the Icon is supposed to be included in primaryContent and
   * secondaryContent. However, the bug in the Docs addon means that the Icon can't be set
   * in an object. So, we have to set the Icon as a separate prop and use the ComponentWrapper
   * to merge it into the primaryContent and secondaryContent props.
   */

  const BugWorkaroundWrapper = ({
    primaryContent,
    primaryIcon,
    secondaryContent,
    secondaryIcon,
  }: {
    primaryContent: { imgSrc: string; text: string | React.ReactNode }
    primaryIcon?: React.ReactNode
    secondaryContent?: { imgSrc: string; text: string | React.ReactNode }
    secondaryIcon?: React.ReactNode
  }) => {
    return (
      // We have to ignore some TS errors here because storybook is able to add all props that usually cant be used together.
      <LogoComponent
        circle={circle}
        doubleVariant={doubleVariant}
        /* @ts-ignore */
        primaryContent={{
          ...primaryContent,
          icon: primaryIcon,
        }}
        /* @ts-ignore */
        secondaryContent={
          (secondaryContent?.text || secondaryIcon || secondaryContent?.imgSrc) && {
            ...secondaryContent,
            icon: secondaryIcon,
          }
        }
        size={size}
      />
    )
  }

  return (
    <BugWorkaroundWrapper
      primaryContent={{
        imgSrc: primaryImgSrc,
        text: primaryText,
      }}
      primaryIcon={primaryIcon && <PrimaryIcon color={PaletteColors['white-000']} />}
      secondaryContent={
        secondaryText || secondaryImgSrc
          ? {
              imgSrc: secondaryImgSrc,
              text: secondaryText,
            }
          : undefined
      }
      secondaryIcon={secondaryIcon && <SecondaryIcon color={PaletteColors['white-000']} />}
    />
  )
}

export const Logo = Template.bind({})
