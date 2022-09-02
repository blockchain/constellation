import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IconApple, Text } from '../../Base'
import { Divider } from '../Divider'
import {
  AlertButton,
  Button as ButtonComponent,
  ButtonComponentType,
  CloseButton,
  IconButton,
  Link,
} from '.'
import { ButtonVariants, Sizes as AlertSizes } from './Alert/Alert.types'
import { variantStyles } from './Button/Button'
import { Sizes } from './Button/Button.types'
import { Sizes as CloseButtonSizes } from './Close/Close.types'
import { Sizes as LinkSizes } from './Link/Link.types'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      description: 'Allows for overriding the underlying DOM element ',
      options: ['button', 'div', 'a'],
    },
    disabled: { control: { type: 'boolean' } },
    inline: { control: { type: 'boolean' }, defaultValue: false },
    onClick: { action: 'click' },
    state: {
      control: { type: 'radio' },
      description: 'An optional visual progress indication of a tiggered button action',
      options: ['initial', 'loading', 'success'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'reset', 'submit'],
    },
    width: {
      control: { type: 'radio' },
      options: ['auto', 'full'],
    },
  },
  args: {
    as: 'button',
    disabled: false,
    icon: true,
    state: 'initial',
    type: 'button',
    width: 'auto',
  },
  component: ButtonComponent,
  title: 'Primitives/Buttons/All Buttons',
} as ComponentMeta<ButtonComponentType>

const allSizes = ['large', 'default', 'small', 'noPadding'] as Sizes[]

const Template: ComponentStory<ButtonComponentType> = ({ icon, ...args }) => {
  return (
    <>
      <section className='constellation p-6'>
        <Text variant='title2'>Button</Text>
        <Divider variant='medium' className='mt-2 mb-4' />
        <div className='constellation flex gap-4'>
          {Object.keys(variantStyles).map((variant) => {
            return (
              <ul className='constellation list-none flex flex-col gap-2 p-0' key={variant}>
                {allSizes.map((size) => {
                  return (
                    <li key={`${variant}-${size}`}>
                      <ButtonComponent
                        {...args}
                        variant={variant as ButtonVariants}
                        icon={icon && <IconApple />}
                        text={`${size}`}
                        size={size}
                      />
                    </li>
                  )
                })}
              </ul>
            )
          })}
        </div>
      </section>
      <section className='constellation p-6'>
        <Text variant='title2'>Link</Text>
        <Divider variant='medium' className='mt-2 mb-4' />
        <ul className='constellation list-none flex flex-col gap-2 p-0'>
          {['large', 'default', 'small'].map((size) => {
            return (
              <li key={`link-${size}`}>
                <Link {...args} text={size} size={size as LinkSizes} />
              </li>
            )
          })}
        </ul>
      </section>
      <section className='constellation p-6'>
        <Text variant='title2'>Alert Button</Text>
        <Divider variant='medium' className='mt-2 mb-4' />
        <ul className='constellation list-none flex flex-col gap-2 p-0'>
          {['large', 'default', 'small'].map((size) => {
            return (
              <li key={`alert-${size}`}>
                <AlertButton state={args.state} text='Alert' size={size as AlertSizes} />
              </li>
            )
          })}
        </ul>
      </section>
      <section className='constellation p-6'>
        <Text variant='title2'>Icon Button</Text>
        <Divider variant='medium' className='mt-2 mb-4' />
        <ul className='constellation list-none flex flex-col gap-2 p-0'>
          {allSizes.map((size) => {
            return (
              <li key={`icon-${size}`}>
                <IconButton icon={<IconApple />} state={args.state} size={size} />
              </li>
            )
          })}
        </ul>
      </section>
      <section className='constellation p-6'>
        <Text variant='title2'>Close Button</Text>
        <Divider variant='medium' className='mt-2 mb-4' />
        <ul className='constellation list-none flex flex-col gap-2 p-0'>
          {['large', 'default'].map((size) => {
            return (
              <li key={`close-${size}`}>
                <CloseButton {...args} size={size as CloseButtonSizes} />
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export const AllButtons = Template.bind({})
