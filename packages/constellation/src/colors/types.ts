type DefaultPaletteLevels =
  | '000'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

type WhitePaletteLevels = '060' | '100' | '200' | '400' | '600' | '800' | '900'

type ColorPalettes<COLOR_NAME extends string, COLOR_LEVELS extends string> = {
  [key in COLOR_LEVELS as `${Lowercase<COLOR_NAME>}${key}`]: string
}

export type BlueColorPallete = ColorPalettes<'blue', DefaultPaletteLevels>

export type GreyColorPallete = ColorPalettes<'grey', DefaultPaletteLevels>

export type GreyDarkColorPallete = ColorPalettes<'grey', DefaultPaletteLevels>

export type OrangeColorPallete = ColorPalettes<'orange', DefaultPaletteLevels>

export type PurpleColorPallete = ColorPalettes<'purple', DefaultPaletteLevels>

export type RedColorPallete = ColorPalettes<'red', DefaultPaletteLevels>

export type TealColorPallete = ColorPalettes<'teal', DefaultPaletteLevels>

export type WhiteColorPallete = ColorPalettes<'white', WhitePaletteLevels>

export type GreenColorPallete = ColorPalettes<'green', DefaultPaletteLevels>

export type Colors = BlueColorPallete &
  GreyColorPallete &
  GreyDarkColorPallete &
  OrangeColorPallete &
  PurpleColorPallete &
  RedColorPallete &
  TealColorPallete &
  WhiteColorPallete &
  GreenColorPallete
