export const centsToDollarString = (cents: number, maximumFractionDigits = 0) =>
  (cents / 100).toLocaleString('en-US', {
    currency: 'USD',
    maximumFractionDigits,
    minimumFractionDigits: 0,
    style: 'currency',
  })

export const decimalToPercentString = (number: number) =>
  number.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'percent',
  })
