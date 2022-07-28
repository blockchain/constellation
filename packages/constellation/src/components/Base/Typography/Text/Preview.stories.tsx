import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Text as TextComponent, TextComponentType } from '.'
import { TextVariants, textVariants } from './Text.types'

export default {
  argTypes: {},
  component: TextComponent,
  title: 'Base/Typography/Preview',
} as ComponentMeta<TextComponentType>

const Template: ComponentStory<TextComponentType> = ({
  children = 'The quick brown fox jumps over the lazy dog',
  ...args
}) => {
  return (
    <div className='constellation px-12'>
      <div className='constellation border-b border-b-medium flex p-4 mb-12'>
        <TextComponent variant='title1'>Typography</TextComponent>
      </div>
      <ul className='constellation p-0'>
        {textVariants.map((variant) => {
          return (
            <li
              className='constellation border-b border-b-medium grid grid-cols-2 items-center gap-20'
              key={variant}
            >
              <TextComponent truncate variant={variant as TextVariants} {...args}>
                {children}
              </TextComponent>
              <div className='capitalize'>
                <TextComponent variant='caption1'>{variant}</TextComponent>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const Preview = Template.bind({})
