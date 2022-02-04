import React from 'react'

const ThemeProvider = (props: Props): JSX.Element | null => {
  if (!props.children) {
    return null
  }

  return <>{props.children}</>
}

type Props = {
  children: React.ReactChild
}

export default ThemeProvider
