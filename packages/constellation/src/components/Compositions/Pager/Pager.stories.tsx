import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Pager as PagerComponent, PagerComponent as PagerComponentType } from '.'

export default {
  argTypes: {
    onChange: {
      description:
        'The callback function to be called when the use clicks on an indicator or an arrow. The callback function receives the new page number as an argument',
    },
    selectedPage: {
      control: {
        disable: true,
      },
      description: 'The current selected page number',
    },
    totalPages: {
      control: {
        max: 20,
        min: 1,
        step: 1,
        type: 'number',
      },
      description: 'The total number of pages',
    },
  },
  args: { totalPages: 5 },
  component: PagerComponent,
  title: 'Compositions/Pager',
} as ComponentMeta<PagerComponentType>

const Template: ComponentStory<PagerComponentType> = ({ totalPages }) => {
  const [selectedPage, setSelectedPage] = useState(0)

  return (
    <PagerComponent
      selectedPage={selectedPage}
      totalPages={totalPages}
      onChange={(newIndex) => setSelectedPage(newIndex)}
    />
  )
}

export const Pager = Template.bind({})
