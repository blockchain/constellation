import { Transition } from '@headlessui/react'
import { Content, Overlay, Root, Trigger } from '@radix-ui/react-dialog'
import cx from 'classnames'
import React, { forwardRef, Fragment } from 'react'

import { Props } from './Flyout.types'
import FlyoutHeader from './FlyoutHeader'

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
      exitType,
      footer,
      icon,
      iconPos,
      isOpen,
      onExit,
      overlayOverride,
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
              className={cx('constellation fixed inset-0 z-20', {
                'backdrop-blur-[2px] bg-overlay-dark-400': overlayOverride === undefined,
              })}
            >
              {overlayOverride}
            </Overlay>
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
              {...otherProps}
              ref={ref}
              forceMount
              className={cx(
                'constellation fixed z-50 w-full top-0 bottom-0 left-0 right-0 p-6 sm:max-w-[480px] sm:rounded-3xl sm:top-6 sm:right-6 sm:bottom-6 sm:left-auto',
                'bg-background mode-dark:bg-dark-800 !drop-shadow-cards',
                'flex flex-col justify-between',
              )}
            >
              <div>
                <FlyoutHeader
                  title={title}
                  byline={byline}
                  exitType={exitType}
                  onExit={onExit}
                  icon={icon}
                  iconPos={iconPos}
                />
                {children}
              </div>

              {footer}
            </Content>
          </Transition.Child>
        </Transition.Root>
      </Root>
    )
  },
)

export default Flyout
