import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, SeparatedList, SeparatedListComponent } from 'components'
import React from 'react'

const separatedListStoriesMeta: ComponentMeta<SeparatedListComponent> = {
  component: SeparatedList,
  title: 'Components/SeparatedList',
}

const Template: ComponentStory<SeparatedListComponent> = (args) => <SeparatedList {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [<span key={0}>item 1</span>, <span key={1}>item 2</span>, <span key={2}>item 3</span>],
}

export const CustomSeparator = () => (
  <Flex flexDirection='column'>
    <SeparatedList
      separatorBuilder={() => <div style={{ background: 'red', height: 1, width: '100%' }} />}
    >
      <span key={0}>item 1</span>
      <span key={1}>item 2</span>
      <span key={2}>item 3</span>
    </SeparatedList>
  </Flex>
)

export const AddSepartorToColumn = () => {
  return (
    <Flex flexDirection='column'>
      <SeparatedList>
        <span key={0}>item 1</span>
        <span key={1}>item 2</span>
        <span key={2}>item 3</span>
      </SeparatedList>
    </Flex>
  )
}

export const AddSepartorToRow = () => {
  return (
    <Flex flexDirection='row'>
      <SeparatedList separatorBuilder={() => <div style={{ background: 'red', width: 1 }} />}>
        <span key={0}>item 1</span>
        <span key={1}>item 2</span>
        <span key={2}>item 3</span>
      </SeparatedList>
    </Flex>
  )
}

export default separatedListStoriesMeta
