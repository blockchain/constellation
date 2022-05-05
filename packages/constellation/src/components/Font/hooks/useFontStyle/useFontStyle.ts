import fontContext from 'components/Font/context'
import { useContext } from 'react'

import { FontStyleHook } from './useFontStyle.types'

const useFontStyle: FontStyleHook = () => useContext(fontContext).style

export default useFontStyle
