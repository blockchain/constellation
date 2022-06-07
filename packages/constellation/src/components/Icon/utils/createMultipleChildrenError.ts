const createMultipleChildrenError = () => {
  return new Error('Icon can only take one svg children at a time.')
}

export { createMultipleChildrenError }
