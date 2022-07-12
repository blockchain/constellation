import React from 'react'

import * as Icons from '.'
import type { Props } from './Icon.types'

export const Icon = ({ icon = 'IconPlus', ...args }: Props & { icon: keyof typeof Icons }) => {
  const RenderedIcon = Icons[icon]

  return <RenderedIcon {...args} />
}

export const AllIcons = () => (
  <div className='flex flex-wrap items-start gap-4'>
    {Object.keys(Icons).map((name) => {
      const Component = Icons[name as keyof typeof Icons] as React.ComponentType

      return (
        <div className='flex items-center gap-1 w-40' key={name}>
          <Component />
          <p className='text-xs'>{name}</p>
        </div>
      )
    })}
  </div>
)

export default {
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['#999999'], // TODO: update with colors enum,
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    size: { control: { type: 'number' }, description: 'Size of the icon in `em` units' },
  },
  args: {},
  component: Icons.IconPlus,
  title: 'Base/Icon',
}
