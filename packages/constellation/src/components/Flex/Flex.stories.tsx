import { ComponentMeta } from '@storybook/react'
import { Flex, FlexComponent, FlexGrow } from 'components'
import React, { FC } from 'react'
import { PXToRem } from 'utils'

export default {
  component: Flex,
  title: 'Components/Flex',
} as ComponentMeta<FlexComponent>

const GreyCircle = () => (
  <div style={{ background: 'grey', borderRadius: 12, height: 24, width: 24 }} />
)

const Text: FC = ({ children }) => <span style={{ background: 'grey' }}>{children}</span>

export const IconListItemExample = () => {
  return (
    <Flex gap={PXToRem(6)}>
      <Flex alignItems='center' justifyContent='center'>
        <GreyCircle />
      </Flex>

      <FlexGrow>
        <Flex gap={PXToRem(6)} flexDirection='column'>
          <Text>Title</Text>

          <Text>Subtitle</Text>
        </Flex>
      </FlexGrow>
    </Flex>
  )
}

export const AppBarExample = () => {
  return (
    <Flex justifyContent='space-between'>
      <Flex gap={PXToRem(6)} alignItems='center'>
        <GreyCircle />

        <span>Title</span>
      </Flex>

      <Flex gap={PXToRem(4)}>
        <GreyCircle />
        <GreyCircle />
        <GreyCircle />
        <GreyCircle />
      </Flex>
    </Flex>
  )
}
