import { HStack, Stack } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button, ButtonComponent } from '.'

const buttonStoryMeta: ComponentMeta<ButtonComponent> = {
  component: Button,
  title: 'Components/Button',
}

const Template: ComponentStory<ButtonComponent> = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const withVariants = () => (
  <HStack spacing='24px'>
    <Button colorScheme='teal' variant='primary'>
      Button
    </Button>
    <Button colorScheme='teal' variant='secondary'>
      Button
    </Button>
  </HStack>
)

export default buttonStoryMeta
