import React from 'react'

import * as Icons from '.'
import type { Props } from './Icon.types'

export const Icon = ({ icon = 'IconPlus', ...args }: Props & { icon: keyof typeof Icons }) => {
  const RenderedIcon = Icons[icon]

  return <RenderedIcon {...args} />
}

export const AllIcons = () => (
  <div className='constellation flex flex-wrap items-start gap-4'>
    {Object.keys(Icons).map((name) => {
      const Component = Icons[name as keyof typeof Icons]

      return (
        <div className='flex items-center gap-1 w-40' key={name}>
          <Component color='var(--color-primary)' />
          <p className='text-xs text-body'>{name}</p>
        </div>
      )
    })}
  </div>
)

export default {
  argTypes: {
    color: {
      control: { type: 'select' },
      // TODO: update with colors enum,
      defaultValue: 'var(--color-primary)',
      options: ['#999999', 'var(--color-primary)'],
    },
    icon: {
      control: { type: 'select' },
      defaultValue: 'IconApple',
      options: Object.keys(Icons),
    },
    size: {
      control: { type: 'number' },
      defaultValue: 2,
      description: 'Size of the icon in `rem` units',
    },
  },
  args: {},
  component: Icons.IconPlus,
  title: 'Base/Icon',
}
