import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { ButtonCell, Row, TableContainer, TextCell } from '..'

export default {
  argTypes: { onClick: { action: 'clicked' } },
  args: {},
  title: 'Compositions/Table/Examples/SimpleTable',
} as ComponentMeta<FC>

const Template: ComponentStory<FC<{ onClick: () => void }>> = ({ onClick }) => {
  return (
    <TableContainer className='table-auto'>
      <Row header>
        <TextCell text='Asset' />
        <TextCell subtext='Amount' />
        <TextCell subtext='Actions' />
      </Row>
      <tbody>
        <Row>
          <TextCell subtext='BTC' text='Bitcoin' />
          <TextCell subtext='1 BTC' text='$32,000' />
          <ButtonCell
            primaryButton={{ onClick, text: 'Buy', variant: 'primary' }}
            secondaryButton={{ onClick, text: 'Sell', variant: 'secondary' }}
          />
        </Row>
        <Row>
          <TextCell subtext='BTC' text='Bitcoin' />
          <TextCell subtext='1 BTC' text='$32,000' />
          <ButtonCell
            primaryButton={{ onClick, text: 'Buy', variant: 'primary' }}
            secondaryButton={{ onClick, text: 'Sell', variant: 'secondary' }}
          />
        </Row>
      </tbody>
    </TableContainer>
  )
}
export const SimpleTable = Template.bind({})
