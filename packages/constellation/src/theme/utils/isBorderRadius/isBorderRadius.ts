import { createThemeTypeChecker } from '../createThemeTypeChecker'

const isBorderRadius = createThemeTypeChecker((theme) => theme.shape.borderRadius)

export default isBorderRadius
