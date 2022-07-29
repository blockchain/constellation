import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { Flex, Padding } from '../..'
import { FlexGrow, FlexGrowComponent } from '.'

export default {
  argTypes: {
    column1Grow: {
      control: { type: 'number' },
      description: 'Number indicating the flex-grow value of the first column (only for storybook)',
    },
    column1Shrink: {
      control: { type: 'number' },
      description:
        'Number indicating the flex-shrink value of the first column (only for storybook)',
    },
    column2Grow: {
      control: { type: 'number' },
      description:
        'Number indicating the flex-grow value of the second column (only for storybook)',
    },
    column2Shrink: {
      control: { type: 'number' },
      description:
        'Number indicating the flex-shrink value of the second column (only for storybook)',
    },
    column3Grow: {
      control: { type: 'number' },
      description: 'Number indicating the flex-grow value of the third column (only for storybook)',
    },
    column3Shrink: {
      control: { type: 'number' },
      description:
        'Number indicating the flex-shrink value of the third column (only for storybook)',
    },
    grow: {
      control: false,
    },
    shrink: {
      control: false,
    },
  },
  component: FlexGrow,
  title: 'Base/FlexGrow',
} as ComponentMeta<FlexGrowComponent>

export const GrowElementVertically = () => (
  <div className='constellation w-96 h-72 flex'>
    <Flex flexDirection='column'>
      <div className='bg-red-500'>
        <Padding all={1}>Header</Padding>
      </div>

      <FlexGrow grow>
        <div className='bg-green-500 h-full'>
          <Padding all={1}>Content</Padding>
        </div>
      </FlexGrow>

      <div className='bg-blue-500'>
        <Padding all={1}>Footer</Padding>
      </div>
    </Flex>
  </div>
)

export const GrowMultipleElementsVertically = () => (
  <div className='constellation w-96 h-72 flex'>
    <Flex flexDirection='column'>
      <div className='bg-red-500'>
        <Padding all={1}>Header</Padding>
      </div>

      <FlexGrow grow>
        <div className='bg-green-500 h-full'>
          <Padding all={1}>Content</Padding>
        </div>
      </FlexGrow>

      <FlexGrow grow>
        <div className='bg-blue-500 h-full'>
          <Padding all={1}>Footer</Padding>
        </div>
      </FlexGrow>
    </Flex>
  </div>
)

export const GrowElementHorizontally = () => (
  <div className='constellation w-96 h-72 flex'>
    <Flex flexDirection='row' grow>
      <div className='bg-red-500'>
        <Padding all={1}>Header</Padding>
      </div>

      <FlexGrow grow>
        <div className='bg-green-500 h-full'>
          <Padding all={1}>Content</Padding>
        </div>
      </FlexGrow>

      <div className='bg-blue-500 h-full'>
        <Padding all={1}>Footer</Padding>
      </div>
    </Flex>
  </div>
)

export const GrowMultipleElementsHorizontally = () => (
  <div className='constellation w-96 h-72 flex'>
    <Flex flexDirection='row' grow>
      <div className='bg-red-500'>
        <Padding all={1}>Header</Padding>
      </div>

      <FlexGrow grow>
        <div className='bg-green-500 h-full'>
          <Padding all={1}>Content</Padding>
        </div>
      </FlexGrow>

      <FlexGrow grow>
        <div className='bg-blue-500 h-full'>
          <Padding all={1}>Footer</Padding>
        </div>
      </FlexGrow>
    </Flex>
  </div>
)

export const ShrinkElementHorizontally = () => (
  <div className='constellation w-[1000px] h-72 flex'>
    <Flex grow>
      <FlexGrow shrink={0}>
        <Padding all={1}>
          <b>This will not shrink at all.</b>
        </Padding>
      </FlexGrow>

      <FlexGrow shrink={2}>
        <Padding all={1}>
          <b>This will shrink.</b> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nemo, exercitationem non, iste cum cumque sed expedita suscipit consectetur pariatur
          laudantium eum sit consequatur? Incidunt natus quia at doloribus minus repudiandae!
        </Padding>
      </FlexGrow>

      <FlexGrow grow>
        <Padding all={1}>
          <b>This will grow.</b> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi, vel quos hic sit
          culpa, voluptate corrupti atque facere perspiciatis rerum ipsum. Temporibus nihil ipsa
          nostrum adipisci perspiciatis consectetur ipsam.
        </Padding>
      </FlexGrow>
    </Flex>
  </div>
)

type testProps = {
  column1Grow?: number
  column1Shrink?: number
  column2Grow?: number
  column2Shrink?: number
  column3Grow?: number
  column3Shrink?: number
}

export type TestComponent = FC<testProps>

export const InteractiveFlexGrowAndShrink: ComponentStory<TestComponent> = ({
  column1Grow,
  column1Shrink,
  column2Grow,
  column2Shrink,
  column3Grow,
  column3Shrink,
}) => (
  <div className='constellation w-[1000px] h-72 flex'>
    <Flex grow>
      <FlexGrow grow={column1Grow} shrink={column1Shrink}>
        <div className='bg-blue-500 h-full'>
          <Padding all={1}>Column 1</Padding>
        </div>
      </FlexGrow>

      <FlexGrow grow={column2Grow} shrink={column2Shrink}>
        <div className='bg-red-500 h-full'>
          <Padding all={1}>Column 2</Padding>
        </div>
      </FlexGrow>

      <FlexGrow grow={column3Grow} shrink={column3Shrink}>
        <div className='bg-green-500 h-full'>
          <Padding all={1}>Column 3</Padding>
        </div>
      </FlexGrow>
    </Flex>
  </div>
)
