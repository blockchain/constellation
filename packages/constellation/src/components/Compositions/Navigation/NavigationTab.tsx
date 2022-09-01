import React from 'react'

import { AlertDot } from '../Alerts'

const NavigationTab = ({ dot, text }: { dot?: boolean; text: string | React.ReactNode }) => {
  return (
    <>
      {text}
      {dot && <AlertDot variant='default' className='absolute left-1/2 -translate-x-1/2' />}
    </>
  )
}

export default NavigationTab
