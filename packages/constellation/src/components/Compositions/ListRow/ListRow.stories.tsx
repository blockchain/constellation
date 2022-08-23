import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import * as Icons from '../../Base/Icon'
import { ListRow as ListRowComponent, ListRowProps } from '.'

type ListRowComponentType = FC<ListRowProps & { showToggle?: boolean }>

export default {
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...Object.keys(Icons), undefined],
    },
    onClick: {
      action: 'clicked',
    },
    onToggleChange: {
      action: 'clicked',
    },
    showToggle: {
      control: { type: 'boolean' },
    },
    titleIcon: {
      control: { type: 'select' },
      options: [...Object.keys(Icons), undefined],
    },
  },
  args: {
    description:
      'Securely link a bank to buy crypto, deposit cash and withdraw back to your bank at anytime.',
    leftByline: 'Left Byline',
    leftTitle: 'Left Title',
    logoProps: {
      doubleVariant: 'badge',
      primaryContent: {
        text: 'CATE',
      },
    },
    rightByline: 'Right Byline',
    rightTitle: 'Right Title',
    showArrow: false,
    showToggle: false,
  },
  component: ListRowComponent,
  title: 'Compositions/ListRow',
} as ComponentMeta<ListRowComponentType>

const Template: ComponentStory<ListRowComponentType> = ({
  icon,
  onToggleChange,
  showToggle,
  titleIcon,
  ...args
}) => {
  const Icon = Icons[icon as keyof typeof Icons] as React.FC
  const TitleIcon = Icons[titleIcon as keyof typeof Icons] as React.FC

  return (
    <ListRowComponent
      {...args}
      onToggleChange={showToggle ? onToggleChange : undefined}
      icon={icon && <Icon />}
      titleIcon={titleIcon && <TitleIcon />}
    />
  )
}

export const ListRow = Template.bind({})
