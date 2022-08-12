import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Button } from '../../Compositions'
import { Modal as RenderedModal, ModalComponent } from '.'

export default {
  argTypes: {
    description: { type: 'string' },
    isOpen: { type: 'boolean' },
    setIsOpen: {
      action: 'clicked',
    },
  },
  args: {
    description:
      'An optional accessible description to be rendered and announced when the dialog is opened.',
    title: 'Modal Title',
  },
  component: RenderedModal,
  title: 'Compositions/Modal',
} as ComponentMeta<ModalComponent>

const Template: ComponentStory<ModalComponent> = ({ ...args }) => {
  const [open, setIsOpen] = useState(false)
  return (
    <RenderedModal
      {...args}
      isOpen={open}
      setIsOpen={setIsOpen}
      trigger={<Button variant='minimal' text='Click' />}
      primaryCta={{ onClick: () => setIsOpen(false), text: 'Primary' }}
      secondaryCta={{ onClick: () => setIsOpen(false), text: 'Secondary' }}
    />
  )
}

export const Modal = Template.bind({})
