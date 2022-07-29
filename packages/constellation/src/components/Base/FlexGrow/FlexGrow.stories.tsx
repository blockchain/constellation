import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { Flex, Padding } from '..'
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
  <Flex flexDirection='column' grow style={{ height: 600, width: 300 }}>
    <Padding all={1} style={{ background: 'red', color: 'white' }}>
      Header
    </Padding>

    <FlexGrow grow style={{ background: 'green', color: 'white' }}>
      <Padding all={1}>Content</Padding>
    </FlexGrow>

    <Padding all={1} style={{ background: 'blue', color: 'white' }}>
      Footer
    </Padding>
  </Flex>
)

export const GrowMultipleElementsVertically = () => (
  <Flex flexDirection='column' style={{ height: 600, width: 300 }}>
    <Padding all={1} style={{ background: 'red', color: 'white' }}>
      Header
    </Padding>

    <FlexGrow grow style={{ background: 'green', color: 'white' }}>
      <Padding all={1}>Content</Padding>
    </FlexGrow>

    <FlexGrow grow style={{ background: 'blue', color: 'white' }}>
      <Padding all={1}>Footer</Padding>
    </FlexGrow>
  </Flex>
)

export const GrowElementHorizontally = () => (
  <Flex style={{ height: 600, width: 800 }}>
    <Padding all={1} style={{ background: 'red', color: 'white' }}>
      Column 1
    </Padding>

    <FlexGrow grow style={{ background: 'green', color: 'white' }}>
      <Padding all={1}>Column 2</Padding>
    </FlexGrow>

    <Padding all={1} style={{ background: 'blue', color: 'white' }}>
      Column 3
    </Padding>
  </Flex>
)

export const GrowMultipleElementsHorizontally = () => (
  <Flex grow style={{ height: 600, width: 800 }}>
    <Padding all={1} style={{ background: 'red', color: 'white' }}>
      Column 1
    </Padding>

    <FlexGrow grow style={{ background: 'green', color: 'white' }}>
      <Padding all={1}>Column 2</Padding>
    </FlexGrow>

    <FlexGrow grow style={{ background: 'blue', color: 'white' }}>
      <Padding all={1}>Column 3</Padding>
    </FlexGrow>
  </Flex>
)

export const ShrinkElementHorizontally = () => (
  <Flex style={{ height: 600, width: 800 }}>
    <FlexGrow shrink={0} style={{ background: 'red', color: 'white' }}>
      <Padding all={1}>
        <b>This will not shrink at all.</b>
      </Padding>
    </FlexGrow>

    <FlexGrow shrink={2} style={{ background: 'green', color: 'white' }}>
      <Padding all={1}>
        <b>This will shrink.</b> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nemo, exercitationem non, iste cum cumque sed expedita suscipit consectetur pariatur
        laudantium eum sit consequatur? Incidunt natus quia at doloribus minus repudiandae!
      </Padding>
    </FlexGrow>

    <FlexGrow grow style={{ background: 'blue', color: 'white' }}>
      <Padding all={1}>
        <b>This will grow.</b> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi, vel quos hic sit
        culpa, voluptate corrupti atque facere perspiciatis rerum ipsum. Temporibus nihil ipsa
        nostrum adipisci perspiciatis consectetur ipsam.
      </Padding>
    </FlexGrow>
  </Flex>
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
  <Flex style={{ height: 600, width: 800 }}>
    <FlexGrow
      grow={column1Grow}
      shrink={column1Shrink}
      style={{ background: 'red', color: 'white' }}
    >
      <Padding all={1}>Column 1</Padding>
    </FlexGrow>

    <FlexGrow
      grow={column2Grow}
      shrink={column2Shrink}
      style={{ background: 'green', color: 'white' }}
    >
      <Padding all={1}>Column 2</Padding>
    </FlexGrow>

    <FlexGrow
      grow={column3Grow}
      shrink={column3Shrink}
      style={{ background: 'blue', color: 'white' }}
    >
      <Padding all={1}>Column 3</Padding>
    </FlexGrow>
  </Flex>
)
