import { styled } from '@stitches/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Text from '../Text'
import Separator from '.'
import { SeparatorComponentProps, SeparatorVariants } from './types'

export default {
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      description: 'Separate the content vertically or horizontally.',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      description: 'The visual distinctness of the separator line.',
    },
  },
  component: Separator,
  title: 'Components/Separator',
} as unknown as ComponentMeta<typeof Separator>

export const Default: ComponentStory<typeof Separator> = (args: SeparatorComponentProps) => {
  if (args.orientation === 'vertical') {
    return (
      <div style={{ alignItems: 'center', display: 'flex', height: '20px' }}>
        <Text>Left Text</Text>
        <Separator {...args} css={{ margin: '0 15px' }} />
        <Text>Right Text</Text>
      </div>
    )
  }
  return (
    <div style={{ width: '100px' }}>
      <Text>Top Text</Text>
      <Separator {...args} css={{ margin: '6px 0' }} />
      <Text>Bottom Text</Text>
    </div>
  )
}

Default.args = { orientation: 'horizontal', variant: 'medium' }

export const AllVariants: ComponentStory<typeof Separator> = () => {
  const Box = styled('div', {})
  const Flex = styled('div', { display: 'flex' })
  const StyledText = styled(Text, {
    color: 'white',
    fontSize: 15,
    lineHeight: '20px',
  })

  const variants = ['subtle', 'medium', 'distinct'] as Array<SeparatorVariants>

  return (
    <>
      {variants.map((variant, i) => (
        <Box
          css={{
            border: '1px solid grey',
            margin: '25px 15px',
            maxWidth: 500,
            padding: '12px',
            width: '100%',
          }}
          key={i}
        >
          <StyledText variant='title-2' css={{ fontWeight: 500 }}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Variants
          </StyledText>
          <br />
          <StyledText variant='body-1'>
            Constellation: An open-source UI component library.
          </StyledText>
          <Separator orientation='horizontal' variant={variant} css={{ margin: '15px 0' }} />
          <Flex css={{ alignItems: 'center', height: 20 }}>
            <StyledText>API Docs</StyledText>
            <Separator orientation='vertical' variant={variant} css={{ margin: '0 15px' }} />
            <StyledText>Examples</StyledText>
            <Separator orientation='vertical' variant={variant} css={{ margin: '0 15px' }} />
            <StyledText>Source</StyledText>
          </Flex>
        </Box>
      ))}
    </>
  )
}
