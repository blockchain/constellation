import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Text } from '../../../Base'
import { SettingsHeader as RenderedSettingsHeader, SettingsHeaderComponent } from '.'
import { SettingsHeaderModes } from './SettingsHeader.types'

export default {
  argTypes: {
    onCancel: {
      action: 'click',
    },
    onEditClick: {
      action: 'click',
    },
    onSave: {
      action: 'click',
    },
    title: {
      control: { type: 'text' },
    },
  },
  args: {},
  component: RenderedSettingsHeader,
  title: 'Compositions/Headers/SettingsHeader',
} as ComponentMeta<SettingsHeaderComponent>

const Template: ComponentStory<SettingsHeaderComponent> = ({ ...args }) => {
  const [mode, setMode] = useState<SettingsHeaderModes>('initial')
  return (
    <section className='constellation w-3/4 h-80 bg-background-dark'>
      <RenderedSettingsHeader
        {...args}
        mode={mode}
        onEditClick={() => setMode('unsaved')}
        onSave={() => setMode('initial')}
        onCancel={() => setMode('initial')}
      />
      <div className='constellation p-8'>
        <Text variant='paragraph1'>Section content</Text>
      </div>
    </section>
  )
}

export const SettingsHeader = Template.bind({})
