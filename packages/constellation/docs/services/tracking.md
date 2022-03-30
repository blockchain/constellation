# Tracking

The `tracking` function was created to make the usage of tracking functions easier

To initiate it, you should do it like this:

```ts
const tracker = tracking({ api: 'https://api.blockchain.info', platform: 'WALLET' })
```

It has the following interface:

```ts
const tracking: ({
  api,
  platform,
}: {
  api: string
  platform: 'WALLET' | 'EXCHANGE' | 'BLOCKCHAIN_COM' | 'EXPLORER'
}) => {
  deleteIdentifier: () => void
  hasConsent: () => Promise<boolean>
  publish: ({
    context,
    events,
  }: {
    context: {
      campaign?:
        | {
            [key: string]: unknown
          }
        | undefined
      traits?:
        | {
            [key: string]: unknown
          }
        | undefined
    }
    events: {
      [key: string]: unknown
    }[]
  }) => void
  setIdentifier: () => void
}
```

It usually is usually used like this

```ts
tracker.publish({
  context: {
    traits: { nabu_id: '123456789' },
  },
  events: [],
  platform: 'EXPLORER',
})
```
