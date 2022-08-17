const parseSymbol = (
  symbol: string,
): {
  base: string
  counter: string
} => {
  const data = symbol.split('-') as [string, string]

  if (!data[0] || !data[1]) {
    throw new Error('Symbol not valid')
  }

  return {
    base: data[0],
    counter: data[1],
  }
}

export default parseSymbol
