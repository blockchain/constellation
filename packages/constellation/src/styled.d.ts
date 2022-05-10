import 'styled-components'

import { SwitchTheme } from 'components'
import { IconTheme } from 'components/Icon'
import { SeparatorTheme } from 'components/Separator'
import { TextTheme } from 'components/Text'

declare module 'styled-components' {
  export interface DefaultTheme {
    icon: IconTheme
    separator: SeparatorTheme
    switch: SwitchTheme
    text: TextTheme
  }
}
