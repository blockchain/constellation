import 'styled-components'

import {
  BaseButtonTheme,
  MinimalButtonTheme,
  PrimaryButtonTheme,
  SecondaryButtonTheme,
  ShapeTheme,
  SwitchTheme,
} from 'components'
import { LinkButtonTheme } from 'components/Button/components/LinkButton'
import { IconTheme } from 'components/Icon'
import { SeparatorTheme } from 'components/Separator'
import { TextTheme } from 'components/Text'

declare module 'styled-components' {
  export interface DefaultTheme {
    baseButton: BaseButtonTheme
    icon: IconTheme
    linkButton: LinkButtonTheme
    minimalButton: MinimalButtonTheme
    primaryButton: PrimaryButtonTheme
    secondaryButton: SecondaryButtonTheme
    separator: SeparatorTheme
    shape: ShapeTheme
    switch: SwitchTheme
    text: TextTheme
  }
}
