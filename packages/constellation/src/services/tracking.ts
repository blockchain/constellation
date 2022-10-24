import { v4 as uuidv4 } from 'uuid'

const __BC_SESSION_ID__ = uuidv4()

const tracking = ({
  api,
  platform,
}: {
  api: string
  platform: 'WALLET' | 'EXCHANGE' | 'BLOCKCHAIN_COM' | 'EXPLORER'
}) => {
  const hasConsent = async (): Promise<boolean> => {
    const res = await fetch(`${api}/events/tracking/consent`, { credentials: 'include' })

    const data = await res.json()

    const { active } = data

    if (active) {
      return true
    }

    return false
  }

  const deleteIdentifier = (): void => {
    fetch(`${api}/events/tracking`, {
      credentials: 'include',
      method: 'DELETE',
    })
  }

  const setIdentifier = (): void => {
    fetch(`${api}/events/tracking`, {
      credentials: 'include',
    })
  }

  const publish = ({
    context,
    events,
    integrations
  }: {
    context: {
      campaign?: {
        [key: string]: unknown
      }
      id?: string
      traits?: {
        [key: string]: unknown
      }
    }
    events: {
      [key: string]: unknown
    }[]
    integrations?: {
      [key: string]: unknown
    }
  }): void => {
    context.id = __BC_SESSION_ID__

    fetch(`${api}/events/publish`, {
      body: JSON.stringify({
        context,
        device: 'WEB',
        events,
        integrations: integrations ?? {},
        platform,
      }),
      credentials: 'include',
      method: 'POST',
    })
  }

  return { deleteIdentifier, hasConsent, publish, setIdentifier }
}

export default tracking
