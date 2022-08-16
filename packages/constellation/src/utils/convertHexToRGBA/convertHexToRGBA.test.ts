import { convertHexToRGBA } from '.'

describe('#convertHexToRGBA()', () => {
  it('Should convert hex white to rgba white', () => {
    expect(convertHexToRGBA('#FFFFFF')).toEqual('rgba(255, 255, 255, 1)')
  })

  it('Should convert short hex white to rgba white', () => {
    expect(convertHexToRGBA('#FFF')).toEqual('rgba(255, 255, 255, 1)')
  })

  it('Should convert hex white to rgba white with opacity', () => {
    expect(convertHexToRGBA('#FFFFFF', 0.5)).toEqual('rgba(255, 255, 255, 0.5)')
  })
})
