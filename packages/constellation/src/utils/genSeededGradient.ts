import randomColor from 'randomcolor'

const genGradient = (name: string, storyshotOverride?: boolean) => {
  const fullName = name.split(' ')

  const rand = Math.random()

  const angle = storyshotOverride ? 42 : rand * 360
  const firstPercent = storyshotOverride ? 30 : rand * 30 + 10 // between 10-40%
  const secondPercent = storyshotOverride ? 70 : rand * 30 + 60 // between 70-90%

  const firstColor = randomColor({
    format: 'hex',
    luminosity: 'light',
    seed: fullName[0],
  })

  const secondColor = randomColor({
    format: 'hex',
    luminosity: 'light',
    seed: fullName[fullName.length - 1],
  })

  const gradient = `linear-gradient(${angle}deg, ${firstColor} ${firstPercent}%, ${secondColor} ${secondPercent}%)`

  return gradient
}

export default genGradient
