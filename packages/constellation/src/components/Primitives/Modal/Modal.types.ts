import { DialogProps } from '@radix-ui/react-dialog'

export type Props = DialogProps & {
  /**
   * Display the modal
   */
  isOpen: boolean
  /**
   * Toggle the display of the modal
   */
  setIsOpen: (open: boolean) => void
  /**
   * UI element that triggers the open state of the modal
   */
  trigger: React.ReactNode
}

export type Component = React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>
