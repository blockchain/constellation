import 'styled-components'

import { ProgressIndicatorTheme, SwitchTheme } from 'components'
import { IconTheme } from 'components/Icon'
import { SeparatorTheme } from 'components/Separator'
import { TextTheme } from 'components/Text'

declare module 'styled-components' {
  export interface DefaultTheme {
    icon: IconTheme
    progressIndicator: ProgressIndicatorTheme
    separator: SeparatorTheme
    switch: SwitchTheme
    text: TextTheme
  }
}
