import { useContext } from 'react'

import { fontContext } from '../../Font.context'

const useFont = () => useContext(fontContext)

export { useFont }
