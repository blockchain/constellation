import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LoadingArea, LoadingAreaComponent, Padding, Typography } from 'components'
import React from 'react'
import { PXToRem } from 'utils'

export default {
  component: LoadingArea,
  title: 'Components/LoadingArea',
} as ComponentMeta<LoadingAreaComponent>

const Template: ComponentStory<LoadingAreaComponent> = (args) => <LoadingArea {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <Padding vertical={PXToRem(10)} horizontal={PXToRem(20)}>
      <Typography.Body1>Text</Typography.Body1>
    </Padding>
  ),
  isLoading: false,
}
