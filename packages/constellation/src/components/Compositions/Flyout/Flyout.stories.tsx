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
    exitType: 'close',
    icon: 'IconApple',
    iconPos: 'left',
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
      icon={StoryIcon}
      footer={
        <FlyoutFooter
          primaryCta={{ disabled: true, onClick: () => setIsOpen(false), text: 'Primary Button' }}
          secondaryCta={{ onClick: () => setIsOpen(false), text: 'Dismiss' }}
          primaryCheckbox={{
            onChange: () => setIsOpen(false),
            text: 'I Agree To Blockchain.com’s Terms of Service',
          }}
          secondaryCheckbox={{
            onChange: () => setIsOpen(false),
            text: 'By clicking ‘Create Card’ you accept the terms of Blockchain.com’s Cardholder Agreement',
          }}
        />
      }
    >
      <Text>This is the main content of the flyout</Text>
    </RenderedFlyout>
  )
}

export const Flyout = Template.bind({})

const MultiTemplate: ComponentStory<FlyoutComponent> = ({ ...args }) => {
  const [mainOpen, setMainOpen] = useState(false)
  const [secondaryOpen, setSecondaryOpen] = useState(false)

  return (
    <>
      <RenderedFlyout
        {...args}
        isOpen={mainOpen}
        icon={null}
        setIsOpen={setMainOpen}
        trigger={<Button variant='minimal' text='Click' />}
        footer={
          <FlyoutFooter
            primaryCta={{
              onClick: () => setSecondaryOpen(true),
              text: 'Open secondary flyout',
            }}
          />
        }
      >
        <Text>This is the primary flyout</Text>
      </RenderedFlyout>
      <RenderedFlyout
        {...args}
        isOpen={secondaryOpen}
        icon={null}
        overlayOverride={false}
        setIsOpen={setSecondaryOpen}
        footer={
          <FlyoutFooter
            primaryCta={{
              onClick: () => setSecondaryOpen(false),
              text: 'Close secondary',
            }}
          />
        }
      >
        <Text>This is the secondary flyout. It also has a custom overlay.</Text>
      </RenderedFlyout>
    </>
  )
}

export const Multi = MultiTemplate.bind({})
