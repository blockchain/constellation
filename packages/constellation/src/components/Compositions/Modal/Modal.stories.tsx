import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Text } from '../../Base'
import { Button } from '..'
import { Modal as RenderedModal, ModalComponent } from '.'
import ModalFooter from './ModalFooter'

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
    >
      <Text variant='paragraph1'>Other modal content</Text>
      <ModalFooter
        primaryCta={{ onClick: () => setIsOpen(false), text: 'Primary' }}
        secondaryCta={{ onClick: () => setIsOpen(false), text: 'Secondary' }}
      />
    </RenderedModal>
  )
}

export const Modal = Template.bind({})
