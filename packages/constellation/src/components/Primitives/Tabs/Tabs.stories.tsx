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
      { key: 'tab1', titleContent: 'Tab 1' },
      { key: 'tab2', titleContent: 'Tab 2' },
      { key: 'tab3', titleContent: 'Tab 3' },
      { key: 'tab4', titleContent: 'Tab 4' },
    ],
  },
  component: RenderedTabs,
  title: 'Primitives/Tabs',
} as ComponentMeta<TabsComponent>

const Template: ComponentStory<TabsComponent> = (args) => {
  return (
    <div className='constellation py-2 px-6'>
      <RenderedTabs {...args} />
    </div>
  )
}

export const Tabs = Template.bind({})
