import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Switcher as SwitcherComponent, SwitcherComponentType } from '.'

export default {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    byline: 'Bitcoin',
    logoContent: {
      primaryContent: {
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png',
        text: 'Bitcoin',
      },
    },
    title: 'BTC',
  },
  component: SwitcherComponent,
  title: 'Primitives/Switcher/Switcher',
} as ComponentMeta<SwitcherComponentType>

const Template: ComponentStory<SwitcherComponentType> = ({ ...args }) => {
  return <SwitcherComponent {...args} />
}

export const Switcher = Template.bind({})
