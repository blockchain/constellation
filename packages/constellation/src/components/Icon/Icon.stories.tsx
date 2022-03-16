import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { colors } from '../../colors'
import Text from '../Text'
import Icon, { iconComponentMap } from '.'
import { IconNameType } from './types'

const meta = {
  argTypes: {
    color: {
      description: 'The rendering color of the icon.',
      options: Object.keys(colors),
      type: 'select',
    },
    label: {
      description: 'The label of the icon.',
      type: 'string',
    },
    name: {
      description: 'The name of the icon to render.',
      options: Object.keys(iconComponentMap),
      type: 'select',
    },
    size: {
      control: { type: 'radio' },
      description: 'The size of the rendered the icon.',
    },
  },
  component: Icon,
  title: 'Components/Icon',
} as unknown as ComponentMeta<typeof Icon>

const Default: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

Default.args = { color: 'grey800', label: 'label', name: 'blockchainCircle', size: 'lg' }

const AllVariants: ComponentStory<typeof Icon> = () => {
  const icons = Object.keys(iconComponentMap)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '16px',
        width: '100%',
      }}
    >
      {icons.map((name) => (
        <div
          key={name}
          style={{
            alignItems: 'center',
            border: '1px solid #dcdcdc',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 8px',
            width: '125px',
          }}
        >
          <Icon label={name} name={name as IconNameType} color='grey700' size='lg' />
          <Text color='grey700' variant='paragraph-2' css={{ marginTop: '16px' }}>
            {name}
          </Text>
        </div>
      ))}
    </div>
  )
}

AllVariants.parameters = {
  controls: { exclude: 'variant' },
}

export default meta

export { AllVariants, Default }
