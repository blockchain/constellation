const UTM_REGEX = /(?!&)utm_[^=]*=[^&]*/g

const parseUTM = (query: string): { [key: string]: string } => {
  const matches = query.match(UTM_REGEX)

  if (!matches) return {}

  const values = matches.reduce((obj, param) => {
    const keyValue = param.split('=')

    let key = keyValue[0].slice(keyValue[0].indexOf('_') + 1)

    if (key === 'campaign') {
      key = 'name'
    }

    const value = keyValue[1]

    return { ...obj, [key]: value }
  }, {})

  return values
}

export default parseUTM
