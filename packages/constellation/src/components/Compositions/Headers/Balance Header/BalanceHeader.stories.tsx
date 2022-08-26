import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { IconFavoriteFilled, SemanticColors, Text } from '../../../Base'
import { BalanceHeader as RenderedBalanceHeader, BalanceHeaderComponent } from '.'

export default {
  argTypes: {
    balanceTotalCents: { control: { type: 'number' } },
    subtitle: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
  },
  args: {
    balanceTotalCents: 1229321,
    subtitle: '0.1393819 BTC',
    title: 'Your Total |TICKER|',
  },
  component: RenderedBalanceHeader,
  title: 'Compositions/Headers/BalanceHeader',
} as ComponentMeta<BalanceHeaderComponent>

const Template: ComponentStory<BalanceHeaderComponent> = ({ ...args }) => {
  const [favorited, setFavorited] = useState(false)
  return (
    <section className='constellation w-3/4 h-80 bg-background-dark'>
      <RenderedBalanceHeader
        {...args}
        icon={
          <IconFavoriteFilled
            size='large'
            color={favorited ? SemanticColors.warning : SemanticColors.muted}
          />
        }
        onIconClick={() => setFavorited(!favorited)}
      />
      <div className='constellation p-8'>
        <Text variant='paragraph1'>Section content</Text>
      </div>
    </section>
  )
}

export const BalanceHeader = Template.bind({})
