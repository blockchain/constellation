import React, { useCallback, useEffect, useRef, useState } from 'react'

import { StyledAnimatedContainer } from './AnimatedContainer.styles'
import { AnimatedContainerComponent } from './AnimatedContainer.types'

const AnimatedContainer: AnimatedContainerComponent = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null)

  const [size, setSize] = useState<{ height: number; width: number }>({
    height: 0,
    width: 0,
  })

  const onChildrenChanged = useCallback(() => {
    const node = divRef.current

    if (!node) return

    setSize(node.getBoundingClientRect())
  }, [setSize, divRef])

  useEffect(onChildrenChanged, [divRef, children, onChildrenChanged])

  return (
    <StyledAnimatedContainer width={size.width} height={size.height}>
      <div ref={divRef} style={{ height: 'fit-content', width: 'fit-content' }}>
        {children}
      </div>
    </StyledAnimatedContainer>
  )
}

export default AnimatedContainer
