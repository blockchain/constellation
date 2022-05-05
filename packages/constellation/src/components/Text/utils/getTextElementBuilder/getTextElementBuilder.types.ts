import { TextProps } from 'components/Text/Text.types'
import { CSSProperties, FC, ReactNode } from 'react'

type TextElement = FC<{ children?: ReactNode; style: CSSProperties }>

type GetTextElementBuilderUtilityProps = Pick<Required<TextProps>, 'as'>

type GetTextElementBuilderUtility = (props: GetTextElementBuilderUtilityProps) => TextElement

export type { GetTextElementBuilderUtility, GetTextElementBuilderUtilityProps, TextElement }
