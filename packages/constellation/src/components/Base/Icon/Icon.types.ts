import { Colors } from '../Colors'

export type IconSizes = 'small' | 'medium' | 'large'
export interface Props extends Omit<React.HTMLProps<SVGElement>, 'size'> {
  color?: Colors
  size?: IconSizes | number
  titleId?: string
}
