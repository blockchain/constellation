import cx from 'classnames'
import React from 'react'

import { IconCloseV2, PaletteColors } from '../../Base'
import { IconButton } from '../Buttons'
import { CardComponent } from './Card.types'

const Card: CardComponent = ({ border, size, variant }) => {
  return (
    <div className={cx('constellation drop-shadow-cards bg-white-000 w-[295px] rounded-2xl p-4')}>
      <IconButton
        icon={<IconCloseV2 color={PaletteColors['grey-400']} width={9} height={9} />}
        size='small'
        className='absolute top-4 right-4 border-none !bg-background-light !w-6 !h-6 rounded-full !p-0 flex justify-center items-center'
      />
    </div>
  )
}

export default Card
