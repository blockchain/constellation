import * as RadixAvatar from '@radix-ui/react-avatar'
import React from 'react'

// https://www.radix-ui.com/docs/primitives/components/avatar
const Avatar = () => (
  <RadixAvatar.Root>
    <RadixAvatar.Image />
    <RadixAvatar.Fallback />
  </RadixAvatar.Root>
)

export default Avatar
