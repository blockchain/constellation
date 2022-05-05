import { ComponentMeta, ComponentStory } from '@storybook/react'
import { colors } from 'colors'
import React from 'react'
import { convertHexToRGBA } from 'utils'

import BoxShape from './BoxShape'
import { BoxShapeComponent } from './BoxShape.types'

export default {
  argTypes: {
    backgroundColor: {
      defaultValue: 'default',
    },
    borderColor: {
      defaultValue: 'regular',
    },
    borderRadius: {
      defaultValue: 'medium',
    },
    borderWidth: {
      defaultValue: 'small',
    },
    boxShadow: {
      defaultValue: 'elevation1',
    },
  },
  component: BoxShape,
  title: 'Components/BoxShape',
} as ComponentMeta<BoxShapeComponent>

export const Template: ComponentStory<BoxShapeComponent> = (args) => (
  <BoxShape style={{ height: 300, width: 300 }} {...args} />
)

export const CustomColors = Template.bind({})
CustomColors.args = {
  backgroundColor: convertHexToRGBA(colors.green600, 0.3),
  borderColor: colors.green600,
  boxShadow: 'elevation1',
}
