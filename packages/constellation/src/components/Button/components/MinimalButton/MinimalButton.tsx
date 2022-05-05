import { Flex } from 'components/Flex'
import { Icon } from 'components/Icon'
import { LoadingArea } from 'components/LoadingArea'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { Padding } from 'components/Padding'
import { Text } from 'components/Text'
import React, { forwardRef } from 'react'
import { useTheme } from 'theme'
import { PXToRem } from 'utils'

import { BaseButton } from '../BaseButton'
import { MinimalButtonProps } from './MinimalButton.types'

const MinimalButton = forwardRef<HTMLButtonElement, MinimalButtonProps>(
  (
    {
      disabled = false,
      endIcon,
      fullWidth = false,
      isLoading = false,
      size = 'default',
      startIcon,
      title,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme()

    const paddingProps = theme.button.sizes[size].padding

    const textProps = {
      ...theme.button.sizes[size].text,
      ...theme.button.minimal.default.text,
      ...(disabled ? theme.button.minimal.disabled.text : {}),
    }

    const iconProps = {
      ...theme.button.sizes[size].icon,
      ...theme.button.minimal.default.icon,
      ...(disabled ? theme.button.minimal.disabled.icon : {}),
    }

    const defaultStyle = theme.button.minimal.default
    const activeStyle = { defaultStyle, ...theme.button.minimal.active }
    const disabledStyle = { defaultStyle, ...theme.button.minimal.disabled }
    const loadingStyle = { defaultStyle, ...theme.button.minimal.loading }
    const hoverStyle = { defaultStyle, ...theme.button.minimal.hover }
    const focusedStyle = { defaultStyle, ...theme.button.minimal.focus }

    const loadingIconProps = {
      ...theme.button.sizes[size].loadingSpinner,
      ...theme.button.minimal.loading.icon,
    }

    return (
      <BaseButton
        ref={ref}
        disabled={disabled}
        fullWidth={fullWidth}
        defaultStyle={defaultStyle}
        activeStyle={activeStyle}
        disabledStyle={disabledStyle}
        loadingStyle={loadingStyle}
        hoverStyle={hoverStyle}
        focusedStyle={focusedStyle}
        {...props}
      >
        <LoadingArea isLoading={isLoading} icon={<LoadingSpinner {...loadingIconProps} />}>
          <Padding {...paddingProps}>
            <Flex gap={PXToRem(8)} alignItems='center' justifyContent='center'>
              {startIcon && (
                <Icon label='' {...iconProps}>
                  {startIcon}
                </Icon>
              )}

              <Text {...textProps}>{title}</Text>

              {endIcon && (
                <Icon label='' {...iconProps}>
                  {endIcon}
                </Icon>
              )}
            </Flex>
          </Padding>
        </LoadingArea>
      </BaseButton>
    )
  },
)

export default MinimalButton
