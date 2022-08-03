import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Logo, LogoComponent } from '.'

export default {
  argTypes: {
    circle: {
      control: { type: 'boolean' },
    },
    primary: {
      control: { type: 'text' },
    },
    secondary: {
      control: { type: 'text' },
    },
    secondaryVariant: {
      control: { options: ['primary', 'badge'], type: 'radio' },
    },
  },
  args: {
    backgroundColor: 'var(--color-primary)',
    circle: true,
    primary: 'TEST',
    secondaryVariant: 'primary',
  },
  component: Logo,
  title: 'Compositions/Logo',
} as ComponentMeta<LogoComponent>

const Template: ComponentStory<LogoComponent> = (args) => {
  return <Logo {...args} />
}

export const Primary = Template.bind({})

const Image: ComponentStory<LogoComponent> = (args) => {
  const image = (
    <img
      src='https://upload.wikimedia.org/wikipedia/commons/6/66/SMPTE_Color_Bars.svg'
      alt='placeholder'
      className='object-cover w-full h-full'
    />
  )

  return <Logo {...args} primary={image} />
}

export const ImageLogo = Image.bind({})
