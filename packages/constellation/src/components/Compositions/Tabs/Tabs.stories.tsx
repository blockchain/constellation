import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Tabs as RenderedTabs, TabsComponent } from '.'

export default {
  argTypes: {
    defaultActiveTab: { control: 'text', description: 'The default active tab' },
    onTabChange: {
      action: 'click',
      description: 'An optional callback that is fired when active tab is changed.',
    },
    size: {
      control: { type: 'radio' },
      options: ['large', 'small'],
    },
    tabs: {
      control: { type: 'array' },
      description: 'An array of Tab items that populate in the Tabs control',
    },
  },
  args: {
    defaultActiveTab: 'tab2',
    size: 'large',
    tabs: [
      { title: 'Tab 1', value: 'tab1' },
      { title: 'Tab 2', value: 'tab2' },
      { title: 'Tab 3', value: 'tab3' },
      { title: 'Tab 4', value: 'tab4' },
    ],
  },
  component: RenderedTabs,
  title: 'Compositions/Tabs',
} as ComponentMeta<TabsComponent>

const Template: ComponentStory<TabsComponent> = (args) => {
  return (
    <div className='constellation py-2 px-6'>
      <RenderedTabs {...args} />
    </div>
  )
}

export const Tabs = Template.bind({})
