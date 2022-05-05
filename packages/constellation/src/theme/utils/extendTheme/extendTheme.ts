/* eslint-disable sort-keys */

import { merge } from 'lodash'
import { Theme } from 'theme/theme.types'

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

const extendTheme = (theme: Theme, overwrite: DeepPartial<Theme> = {}): Theme =>
  merge({}, theme, overwrite)

export default extendTheme
