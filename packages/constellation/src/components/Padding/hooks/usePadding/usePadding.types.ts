import { PaddingProps } from 'components/Padding/types'

type PaddingHook = (props: PaddingProps) => {
  paddingBottom: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
}

export type { PaddingHook }
