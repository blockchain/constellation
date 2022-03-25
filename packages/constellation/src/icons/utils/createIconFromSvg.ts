import { cloneElement, FC, ReactElement, SVGProps } from 'react'

export const createIconFromSvg =
  (svg: ReactElement): FC<SVGProps<SVGSVGElement>> =>
  (props) =>
    cloneElement(svg, props)
