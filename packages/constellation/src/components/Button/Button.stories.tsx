import { IconActivity } from '@blockchain-com/icons'
import { Flex, PrimaryButton, SecondaryButton, Typography } from 'components'
import React from 'react'

import { MinimalButton } from './components'

export default {
  title: 'Components/Button',
}

export const Preview = () => {
  return (
    <Flex flexDirection='column' gap={2}>
      <Flex gap={1} alignItems='center'>
        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Default</Typography.Body1>

          <PrimaryButton size='large' title='Large' />

          <PrimaryButton size='default' title='Default' />

          <PrimaryButton size='small' title='Small' />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Loading</Typography.Body1>

          <PrimaryButton size='large' title='Large' isLoading />

          <PrimaryButton size='default' title='Default' isLoading />

          <PrimaryButton size='small' title='Small' isLoading />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>disabled</Typography.Body1>

          <PrimaryButton size='large' title='Large' disabled />

          <PrimaryButton size='default' title='Default' disabled />

          <PrimaryButton size='small' title='Small' disabled />
        </Flex>
      </Flex>

      <Flex gap={1} alignItems='center'>
        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Default</Typography.Body1>

          <PrimaryButton size='large' title='Large' startIcon={<IconActivity />} />

          <PrimaryButton size='default' title='Default' startIcon={<IconActivity />} />

          <PrimaryButton size='small' title='Small' startIcon={<IconActivity />} />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Loading</Typography.Body1>

          <PrimaryButton size='large' title='Large' isLoading startIcon={<IconActivity />} />

          <PrimaryButton size='default' title='Default' isLoading startIcon={<IconActivity />} />

          <PrimaryButton size='small' title='Small' isLoading startIcon={<IconActivity />} />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>disabled</Typography.Body1>

          <PrimaryButton size='large' title='Large' disabled startIcon={<IconActivity />} />

          <PrimaryButton size='default' title='Default' disabled startIcon={<IconActivity />} />

          <PrimaryButton size='small' title='Small' disabled startIcon={<IconActivity />} />
        </Flex>
      </Flex>

      <Flex gap={1} alignItems='center'>
        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Default</Typography.Body1>

          <SecondaryButton size='large' title='Large' />

          <SecondaryButton size='default' title='Default' />

          <SecondaryButton size='small' title='Small' />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Loading</Typography.Body1>

          <SecondaryButton size='large' title='Large' isLoading />

          <SecondaryButton size='default' title='Default' isLoading />

          <SecondaryButton size='small' title='Small' isLoading />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>disabled</Typography.Body1>

          <SecondaryButton size='large' title='Large' disabled />

          <SecondaryButton size='default' title='Default' disabled />

          <SecondaryButton size='small' title='Small' disabled />
        </Flex>
      </Flex>

      <Flex gap={1} alignItems='center'>
        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Default</Typography.Body1>

          <SecondaryButton size='large' title='Large' startIcon={<IconActivity />} />

          <SecondaryButton size='default' title='Default' startIcon={<IconActivity />} />

          <SecondaryButton size='small' title='Small' startIcon={<IconActivity />} />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Loading</Typography.Body1>

          <SecondaryButton size='large' title='Large' isLoading startIcon={<IconActivity />} />

          <SecondaryButton size='default' title='Default' isLoading startIcon={<IconActivity />} />

          <SecondaryButton size='small' title='Small' isLoading startIcon={<IconActivity />} />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>disabled</Typography.Body1>

          <SecondaryButton size='large' title='Large' disabled startIcon={<IconActivity />} />

          <SecondaryButton size='default' title='Default' disabled startIcon={<IconActivity />} />

          <SecondaryButton size='small' title='Small' disabled startIcon={<IconActivity />} />
        </Flex>
      </Flex>

      <Flex gap={1} alignItems='center'>
        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Default</Typography.Body1>

          <MinimalButton size='large' title='Large' startIcon={<IconActivity />} />

          <MinimalButton size='default' title='Default' startIcon={<IconActivity />} />

          <MinimalButton size='small' title='Small' startIcon={<IconActivity />} />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>Loading</Typography.Body1>

          <MinimalButton size='large' title='Large' isLoading startIcon={<IconActivity />} />

          <MinimalButton size='default' title='Default' isLoading startIcon={<IconActivity />} />

          <MinimalButton size='small' title='Small' isLoading startIcon={<IconActivity />} />
        </Flex>

        <Flex flexDirection='column' alignItems='start' gap={0.5}>
          <Typography.Body1>disabled</Typography.Body1>

          <MinimalButton size='large' title='Large' disabled startIcon={<IconActivity />} />

          <MinimalButton size='default' title='Default' disabled startIcon={<IconActivity />} />

          <MinimalButton size='small' title='Small' disabled startIcon={<IconActivity />} />
        </Flex>
      </Flex>
    </Flex>
  )
}
