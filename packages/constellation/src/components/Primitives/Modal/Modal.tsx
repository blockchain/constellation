import { Transition } from '@headlessui/react'
import { Close, Content, Description, Overlay, Root, Title, Trigger } from '@radix-ui/react-dialog'
import cx from 'classnames'
import React, { forwardRef, Fragment } from 'react'

import { IconCloseCircle, SemanticColors } from '../../Base'
import { Button } from '../../Compositions'
import { Props } from './Modal.types'

const ModalHeader = () => (
  <>
    <Title className='constellation text-base font-medium text-title'>Modal Title</Title>
    <Close
      className={cx(
        'constellation absolute top-6 right-6 inline-flex items-center justify-center rounded-full',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75',
      )}
    >
      <IconCloseCircle size='medium' color={SemanticColors.medium} />
    </Close>
  </>
)

const ModalBody = () => (
  <Description className='constellation my-6 text-sm font-normal text-body'>
    Make changes to your profile here. Click save when you&apos;re done.
  </Description>
)

const ModalFooter = () => (
  <div className='constellation mt-4 flex justify-end gap-4'>
    <Button width='full' text='Secondary' variant='secondary' />
    <Button width='full' text='Primary' />
  </div>
)

const Modal = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, setIsOpen, trigger, ...otherProps }, ref) => {
    return (
      <Root open={isOpen} onOpenChange={setIsOpen} {...otherProps}>
        <Trigger asChild>{trigger}</Trigger>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Overlay forceMount className='constellation fixed inset-0 z-20 bg-overlay-dark-400' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Content
              ref={ref}
              forceMount
              className={cx(
                'constellation fixed z-50',
                'w-[95vw] max-w-md rounded-lg p-6 md:w-full',
                'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
                'bg-background',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
              )}
            >
              <ModalHeader />
              <ModalBody />
              <ModalFooter />
            </Content>
          </Transition.Child>
        </Transition.Root>
      </Root>
    )
  },
)

export default Modal
