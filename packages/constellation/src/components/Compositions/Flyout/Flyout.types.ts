import { DialogContentProps, DialogProps } from '@radix-ui/react-dialog'
import React from 'react'

import { CheckboxProps } from '../../Primitives'

export interface FlyoutHeaderProps {
  /**
   * An optional accessible description to be rendered and announced when the dialog is opened.
   */
  byline?: string
  /**
   * Determins weather the flyout used a close 'X' button or a back arrow
   */
  exitType: 'close' | 'back'
  icon?: React.ReactNode
  /**
   * The position of the icon, Icon can only be on the right when exitType is 'back'
   */
  iconPos?: 'left' | 'right'
  /**
   * The function called when either the close or back button is clicked
   */
  onExit: () => void
  /**
   * An optional title to be rendered in the modal header
   */
  title: string
}

export type HeaderComponent = React.FC<FlyoutHeaderProps>

export type FooterCta = {
  disabled?: boolean
  onClick: () => void
  text: string
}

export type FooterCheckbox = CheckboxProps & {
  /**
   * The text to be displayed next to the checkbox
   */
  text?: string | React.ReactNode
}

export interface FlyoutFooterProps {
  /**
   * The props to be passed down to the primary checkbox component
   */
  primaryCheckbox?: FooterCheckbox
  /**
   * The primary call to action button of the flyout footer
   */
  primaryCta: FooterCta
  /**
   * The props to be passed down to the secondary checkbox component
   */
  secondaryCheckbox?: FooterCheckbox
  /**
   * The optional secondary call to action button of the flyout footer
   */
  secondaryCta?: FooterCta
}

export type Props = DialogProps &
  FlyoutHeaderProps &
  DialogContentProps & {
    /**
     * The content to be rendered at the bottom of the flyout
     * usually this will be the FlyoutFooter component
     */
    footer?: React.ReactNode
    /**
     * Display the modal
     */
    isOpen: boolean
    /**
     * When given a ReactNode this will replace the default background blur and tint
     * with the given ReactNode. overlayOverride can also be set to null to remove the
     * overlay completely.
     */
    overlayOverride: React.ReactNode
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
