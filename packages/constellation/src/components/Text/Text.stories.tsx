import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { ReactNode } from 'react'
import { useDarkMode } from 'storybook-dark-mode'

import { ThemeProvider } from '../../providers'
import { Text, TextComponent } from '.'
import { textSizes } from './types'

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'The quick brown fox jumps over the lazy dog 0123456789',
  color: 'primary',
  ellipsis: false,
  fontSize: 14,
  fontStyle: 'normal',
  fontWeigth: 'regular',
}

export const LimitedSpace: ComponentStory<typeof Text> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <Text {...args} />
    </div>
  )
}
LimitedSpace.args = {
  children: 'The quick brown fox jumps over the lazy dog 0123456789',
  color: 'primary',
  ellipsis: true,
  fontSize: 14,
  fontStyle: 'normal',
  fontWeigth: 'regular',
}

export const AllSizes: ComponentStory<typeof Text> = ({ children, ...args }) => {
  return (
    <div>
      {textSizes.map((fontSize) => (
        <Text {...args} fontSize={fontSize} as='p' key={fontSize}>
          {fontSize}: {children}
        </Text>
      ))}
    </div>
  )
}
AllSizes.args = {
  children: 'The quick brown fox jumps over the lazy dog 0123456789',
  color: 'primary',
  ellipsis: true,
  fontStyle: 'normal',
  fontWeigth: 'regular',
}

export const AllVariants = () => {
  const variants: { name: string; node: ReactNode }[] = [
    {
      name: 'Display',
      node: (
        <Text fontSize={40} fontWeigth='semibold'>
          The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'title-1',
      node: (
        <Text fontSize={32} fontWeigth='semibold'>
          The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },

    {
      name: 'title-2',
      node: (
        <Text fontSize={24} fontWeigth='semibold'>
          title-2: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'title-3',
      node: (
        <Text fontSize={20} fontWeigth='semibold'>
          title-3: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'subheading',
      node: (
        <Text fontSize={20} fontWeigth='medium'>
          subheading: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'body-mono',
      node: (
        <Text fontSize={16} fontWeigth='medium' fontStyle='numeric'>
          body-mono: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'body-1',
      node: (
        <Text fontSize={16} fontWeigth='medium'>
          body-1: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'body-1',
      node: (
        <Text fontSize={16} fontWeigth='semibold'>
          body-1: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'paragraph-mono',
      node: (
        <Text fontSize={14} fontWeigth='medium' fontStyle='numeric'>
          paragraph-mono: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'paragraph-1',
      node: (
        <Text fontSize={14} fontWeigth='medium'>
          paragraph-1: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'paragraph-2',
      node: (
        <Text fontSize={14} fontWeigth='semibold'>
          paragraph-2: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'caption-1',
      node: (
        <Text fontSize={12} fontWeigth='medium'>
          caption-1: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'caption-2',
      node: (
        <Text fontSize={12} fontWeigth='semibold'>
          caption-2: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
    {
      name: 'overline',
      node: (
        <Text fontSize={12} fontWeigth='semibold'>
          overline: The quick brown fox jumps over the lazy dog 0123456789
        </Text>
      ),
    },
  ]

  return (
    <div style={{ padding: '20px 40px' }}>
      {variants.map((variant) => (
        <>
          <div
            key={variant.name}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px',
            }}
          >
            {variant.node}
            <Text>{variant.name}</Text>
          </div>
          <hr />
        </>
      ))}
    </div>
  )
}

const textStory: ComponentMeta<TextComponent> = {
  argTypes: {
    children: {
      description: 'The text to display.',
    },
    color: {
      description: 'The color of the text.',
    },
    fontWeigth: {
      description: 'The font weigth',
    },
  },
  component: Text,
  decorators: [
    (Story) => (
      <ThemeProvider theme={useDarkMode() ? 'dark' : 'light'}>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Components/Text',
}

export default textStory
