/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Card as CardComponent, CardComponent as CardComponentProps } from '.'

export default {
  argTypes: {},
  args: {},
  component: CardComponent,
  title: 'Compositions/Card',
} as ComponentMeta<CardComponentProps>

const Template: CardComponentProps = ({}) => {
  return <CardComponent />
}

export const Card = Template.bind({})
