const utmCampaignBuilder = (
  url: string,
  parameters: {
    [key: string]: string
  }
): string => {
  const query = Object.keys(parameters)
    .map((key) => `utm_${key}=${parameters[key]}`)
    .join('&')

  return `${url}?${query}`
}

export default utmCampaignBuilder
