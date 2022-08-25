import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { IconQrCode, SemanticColors, Text } from '../../../Base'
import { SectionHeader as RenderedSectionHeader, SectionHeaderComponent } from '.'

export default {
  argTypes: {
    children: {},
  },
  args: {},
  component: RenderedSectionHeader,
  title: 'Compositions/Headers/SectionHeader',
} as ComponentMeta<SectionHeaderComponent>

const Template: ComponentStory<SectionHeaderComponent> = ({ ...args }) => {
  return (
    <section className='constellation w-3/4 h-80 bg-background-dark'>
      <RenderedSectionHeader {...args}>
        <Text variant='paragraph2' className='mt-0 mb-0'>
          Title
        </Text>
        <IconQrCode color={SemanticColors.muted} />
      </RenderedSectionHeader>
      <div className='constellation p-8'>
        <Text variant='paragraph1'>Section content</Text>
      </div>
    </section>
  )
}

export const SectionHeader = Template.bind({})
