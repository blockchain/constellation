import { ButtonVariants } from './Button.types'

export const ButtonTheme: { variants: Record<ButtonVariants, {}> } = {
  variants: {
    primary: {
      _active: {
        bg: 'blue.900',
      },
      _disabled: {
        _loading: {
          bg: 'blue.600',
        },
        bg: 'blue.400',
        color: 'white.600',

        opacity: 1,
      },

      _focus: {
        bg: 'blue.800',
      },

      _hover: {
        _disabled: {
          bg: 'blue.400',
        },

        bg: 'blue.700',
      },

      bg: 'blue.600',

      color: 'white',
    },

    secondary: {
      _active: {
        bg: 'grey.900',
      },
      _disabled: {
        _loading: {
          bg: 'grey.800',
        },
        bg: 'grey.500',
        color: 'white.600',

        opacity: 1,
      },

      _focus: {
        bg: 'grey.900',
      },

      _hover: {
        _disabled: {
          bg: 'blue.400',
        },

        bg: 'grey.700',
      },

      bg: 'grey.800',

      color: 'white',
    },
  },
}
