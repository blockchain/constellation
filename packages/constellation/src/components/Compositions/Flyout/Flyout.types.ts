import { DialogProps } from '@radix-ui/react-dialog'
import React from 'react'

export interface FlyoutHeaderProps {
  /**
   * An optional accessible description to be rendered and announced when the dialog is opened.
   */
  byline?: string
  exiteType: 'close' | 'back'
  icon?: React.ReactNode
  iconPos?: 'left' | 'right'
  onExit: () => void
  /**
   * An optional title to be rendered in the modal header
   */
  title: string
}

export type HeaderComponent = React.FC<FlyoutHeaderProps>

export type Props = DialogProps &
  FlyoutHeaderProps & {
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
