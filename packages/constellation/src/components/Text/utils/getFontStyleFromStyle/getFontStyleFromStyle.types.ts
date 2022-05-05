import { TextProps } from 'components/Text/Text.types'
import { CSSProperties } from 'react'

type GetFontStyleFromStyleUtilityProps = Pick<Required<TextProps>, 'fontStyle'>

type GetFontStyleFromStyleUtility = (props: GetFontStyleFromStyleUtilityProps) => CSSProperties

export type { GetFontStyleFromStyleUtility, GetFontStyleFromStyleUtilityProps }
