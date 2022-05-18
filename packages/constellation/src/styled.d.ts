import 'styled-components'

import { ShapeTheme, SwitchTheme } from 'components'
import { IconTheme } from 'components/Icon'
import { SeparatorTheme } from 'components/Separator'
import { TextTheme } from 'components/Text'

declare module 'styled-components' {
  export interface DefaultTheme {
    icon: IconTheme
    separator: SeparatorTheme
    shape: ShapeTheme
    switch: SwitchTheme
    text: TextTheme
  }
}
