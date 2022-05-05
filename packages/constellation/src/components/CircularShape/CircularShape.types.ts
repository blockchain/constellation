import { FC } from 'react'

type CircularShapeProps = {
  backgroundColor?: string
  color: string
  size: number
}

type CircularShapeComponent = FC<CircularShapeProps>

export type { CircularShapeComponent, CircularShapeProps }
