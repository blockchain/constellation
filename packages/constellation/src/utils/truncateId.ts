const truncateId = (id: string, maxLength: number) => {
  const half = Math.ceil((maxLength - 3) / 2)

  return id.length > maxLength - 3
    ? `${id.slice(0, half)}...${id.slice(half - (maxLength - 3))}`
    : id
}

export default truncateId
