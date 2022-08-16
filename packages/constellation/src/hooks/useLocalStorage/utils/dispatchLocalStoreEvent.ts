const dispatchLocalStoreEvent = () => {
  window.dispatchEvent(new Event('storage'))
}

export default dispatchLocalStoreEvent
