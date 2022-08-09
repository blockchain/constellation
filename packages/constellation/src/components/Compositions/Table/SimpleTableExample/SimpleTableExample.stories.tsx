import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC, useState } from 'react'

import { ButtonCell, Row, TableContainer, TextCell } from '../index'

export default {
  argTypes: { onClick: { action: 'clicked' } },
  args: {},
  title: 'Compositions/Table/SimpleTableExample',
} as ComponentMeta<FC>

const Template: ComponentStory<FC<{ onClick: () => void }>> = ({ onClick }) => {
  const [sort, setSort] = useState<'up' | 'down'>('down')

  return (
    <TableContainer className='table-auto'>
      <Row header>
        <TextCell
          text='Asset'
          sort={sort}
          toggleSort={() => setSort(sort === 'up' ? 'down' : 'up')}
        />
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
export const SimpleTableExample = Template.bind({})
