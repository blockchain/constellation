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
  },
  component: RenderedModal,
  title: 'Compositions/Modal',
} as ComponentMeta<ModalComponent>

const Template: ComponentStory<ModalComponent> = () => {
  const [open, setIsOpen] = useState(false)
  return (
    <RenderedModal
      isOpen={open}
      setIsOpen={setIsOpen}
      trigger={<Button variant='minimal' text='Click' />}
      primaryCta={{ onClick: () => false, text: 'Primary' }}
      secondaryCta={{ onClick: () => false, text: 'Secondary' }}
    />
  )
}

export const Modal = Template.bind({})
