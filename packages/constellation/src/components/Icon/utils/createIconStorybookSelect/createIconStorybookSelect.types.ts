import * as Icons from '@blockchain-com/icons'
import { ArgTypes } from '@storybook/react'
import { ReactNode } from 'react'

type IconNames = keyof typeof Icons

type InputType = ArgTypes<{
  icon: ReactNode
}>['icon']

type CreateIconStorybookSelectUtilityProps = { defaultValue?: IconNames }

type CreateIconStorybookSelectUtility = (props?: CreateIconStorybookSelectUtilityProps) => InputType

export type { CreateIconStorybookSelectUtility }
