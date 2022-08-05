import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { TextCell, ButtonCell } from '../'
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
              primaryText='Buy'
              primaryOnClick={() => {}}
              secondaryText='Sell'
              secondaryOnClick={() => {}}
            />
          </tr>
          <tr>
            <TextCell text='Bitcoin' subtext='BTC' />
            <TextCell text='$32,000' subtext='1 BTC' />
            <ButtonCell
              primaryText='Buy'
              primaryOnClick={() => {}}
              secondaryText='Sell'
              secondaryOnClick={() => {}}
            />
          </tr>
        </tbody>
      </table>
    </TableContainerComponent>
  )
}

export const TableContainer = Template.bind({})
