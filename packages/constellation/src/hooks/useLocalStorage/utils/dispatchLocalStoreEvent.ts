export const dispatchLocalStoreEvent = () => {
  window.dispatchEvent(new Event('storage'))
}
