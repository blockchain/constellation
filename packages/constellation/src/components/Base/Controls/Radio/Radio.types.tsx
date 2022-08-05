import { RadioGroupItemProps } from '@radix-ui/react-radio-group'

export type Props = RadioGroupItemProps & { label?: string }

export type Component = React.ForwardRefExoticComponent<
  RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>
>
