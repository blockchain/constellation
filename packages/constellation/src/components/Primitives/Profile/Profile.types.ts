import { FC } from 'react'

interface FallbackProps {
  name: string
  size: 'small' | 'large'
}

type ProfileProps = FallbackProps & {
  active?: boolean
  imgSrc?: string
}

type ProfileComponent = FC<ProfileProps>
type FallbackComponent = FC<FallbackProps>

export type { FallbackComponent, FallbackProps, ProfileComponent, ProfileProps }
