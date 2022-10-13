// Extract the `ref` prop type from a polymorphic component.
export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref']
