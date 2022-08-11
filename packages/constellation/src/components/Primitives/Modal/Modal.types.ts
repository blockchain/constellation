import { DialogProps } from '@radix-ui/react-dialog'

export type FooterCta = {
  onClick: () => void
  text: string
}

export type Props = DialogProps & {
  /**
   * An optional accessible description to be rendered and announced when the dialog is opened.
   */
  description?: string
  /**
   * Display the modal
   */
  isOpen: boolean
  /**
   * The primary call to action button of the modal footer
   */
  primaryCta: FooterCta
  /**
   * The optional secondary call to action button of the modal footer
   */
  secondaryCta?: FooterCta
  /**
   * Toggle the display of the modal
   */
  setIsOpen: (open: boolean) => void

  /**
   * An optional title to be rendered in the modal header
   */
  title?: string
  /**
   * UI element that triggers the open state of the modal
   */
  trigger: React.ReactNode
}

export type Component = React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>
