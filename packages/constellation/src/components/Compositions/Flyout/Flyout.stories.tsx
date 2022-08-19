import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Text } from '../../Base'
import * as Icons from '../../Base/Icon'
import { Button } from '../../Primitives/Buttons'
import { Flyout as RenderedFlyout, FlyoutComponent } from '.'
import FlyoutFooter from './FlyoutFooter'

export default {
  argTypes: {
    description: { type: 'string' },
    icon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    isOpen: { type: 'boolean' },
    setIsOpen: {
      action: 'clicked',
    },
  },
  args: {
    byline:
      'An optional accessible description to be rendered and announced when the dialog is opened.',
    icon: 'IconApple',
    title: 'Flyout Title',
  },
  component: RenderedFlyout,
  title: 'Compositions/Flyout',
} as ComponentMeta<FlyoutComponent>

const Template: ComponentStory<FlyoutComponent> = ({ icon, ...args }) => {
  const [open, setIsOpen] = useState(false)
  const StoryIcon = Icons[icon as keyof typeof Icons] as React.FC

  return (
    <RenderedFlyout
      {...args}
      isOpen={open}
      setIsOpen={setIsOpen}
      trigger={<Button variant='minimal' text='Click' />}
      icon={<StoryIcon />}
    />
  )
}

export const Flyout = Template.bind({})
