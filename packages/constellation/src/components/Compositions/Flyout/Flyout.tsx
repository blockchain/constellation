import { Transition } from '@headlessui/react'
import { Close, Content, Description, Overlay, Root, Title, Trigger } from '@radix-ui/react-dialog'
import cx from 'classnames'
import React, { forwardRef, Fragment, ReactElement } from 'react'

import { IconArrowLeft, IconProps, SemanticColors, Text } from '../../Base'
import { CloseButton, IconButton } from '../../Primitives'
import { HeaderComponent, Props } from './Flyout.types'

/**
 * Internal component for the optional accessible description
 */
const FlyoutHeader: HeaderComponent = ({
  byline,
  exiteType = 'close',
  icon,
  iconPos = 'left',
  onExit,
  title,
}) => {
  const hasByline = !!byline && exiteType === 'close'

  return (
    <div className='flex gap-5 items-center'>
      {exiteType === 'back' ? (
        <IconButton
          icon={<IconArrowLeft color={SemanticColors.muted} width={16} height={16} />}
          size='small'
          onClick={onExit}
          className='!h-4 !p-0 border-none'
        />
      ) : (
        <Close
          className={cx(
            'constellation absolute top-4 right-4 inline-flex items-center justify-center rounded-full h-',
            'focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75',
          )}
        >
          <CloseButton as='div' size='large' />
        </Close>
      )}
      <div
        className={cx(
          'flex',
          { 'flex-col': hasByline },
          {
            '!flex-row-reverse justify-between w-full': iconPos === 'right' && exiteType === 'back',
          },
        )}
      >
        <div className={cx({ 'mr-4': iconPos === 'left' }, { 'mb-4': hasByline })}>
          {icon &&
            React.cloneElement(
              icon as ReactElement<IconProps>,
              {
                color: SemanticColors.muted,
                height: hasByline ? 32 : 24,
                width: hasByline ? 32 : 24,
              } as IconProps,
            )}
        </div>

        <div>
          <Title className='constellation text-base font-medium text-title'>{title}</Title>
          {byline && (
            <Description className='constellation mt-1 text-sm font-normal text-body'>
              <Text variant='paragraph1' color={SemanticColors.body}>
                {byline}
              </Text>
            </Description>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * A dialog overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * It can be passed a FlyoutFooter as well as any other type of children.
 *
 * When a `ref` prop is provided, it will be forwarded to the Flyout's Content div element.
 */
const Flyout = forwardRef<HTMLDivElement, Props>(
  (
    {
      byline,
      children,
      exiteType,
      icon,
      iconPos,
      isOpen,
      onExit,
      setIsOpen,
      title,
      trigger,
      ...otherProps
    },
    ref,
  ) => {
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
            <Overlay
              forceMount
              className='constellation fixed inset-0 z-20 backdrop-blur-[2px] bg-overlay-dark-400'
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95 sm:translate-x-1/2'
            enterTo='opacity-100 scale-100 sm:translate-x-0'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100 sm:translate-x-0'
            leaveTo='opacity-0 scale-95 sm:translate-x-1/2'
          >
            <Content
              ref={ref}
              forceMount
              className={cx(
                'constellation fixed z-50 w-full top-0 bottom-0 left-0 right-0 p-6 sm:max-w-[480px] sm:rounded-3xl sm:top-6 sm:right-6 sm:bottom-6 sm:left-auto',
                'bg-background',
              )}
            >
              <FlyoutHeader
                title={title}
                byline={byline}
                exiteType={exiteType}
                onExit={onExit}
                icon={icon}
                iconPos={iconPos}
              />
              {children}
            </Content>
          </Transition.Child>
        </Transition.Root>
      </Root>
    )
  },
)

export default Flyout
