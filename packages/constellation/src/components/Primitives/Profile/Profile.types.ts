import { FC } from 'react'

interface FallbackProps {
  /**
   * The full name of the user.
   */
  name: string
  /**
   * The size of the profile component.
   */
  size: 'small' | 'large'
}

type ProfileProps<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  FallbackProps & {
    /**
     * The URL of the image to display.
     * If not provided or the image is not available,
     * the initials of the user will be displayed.
     */
    imgSrc?: string
  }
>

type ProfileComponent = <T extends React.ElementType = 'button'>(
  props: ProfileProps<T>,
) => React.ReactElement | null
type FallbackComponent = FC<FallbackProps>

export type { FallbackComponent, FallbackProps, ProfileComponent, ProfileProps }
