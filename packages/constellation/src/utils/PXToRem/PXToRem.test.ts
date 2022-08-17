import { PXToRem } from '.'

describe('PXToRem()', () => {
  it('Should return the pixel size in rem value', () => {
    expect(PXToRem(8)).toEqual(0.5)
    expect(PXToRem(16)).toEqual(1)
    expect(PXToRem(32)).toEqual(2)
  })
})
