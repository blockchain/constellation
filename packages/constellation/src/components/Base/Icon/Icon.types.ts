export interface Props extends Omit<React.HTMLProps<SVGElement>, 'size'> {
  color?: string // TODO: color enum
  titleId?: string
}
