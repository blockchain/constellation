import { PaddingProps } from 'components/Padding/types'

type PaddingHook = (props: PaddingProps) => {
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
  paddingTop: number
}

export type { PaddingHook }
