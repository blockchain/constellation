import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { Flex, Padding } from '../'
import { FlexGrow, FlexGrowComponent } from '.'

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      defaultValue: 'button',
      description: 'Allows for overriding the underlying DOM element ',
      options: ['button', 'div', 'a'],
    },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    icon: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'An optional Icon displayed inline with button text',
    },
    onClick: { action: 'click' },
    size: {
      control: { type: 'radio' },
      defaultValue: 'large',
      options: ['default', 'large', 'small'],
    },
    state: {
      control: { type: 'radio' },
      defaultValue: 'initial',
      description: 'An optional visual progress indication of a tiggered button action',
      options: ['initial', 'loading', 'success'],
    },
    text: { control: { type: 'text' }, description: 'Text content of button' },
    type: {
      control: { type: 'select' },
      defaultValue: 'button',
      options: ['button', 'reset', 'submit'],
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'The stylistic variant to use when rendering.',
      options: ['primary', 'secondary', 'minimal'],
    },
    width: {
      control: { type: 'radio' },
      defaultValue: 'auto',
      options: ['auto', 'full'],
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
