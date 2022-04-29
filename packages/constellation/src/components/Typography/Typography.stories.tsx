import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex } from 'components/Flex'
import React, { FC } from 'react'

import { Typography } from '.'

export default {
  argTypes: {
    children: {
      defaultValue: 'The quick brown fox jumps over the lazy dog 0123456789',
    },
  },
  title: 'Components/Typography',
} as ComponentMeta<FC>

export const Preview: ComponentStory<FC> = ({ children }) => {
  return (
    <Flex flexDirection='column' gap={16}>
      <Typography.Body1>Body1: {children}</Typography.Body1>
      <Typography.Body2>Body2: {children}</Typography.Body2>
      <Typography.BodyMono>BodyMono: {children}</Typography.BodyMono>
      <Typography.Caption1>Caption1: {children}</Typography.Caption1>
      <Typography.Caption2>Caption2: {children}</Typography.Caption2>
      <Typography.Display>Display: {children}</Typography.Display>
      <Typography.Overline>Overline: {children}</Typography.Overline>
      <Typography.Paragraph1>Paragraph1: {children}</Typography.Paragraph1>
      <Typography.Paragraph2>Paragraph2: {children}</Typography.Paragraph2>
      <Typography.ParagraphMono>ParagraphMono: {children}</Typography.ParagraphMono>
      <Typography.SubHeading>SubHeading: {children}</Typography.SubHeading>
      <Typography.Title1>Title1: {children}</Typography.Title1>
      <Typography.Title2>Title2: {children}</Typography.Title2>
      <Typography.Title3>Title3: {children}</Typography.Title3>
    </Flex>
  )
}
