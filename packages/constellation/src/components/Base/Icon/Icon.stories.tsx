import React from 'react'

import * as Icons from '.'
import type { Props } from './Icon.types'

export const Icon = ({ icon = 'IconPlus', ...args }: Props & { icon: keyof typeof Icons }) => {
  const RenderedIcon = Icons[icon]

  return <RenderedIcon {...args} />
}

export const AllIcons = () => (
  <ul className='constellation flex flex-wrap justify-center gap-5 p-1'>
    {Object.keys(Icons).map((name) => {
      const Component = Icons[name as keyof typeof Icons]

      return (
        <li className='flex items-center gap-1 w-40 flex-col border border-primary p-2' key={name}>
          {/* TODO: update with colors enum */}
          <Component color='var(--color-primary)' size={2} />
          <p className='text-base text-body'>{name}</p>
        </li>
      )
    })}
  </ul>
)

export default {
  argTypes: {
    color: {
      control: { type: 'select' },
      // TODO: update with colors enum
      defaultValue: 'var(--color-primary)',
      options: ['#999999', 'var(--color-primary)'],
    },
    icon: {
      control: { type: 'select' },
      defaultValue: 'IconApple',
      options: Object.keys(Icons),
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'small',
      description: 'Size of the icon. This prop also accepts a number for custom `rem` values.',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {},
  component: Icons.IconPlus,
  title: 'Base/Icon',
}
