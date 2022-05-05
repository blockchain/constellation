import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AnimatedContainer } from 'components'
import React, { FC } from 'react'

type StoryType = FC<{ isExpanded: boolean }>

export default {
  argTypes: {
    isExpanded: {
      control: {
        type: 'boolean',
      },
    },
  },
  title: 'Components/AnimatedContainer',
} as ComponentMeta<StoryType>

export const Preview: ComponentStory<StoryType> = ({ isExpanded }) => (
  <div style={{ backgroundColor: 'red', display: 'inline-flex' }}>
    <AnimatedContainer>
      <div style={isExpanded ? { height: 200, width: 200 } : { height: 100, width: 100 }} />
    </AnimatedContainer>
  </div>
)
