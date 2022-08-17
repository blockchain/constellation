import { createElevationShadowFromHexColor } from '..'

describe('createElevationShadowFromHexColor()', () => {
  it('Should return the black elevation 1 shadow', () => {
    const elevationShadow = createElevationShadowFromHexColor({
      color: '#000',
      elevation: 1,
    })

    expect(elevationShadow).toEqual(
      '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
    )
  })
})
