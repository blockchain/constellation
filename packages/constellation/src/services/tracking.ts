const tracking = ({ api }: { api: string }) => {
  const hasConsent = async (): Promise<boolean> => {
    const res = await fetch(`${api}/events/tracking/consent`, { credentials: 'include' })

    const data = await res.json()

    const { active } = data

    if (active === 'true') {
      return true
    }

    return false
  }

  const deleteIdentifier = (): void => {
    fetch(`${api}/events/tracking`, {
      credentials: 'include',
      method: 'DELETE'
    })
  }

  const setIdentifier = (): void => {
    fetch(`${api}/events/tracking`, {
      credentials: 'include'
    })
  }

  const publish = ({
    context,
    events,
    platform
  }: {
    context: {
      traits: {
        nabu_id: string
      }
    }
    events: { [key: string]: any }[]
    platform: 'WALLET' | 'EXCHANGE' | 'BLOCKCHAIN_COM' | 'EXPLORER'
  }): void => {
    fetch(`${api}/publish`, {
      body: JSON.stringify({
        context,
        device: 'WEB',
        events,
        platform
      }),
      credentials: 'include',
      method: 'POST'
    })
  }

  return { deleteIdentifier, hasConsent, publish, setIdentifier }
}

export default tracking

/*

USAGE EXAMPLE

const analytics = tracking({ api: 'https://api.blockchain.info' })

const checkConsent = async () => {
  const isActive = await analytics.hasConsent()

  if (isActive) {
    analytics.setIdentifier()
  } else {
    showConsentModal()
  }
}

useEffect(() => {
  checkConsent()
}, [])

const onAccept = async () => {
  analytics.setIdentifier()

  hideConsentModal()
}

const onReject = async () => {
  analytics.deleteIdentifier()

  hideConsentModal()
}

analytics.publish({
  context: {
    traits: { nabu_id: '123456789' }
  },
  events: [],
  platform: 'EXPLORER'
})

*/
