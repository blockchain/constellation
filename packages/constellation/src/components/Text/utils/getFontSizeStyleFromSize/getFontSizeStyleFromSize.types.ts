import { TextProps } from 'components/Text/Text.types'
import { CSSProperties } from 'react'

type GetFontSizeStyleFromSizeUtilityProps = Pick<Required<TextProps>, 'fontSize'> & {
  lineHeight: TextProps['lineHeight']
}

type GetFontSizeStyleFromSizeUtility = (
  props: GetFontSizeStyleFromSizeUtilityProps,
) => CSSProperties

export type { GetFontSizeStyleFromSizeUtility, GetFontSizeStyleFromSizeUtilityProps }
