/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { BaseCard as BaseCardComponent, BaseCardComponent as BaseCardComponentProps } from '.'

export default {
  argTypes: {
    accentColor: { control: 'color' },
    onButtonClick: { action: 'click button' },
    onCardClick: { action: 'click card' },
    onCloseClick: { action: 'click close' },
  },
  args: {
    border: false,
  },
  component: BaseCardComponent,
  title: 'Compositions/Cards/BaseCard',
} as ComponentMeta<BaseCardComponentProps>

const Template: BaseCardComponentProps = (args) => {
  return (
    <BaseCardComponent {...args}>
      <div className='py-5'>Your card content goes in here</div>
    </BaseCardComponent>
  )
}

export const BaseCard = Template.bind({})
