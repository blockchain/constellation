import { Root } from '@radix-ui/react-separator'
import React, { CSSProperties, useMemo } from 'react'
import { useTheme } from 'theme'

import { SeparatorComponent } from './Separator.types'

const Separator: SeparatorComponent = ({ decorative, orientation = 'horizontal', ...props }) => {
  const theme = useTheme()

  const style: CSSProperties = useMemo(() => {
    if (orientation === 'vertical') {
      return { backgroundColor: theme.separator.colors.default, height: '100%', width: 1 }
    }

    return { backgroundColor: theme.separator.colors.default, height: 1, width: '100%' }
  }, [orientation, theme])

  return <Root decorative={decorative} orientation={orientation} style={style} {...props} />
}

export default React.memo(Separator)
