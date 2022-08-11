import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { TableContainer, TextCell } from '../index'
import { Row as RowComponent } from '.'

export default {
  argTypes: {
    header: {
      control: { type: 'boolean' },
    },
  },
  args: { header: true },
  component: RowComponent,
  title: 'Compositions/Table/Row',
} as ComponentMeta<FC>

const Template: ComponentStory<FC> = (args) => {
  return (
    <TableContainer>
      <RowComponent {...args}>
        <TextCell text='First Row' subtext='The header prop on this is controlled below' />
      </RowComponent>
      <RowComponent>
        <TextCell text='Second Row' subtext='This row is not affected by the controlls below' />
      </RowComponent>
      <RowComponent>
        <TextCell
          text='Third Row'
          subtext='This row has no bottom border so it works with the container '
        />
      </RowComponent>
    </TableContainer>
  )
}

export const Row = Template.bind({})
