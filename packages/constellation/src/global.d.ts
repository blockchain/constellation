// The 'as' prop is intended to allow the user to configure the HTML tag the
// component renders with. It can also be another React component.
type AsProp<T extends React.ElementType> = { as?: T }

// Allows for inheriting the props from the specified element type, so that
// props like `children`, `className` & `style` work, as well as element-
// specific attributes like aria roles. The component (`T`) must be passed in.
type ElementProps<T extends React.ElementType, Props = Record<string, unknown>> = Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props>

// Extract the `ref` prop type from a polymorphic component.
type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref']

// Defines the prop types of a polymorphic component (IE, one that supports an
// 'as' prop, which can be used to configure the rendered HTML tag of the
// component.) The component, `T`, must be passed in.
type PolymorphicComponentProps<T extends React.ElementType, Props = Record<string, unknown>> =
  ElementProps<T, Props & AsProp<T>>

// Defines the prop types of a polymorphic component (IE, one that supports an
// 'as' prop, which can be used to configure the rendered HTML tag of the
// component.) This is the same as `PolymorphicComponentProps`, except it also
// supports the `ref` prop.
type PolymorphicComponentPropsWithRef<
  T extends React.ElementType,
  Props = Record<string, unknown>,
> = PolymorphicComponentProps<T, Props> & { ref?: PolymorphicRef<T> }
