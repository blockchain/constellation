# Experiments

The `experiments` function was created to make the usage of ab test functions easier

To initiate it, you should do it like this:

```ts
const abTests = experiments({ api: 'https://api.blockchain.info' })
```

It has the following interface:

```ts
const experiments: ({ api }: { api: string }) => {
  getAll: () => Promise<{
    [key: string]: number
  }>
  getGroup: (experiment: string) => Promise<number | null>
}
```

It usually is usually used like this

```ts
const allABTests = abTests.getAll()

const groupExperimentA = abTests.getGroup('experiment-a')
```
