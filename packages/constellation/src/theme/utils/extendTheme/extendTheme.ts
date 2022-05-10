import merge from 'lodash/merge'

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

const extendTheme = <T extends {} = {}>(theme: T, overwrite: DeepPartial<T>): T =>
  merge({}, theme, overwrite)

export default extendTheme
