import React from 'react'

export type SettingsHeaderModes = 'initial' | 'unsaved'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * Optionally override the label text for the cancel button
     */
    cancelLabel?: string
    /**
     * Optionally override the label text for the edit button
     */
    editLabel?: string
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
     * Optionally override the label text for the save button
     */
    saveLabel?: string
    /**
     * An optional title to display on the lefthand side of the Header
     */
    title?: string
  }
>

export type Component = <T extends React.ElementType = 'header'>(
  props: Props<T>,
) => React.ReactElement | null
