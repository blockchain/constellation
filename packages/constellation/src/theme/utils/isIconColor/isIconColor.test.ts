import { isIconColor } from './isIconColor'

describe('isIconColor()', () => {
  it('Should return true if value is icon color', () => {
    expect(isIconColor('primary')).toEqual(true)
  })

  it('Should return false if value is not icon color', () => {
    expect(isIconColor('#ffffff')).toEqual(false)
  })
})
