import { convertHexToRGBA } from '../../convertHexToRGBA'
import { CreateElevationShadowFromHexColorUtility } from './createElevationShadowFromHexColor.types'

const createElevationShadowFromHexColor: CreateElevationShadowFromHexColorUtility = ({ color }) => {
  const largeShadowColor = convertHexToRGBA(color, 0.12)
  const smallShadowColor = convertHexToRGBA(color, 0.04)

  return `0px 3px 8px ${largeShadowColor}, 0px 3px 1px ${smallShadowColor}`
}

export default createElevationShadowFromHexColor
