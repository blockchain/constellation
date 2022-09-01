import React from 'react'

import { SemanticColors } from '../Colors'
import * as Icons from '.'
import { createIconComponent as IconComponent } from './Icon'
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
          <Component color={SemanticColors.primary} size={2} />
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
      options: Object.values(SemanticColors),
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
    },
    size: {
      control: { type: 'radio' },
      description: 'Size of the icon. This prop also accepts a number for custom `rem` values.',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    color: SemanticColors.primary,
    icon: 'IconApple',
    size: 'small',
  },
  component: IconComponent,
  title: 'Base/Icon',
}
