import { fontContext } from 'components/Font/Font.context'
import { useContext } from 'react'

const useFont = () => useContext(fontContext)

export { useFont }
