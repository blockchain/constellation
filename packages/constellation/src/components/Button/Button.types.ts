import { ButtonProps as ChakraButtonProps, ComponentWithAs } from '@chakra-ui/react'

export type ButtonVariants = 'primary' | 'secondary'

export type ButtonProps = Omit<ChakraButtonProps, 'variant'> & {
  variant: ButtonVariants
}

export type ButtonComponent = ComponentWithAs<'button', ButtonProps>
