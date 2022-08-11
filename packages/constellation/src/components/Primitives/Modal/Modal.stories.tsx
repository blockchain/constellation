import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Button } from '../../Compositions'
import { Modal as RenderedModal, ModalComponent } from '.'

export default {
  argTypes: {
    isOpen: { type: 'boolean' },
    setIsOpen: {
      action: 'clicked',
    },
  },
  args: {},
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
    />
  )
}

export const Modal = Template.bind({})
