import { RadioGroupProps } from '@radix-ui/react-radio-group'

export type Props = RadioGroupProps & {
  children: React.ReactNode // typeof Radio[]
  onChange: (value: string) => void
}

export type Component = (props: Props) => React.ReactElement | null
