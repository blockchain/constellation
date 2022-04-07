const UTM_REGEX = /(?!&)utm_[^=]*=[^&]*/g

const parseUTM = ({
  hash,
  queryString,
}: {
  hash: string
  queryString: string
}): { [key: string]: string } => {
  const qsMatches = queryString.match(UTM_REGEX) || []
  const hashMatches = hash.match(UTM_REGEX) || []

  if (!qsMatches && !hashMatches) return {}

  const parsedUTM = [...qsMatches, ...hashMatches].reduce((obj, param) => {
    const keyValue = param.split('=')

    let key = keyValue[0].slice(keyValue[0].indexOf('_') + 1)

    if (key === 'campaign') {
      key = 'name'
    }

    const value = keyValue[1]

    return { ...obj, [key]: value }
  }, {})

  return parsedUTM
}

export default parseUTM
