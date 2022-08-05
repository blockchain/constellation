import { forwardRef } from 'react'

/**
 * Checkboxes allow the user to select one or more option from a set.
 *
 * The Checkbox component renders a styled `<span>` element with a checkbox
 * `<input>` as one of its children, for styling purposes.
 *
 * All HTML attributes are supported, and forwarded to the corresponding `input`
 * element. The className prop, however, is placed on the root node, to aid in
 * applying custom styles to any of the components children, via child
 * selectors.
 *
 * `ref`s are forwarded to the `input` element.
 *
 * For accessibility purposes, an ID attribute must be present so that the
 * input and label can be properly associated. If no ID is provided, a default
 * value of the given name prop + '-input' will be used, but this does not
 * guarantee uniqueness. If multiple forms, or different inputs with the same
 * name values are present on a single page, you must add your own IDs.
 */
export const Checkbox = forwardRef<HTMLInputElement, React.ComponentPropsWithRef<'input'>>(
  ({ className, disabled, ...otherProps }, ref) => {
    const fallbackId = `${otherProps.name ? otherProps.name : 'checkbox'}-input`

    return <span id={fallbackId} className={className} />
  },
)

export default Checkbox
