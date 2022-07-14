export type IconSizes = 'small' | 'medium' | 'large'
export interface Props extends Omit<React.HTMLProps<SVGElement>, 'size'> {
  color?: string // TODO: color enum
  size?: IconSizes | number
  titleId?: string
}
