import { PaddingProps } from 'components/Padding'
import { TextProps } from 'components/Text'
import { FC } from 'react'

type CreateTypographyComponentUtilityProps = {
  padding?: PaddingProps
  text: TextProps
}

type CreateTypographyComponentUtility = (
  props: CreateTypographyComponentUtilityProps,
) => FC<TextProps>

export type { CreateTypographyComponentUtility, CreateTypographyComponentUtilityProps }
