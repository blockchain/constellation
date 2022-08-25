import React from 'react'

export type SettingsHeaderModes = 'initial' | 'unsaved'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * The mode controls whether the edit or save/cancel are displayed
     */
    mode: SettingsHeaderModes
    /**
     * Triggered when the cancel button is clicked
     */
    onCancel: () => void
    /**
     * Triggered when the edit button is clicked
     */
    onEditClick: () => void
    /**
     * Triggered when the save button is clicked
     */
    onSave: () => void
    /**
     * An optional title to display on the lefthand side of the Header
     */
    title?: string
  }
>

export type Component = <T extends React.ElementType = 'header'>(
  props: Props<T>,
) => React.ReactElement | null
