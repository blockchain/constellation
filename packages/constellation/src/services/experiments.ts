const experiments = ({ api }: { api: string }) => {
  const getAll = async (): Promise<{
    [key: string]: number
  }> => {
    const res = await fetch(`${api}/nabu-gateway/experiments`, {
      credentials: 'include',
    })

    const data = await res.json()

    return data
  }

  const getGroup = async (experiment: string): Promise<number | null> => {
    const res = await fetch(`${api}/nabu-gateway/experiments`, {
      credentials: 'include',
    })

    const data = await res.json()

    if (!data[experiment]) {
      return null
    }

    return data[experiment]
  }

  return { getAll, getGroup }
}

export default experiments
