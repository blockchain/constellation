const getInitials = (name: string) => {
  const fullName = name.split(' ')
  const firstInitial = fullName[0][0]
  const lastInitial = fullName.length > 1 ? fullName[fullName.length - 1][0] || '' : ''

  return `${firstInitial}${lastInitial}`.toUpperCase()
}

export default getInitials
