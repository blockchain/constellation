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
import { SecondaryButtonProps } from './SecondaryButton.types'

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
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
      ...theme.button.secondary.default.text,
      ...(disabled ? theme.button.secondary.disabled.text : {}),
    }

    const iconProps = {
      ...theme.button.sizes[size].icon,
      ...theme.button.secondary.default.icon,
      ...(disabled ? theme.button.secondary.disabled.icon : {}),
    }

    const defaultStyle = theme.button.secondary.default
    const activeStyle = { defaultStyle, ...theme.button.secondary.active }
    const disabledStyle = { defaultStyle, ...theme.button.secondary.disabled }
    const loadingStyle = { defaultStyle, ...theme.button.secondary.loading }
    const hoverStyle = { defaultStyle, ...theme.button.secondary.hover }
    const focusedStyle = { defaultStyle, ...theme.button.secondary.focus }

    const loadingIconProps = {
      ...theme.button.sizes[size].loadingSpinner,
      ...theme.button.secondary.loading.icon,
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
export default SecondaryButton
