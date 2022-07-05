import '../styles.css'

import React, { useEffect, useState } from 'react'

const ThemeProvider = ({
  children,
  theme,
  colorOverride = {},
}: {
  children: React.ReactNode
  colorOverride: {
    primary?: string
  }
  theme: string
}) => {
  const [colorOverrideStyles, setColorOverrideStyles] = useState({})

  useEffect(() => {
    let newColorOverrideStyles = {}

    // eslint-disable-next-line array-callback-return
    Object.keys(colorOverride).map((color) => {
      newColorOverrideStyles = {
        ...newColorOverrideStyles,
        [`--color-${color}`]: colorOverride[color as keyof typeof colorOverride],
      }
    })

    setColorOverrideStyles(newColorOverrideStyles)
  }, [colorOverride])

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'} style={colorOverrideStyles}>
      {children}
    </div>
  )
}

export default ThemeProvider
