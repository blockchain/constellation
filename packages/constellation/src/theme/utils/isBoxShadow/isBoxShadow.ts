import { createThemeTypeChecker } from '../createThemeTypeChecker'

const isBoxShadow = createThemeTypeChecker((theme) => theme.shape.boxShadow)

export default isBoxShadow
