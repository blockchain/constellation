import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

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
      <div className='p-20'>
        <p className='w-48'>This is a styled container with a border and rounded corners.</p>
      </div>
    </TableContainerComponent>
  )
}

export const TableContainer = Template.bind({})
