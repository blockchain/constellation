import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { ButtonCell, TextCell } from '../'
import { TableContainer as TableContainerComponent } from '.'

export default {
  argTypes: {},
  args: {},
  component: TableContainerComponent,
  title: 'Compositions/Table/TableContainer',
} as ComponentMeta<FC>

const Template: ComponentStory<FC> = () => {
  return (
    <TableContainerComponent>
      <table className='table-auto'>
        <thead>
          <tr>
            <TextCell text='Asset' header />
            <TextCell text='Amount' header />
            <TextCell text='Actions' header />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TextCell text='Bitcoin' subtext='BTC' />
            <TextCell text='$32,000' subtext='1 BTC' />
            <ButtonCell
              primaryButton={{
                text: 'Buy',
                onClick: () => {},
                variant: 'primary',
              }}
              secondaryButton={{
                text: 'Sell',
                onClick: () => {},
                variant: 'secondary',
              }}
            />
          </tr>
          <tr>
            <TextCell text='Bitcoin' subtext='BTC' footer />
            <TextCell text='$32,000' subtext='1 BTC' footer />
            <ButtonCell
              primaryButton={{
                text: 'Buy',
                onClick: () => {},
                variant: 'primary',
              }}
              secondaryButton={{
                text: 'Sell',
                onClick: () => {},
                variant: 'secondary',
              }}
              footer
            />
          </tr>
        </tbody>
      </table>
    </TableContainerComponent>
  )
}

export const TableContainer = Template.bind({})
