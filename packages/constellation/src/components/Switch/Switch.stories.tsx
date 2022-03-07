import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Text from '../Text'
import Switch from '.'
import { SwitchComponentProps } from './types'

export default {
  argTypes: {
    checked: {
      description: 'Boolean indicating if the switch is activated/checked or not.',
      type: 'boolean',
    },
    color: {
      description: 'The rendering color of the switch.',
      options: ['blue', 'green'],
      type: 'select',
    },
    disabled: {
      description: 'Boolean indicated if the switch is disabled in the context of a form',
    },
  },
  component: Switch,
  title: 'Components/Switch',
} as unknown as ComponentMeta<typeof Switch>

export const Default: ComponentStory<typeof Switch> = (args: SwitchComponentProps) => (
  <Switch {...args} />
)

Default.args = { checked: true, color: 'blue', disabled: false }

export const AllVariants: ComponentStory<typeof Switch> = () => {
  const buildColorVariants = (color?: 'blue' | 'green'): Array<SwitchComponentProps> => [
    {
      checked: true,
      color,
      disabled: false,
    },
    {
      checked: false,
      color,
      disabled: false,
    },
    {
      checked: true,
      color,
      disabled: true,
    },
    {
      checked: false,
      color,
      disabled: true,
    },
  ]

  return (
    <div
      style={{
        alignItems: 'start',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'space-around',
        width: '100%',
      }}
    >
      <div>
        <Text variant='title-2'>Blue Variants</Text>
        {buildColorVariants('blue').map((variant: SwitchComponentProps, i) => (
          <div
            key={i}
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '10px 20px',
            }}
          >
            <Switch {...variant} />
            <pre style={{ backgroundColor: 'lightgray', fontSize: '12px', padding: '2px' }}>
              {JSON.stringify(variant)}
            </pre>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '16px' }}>
        <Text variant='title-2'>Green Variants</Text>
        {buildColorVariants('green').map((variant: SwitchComponentProps, i) => (
          <div
            key={i}
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '10px 20px',
            }}
          >
            <Switch {...variant} />
            <pre style={{ backgroundColor: 'lightgray', fontSize: '12px', padding: '2px' }}>
              {JSON.stringify(variant)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  )
}
