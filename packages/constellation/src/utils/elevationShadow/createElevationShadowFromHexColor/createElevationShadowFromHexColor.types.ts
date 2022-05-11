type CreateElevationShadowFromHexColorUtilityProps = {
  color: string
  elevation: 1
}

type CreateElevationShadowFromHexColorUtility = (
  props: CreateElevationShadowFromHexColorUtilityProps,
) => string

export type {
  CreateElevationShadowFromHexColorUtility,
  CreateElevationShadowFromHexColorUtilityProps,
}
