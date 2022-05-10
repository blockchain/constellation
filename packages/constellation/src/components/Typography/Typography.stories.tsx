import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, Text, Typography } from 'components'
import React, { FC } from 'react'
import { PXToRem } from 'utils'

export default {
  argTypes: {
    children: {
      defaultValue: 'The quick brown fox jumps over the lazy dog 0123456789',
    },
  },
  title: 'Components/Typography',
} as ComponentMeta<FC>

export const Preview: ComponentStory<FC> = ({ children }) => {
  const DiplayRow: FC<{ title: string }> = ({ children, title }) => (
    <Flex flexDirection='column'>
      <Text fontSize={PXToRem(12)} lineHeight={PXToRem(18)} fontWeigth='semibold' color='secondary'>
        {title}
      </Text>

      {children}
    </Flex>
  )
  return (
    <Flex flexDirection='column' gap={2}>
      <DiplayRow title='Display'>
        <Typography.Display ellipsis>{children}</Typography.Display>
      </DiplayRow>

      <DiplayRow title='Title1'>
        <Typography.Title1 ellipsis>{children}</Typography.Title1>
      </DiplayRow>

      <DiplayRow title='Title2'>
        <Typography.Title2 ellipsis>{children}</Typography.Title2>
      </DiplayRow>

      <DiplayRow title='Title3'>
        <Typography.Title3 ellipsis>{children}</Typography.Title3>
      </DiplayRow>

      <DiplayRow title='SubHeading'>
        <Typography.SubHeading ellipsis>{children}</Typography.SubHeading>
      </DiplayRow>

      <DiplayRow title='BodyMono'>
        <Typography.BodyMono ellipsis>{children}</Typography.BodyMono>
      </DiplayRow>

      <DiplayRow title='Body1'>
        <Typography.Body1 ellipsis>{children}</Typography.Body1>
      </DiplayRow>

      <DiplayRow title='Body2'>
        <Typography.Body2 ellipsis>{children}</Typography.Body2>
      </DiplayRow>

      <DiplayRow title='ParagraphMono'>
        <Typography.ParagraphMono ellipsis>ParagraphMono: {children}</Typography.ParagraphMono>
      </DiplayRow>

      <DiplayRow title='Paragraph1'>
        <Typography.Paragraph1 ellipsis>Paragraph1: {children}</Typography.Paragraph1>
      </DiplayRow>

      <DiplayRow title='Paragraph2'>
        <Typography.Paragraph2 ellipsis>Paragraph2: {children}</Typography.Paragraph2>
      </DiplayRow>

      <DiplayRow title='Caption1'>
        <Typography.Caption1 ellipsis>Caption1: {children}</Typography.Caption1>
      </DiplayRow>

      <DiplayRow title='Caption2'>
        <Typography.Caption2 ellipsis>Caption2: {children}</Typography.Caption2>
      </DiplayRow>

      <DiplayRow title='Overline'>
        <Typography.Overline ellipsis>Overline: {children}</Typography.Overline>
      </DiplayRow>
    </Flex>
  )
}
