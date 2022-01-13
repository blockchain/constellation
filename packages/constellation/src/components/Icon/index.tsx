import React from 'react'

import {
  IconActivity,
  IconAirdrop,
  IconAlert,
  IconAndroid,
  IconApple,
  IconArrowBiDirectional,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconBackspace,
  IconBackup,
  IconBank,
  IconBlockchain,
  IconCalendar,
  IconCall,
  IconCamera,
  IconCart,
  IconChart,
  IconChartBubbles,
  IconChartPie,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClipboard,
  IconClose,
  IconColorPicker,
  IconComment,
  IconComponents,
  IconComputer,
  IconCopy,
  IconCreditCard,
  IconDelete,
  IconDeposit,
  IconDownload,
  IconEdit,
  IconEducation,
  IconEmail,
  IconError,
  IconExchange,
  IconExpandLess,
  IconExpandMore,
  IconExplore,
  IconFaceId,
  IconFavorite,
  IconFilter,
  IconFingerprint,
  IconFlag,
  IconFlashOff,
  IconFlashOn,
  IconFullscreen,
  IconFullscreenExit,
  IconGlobe,
  IconGoogleTranslate,
  IconHardware,
  IconHistory,
  IconHome,
  IconIdentification,
  IconInformation,
  IconKey,
  IconKeyboard,
  IconLaptop,
  IconLegal,
  IconLineChartUp,
  IconLink,
  IconListBullet,
  IconLock,
  IconLogout,
  IconMarketUp,
  IconMenu,
  IconMicrophone,
  IconMoneyUsd,
  IconMoreHorizontal,
  IconMoreVertical,
  IconNewWindow,
  IconNotification,
  IconNotificationOff,
  IconPaperclip,
  IconPending,
  IconPeople,
  IconPhone,
  IconPlaceholder,
  IconPlus,
  IconPortfolio,
  IconPresent,
  IconPrint,
  IconPrivate,
  IconQrCode,
  IconQuestion,
  IconReceive,
  IconRefresh,
  IconRepeat,
  IconRewards,
  IconSearch,
  IconSecurity,
  IconSell,
  IconSend,
  IconSettings,
  IconShareAndroid,
  IconShareIos,
  IconSignout,
  IconSubdirectory,
  IconSupport,
  IconSwap,
  IconSync,
  IconTagSell,
  IconTimeout,
  IconTor,
  IconTrade,
  IconTradeFab,
  IconTriangleDown,
  IconTriangleUp,
  IconUnfoldLess,
  IconUnfoldMore,
  IconUnlocked,
  IconUser,
  IconUserAdd,
  IconVerified,
  IconVisibilityOff,
  IconVisibilityOn,
  IconWallet,
  IconWithdraw,
} from './Icons'
import { IconName, IconProps } from './types'

const iconSizes = {
  lg: 36,
  md: 24,
  sm: 16,
}

const Icon = ({ name, size = 'md', ...props }: IconProps) => {
  const dimensions = {
    height: iconSizes[size],
    width: iconSizes[size],
  }

  switch (name) {
    case IconName.ACTIVITY:
      return <IconActivity {...dimensions} {...props} />
    case IconName.AIRDROP:
      return <IconAirdrop {...dimensions} {...props} />
    case IconName.ALERT:
      return <IconAlert {...dimensions} {...props} />
    case IconName.ANDROID:
      return <IconAndroid {...dimensions} {...props} />
    case IconName.APPLE:
      return <IconApple {...dimensions} {...props} />
    case IconName.ARROW_BI_DIRECTIONAL:
      return <IconArrowBiDirectional {...dimensions} {...props} />
    case IconName.ARROW_DOWN:
      return <IconArrowDown {...dimensions} {...props} />
    case IconName.ARROW_LEFT:
      return <IconArrowLeft {...dimensions} {...props} />
    case IconName.ARROW_RIGHT:
      return <IconArrowRight {...dimensions} {...props} />
    case IconName.ARROW_UP:
      return <IconArrowUp {...dimensions} {...props} />
    case IconName.BACKSPACE:
      return <IconBackspace {...dimensions} {...props} />
    case IconName.BACKUP:
      return <IconBackup {...dimensions} {...props} />
    case IconName.BANK:
      return <IconBank {...dimensions} {...props} />
    case IconName.BLOCKCHAIN:
      return <IconBlockchain {...dimensions} {...props} />
    case IconName.CALENDAR:
      return <IconCalendar {...dimensions} {...props} />
    case IconName.CALL:
      return <IconCall {...dimensions} {...props} />
    case IconName.CAMERA:
      return <IconCamera {...dimensions} {...props} />
    case IconName.CART:
      return <IconCart {...dimensions} {...props} />
    case IconName.CHART:
      return <IconChart {...dimensions} {...props} />
    case IconName.CHART_BUBBLES:
      return <IconChartBubbles {...dimensions} {...props} />
    case IconName.CHART_PIE:
      return <IconChartPie {...dimensions} {...props} />
    case IconName.CHECK:
      return <IconCheck {...dimensions} {...props} />
    case IconName.CHEVRON_DOWN:
      return <IconChevronDown {...dimensions} {...props} />
    case IconName.CHEVRON_LEFT:
      return <IconChevronLeft {...dimensions} {...props} />
    case IconName.CHEVRON_RIGHT:
      return <IconChevronRight {...dimensions} {...props} />
    case IconName.CHEVRON_UP:
      return <IconChevronUp {...dimensions} {...props} />
    case IconName.CLIPBOARD:
      return <IconClipboard {...dimensions} {...props} />
    case IconName.CLOSE:
      return <IconClose {...dimensions} {...props} />
    case IconName.COLOR_PICKER:
      return <IconColorPicker {...dimensions} {...props} />
    case IconName.COMMENT:
      return <IconComment {...dimensions} {...props} />
    case IconName.COMPONENTS:
      return <IconComponents {...dimensions} {...props} />
    case IconName.COMPUTER:
      return <IconComputer {...dimensions} {...props} />
    case IconName.COPY:
      return <IconCopy {...dimensions} {...props} />
    case IconName.CREDIT_CARD:
      return <IconCreditCard {...dimensions} {...props} />
    case IconName.DELETE:
      return <IconDelete {...dimensions} {...props} />
    case IconName.DEPOSIT:
      return <IconDeposit {...dimensions} {...props} />
    case IconName.DOWNLOAD:
      return <IconDownload {...dimensions} {...props} />
    case IconName.EDIT:
      return <IconEdit {...dimensions} {...props} />
    case IconName.EDUCATION:
      return <IconEducation {...dimensions} {...props} />
    case IconName.EMAIL:
      return <IconEmail {...dimensions} {...props} />
    case IconName.ERROR:
      return <IconError {...dimensions} {...props} />
    case IconName.EXCHANGE:
      return <IconExchange {...dimensions} {...props} />
    case IconName.EXPANDLESS:
      return <IconExpandLess {...dimensions} {...props} />
    case IconName.EXPANDMORE:
      return <IconExpandMore {...dimensions} {...props} />
    case IconName.EXPLORE:
      return <IconExplore {...dimensions} {...props} />
    case IconName.FACEID:
      return <IconFaceId {...dimensions} {...props} />
    case IconName.FAVORITE:
      return <IconFavorite {...dimensions} {...props} />
    case IconName.FILTER:
      return <IconFilter {...dimensions} {...props} />
    case IconName.FINGERPRINT:
      return <IconFingerprint {...dimensions} {...props} />
    case IconName.FLAG:
      return <IconFlag {...dimensions} {...props} />
    case IconName.FLASHOFF:
      return <IconFlashOff {...dimensions} {...props} />
    case IconName.FLASHON:
      return <IconFlashOn {...dimensions} {...props} />
    case IconName.FULLSCREEN:
      return <IconFullscreen {...dimensions} {...props} />
    case IconName.FULLSCREEN_EXIT:
      return <IconFullscreenExit {...dimensions} {...props} />
    case IconName.GLOBE:
      return <IconGlobe {...dimensions} {...props} />
    case IconName.GOOGLE_TRANSLATE:
      return <IconGoogleTranslate {...dimensions} {...props} />
    case IconName.HARDWARE:
      return <IconHardware {...dimensions} {...props} />
    case IconName.HISTORY:
      return <IconHistory {...dimensions} {...props} />
    case IconName.HOME:
      return <IconHome {...dimensions} {...props} />
    case IconName.IDENTIFICATION:
      return <IconIdentification {...dimensions} {...props} />
    case IconName.INFORMATION:
      return <IconInformation {...dimensions} {...props} />
    case IconName.KEY:
      return <IconKey {...dimensions} {...props} />
    case IconName.KEYBOARD:
      return <IconKeyboard {...dimensions} {...props} />
    case IconName.LAPTOP:
      return <IconLaptop {...dimensions} {...props} />
    case IconName.LEGAL:
      return <IconLegal {...dimensions} {...props} />
    case IconName.LINE_CHART_UP:
      return <IconLineChartUp {...dimensions} {...props} />
    case IconName.LINK:
      return <IconLink {...dimensions} {...props} />
    case IconName.LIST_BULLET:
      return <IconListBullet {...dimensions} {...props} />
    case IconName.LOCK:
      return <IconLock {...dimensions} {...props} />
    case IconName.LOGOUT:
      return <IconLogout {...dimensions} {...props} />
    case IconName.MARKETUP:
      return <IconMarketUp {...dimensions} {...props} />
    case IconName.MENU:
      return <IconMenu {...dimensions} {...props} />
    case IconName.MICROPHONE:
      return <IconMicrophone {...dimensions} {...props} />
    case IconName.MONEY_USD:
      return <IconMoneyUsd {...dimensions} {...props} />
    case IconName.MORE_HORIZONTAL:
      return <IconMoreHorizontal {...dimensions} {...props} />
    case IconName.MORE_VERTICAL:
      return <IconMoreVertical {...dimensions} {...props} />
    case IconName.NEW_WINDOW:
      return <IconNewWindow {...dimensions} {...props} />
    case IconName.NOTIFICATION:
      return <IconNotification {...dimensions} {...props} />
    case IconName.NOTIFICATION_OFF:
      return <IconNotificationOff {...dimensions} {...props} />
    case IconName.PAPERCLIP:
      return <IconPaperclip {...dimensions} {...props} />
    case IconName.PENDING:
      return <IconPending {...dimensions} {...props} />
    case IconName.PEOPLE:
      return <IconPeople {...dimensions} {...props} />
    case IconName.PHONE:
      return <IconPhone {...dimensions} {...props} />
    case IconName.PLACEHOLDER:
      return <IconPlaceholder {...dimensions} {...props} />
    case IconName.PLUS:
      return <IconPlus {...dimensions} {...props} />
    case IconName.PORTFOLIO:
      return <IconPortfolio {...dimensions} {...props} />
    case IconName.PRESENT:
      return <IconPresent {...dimensions} {...props} />
    case IconName.PRINT:
      return <IconPrint {...dimensions} {...props} />
    case IconName.PRIVATE:
      return <IconPrivate {...dimensions} {...props} />
    case IconName.QRCODE:
      return <IconQrCode {...dimensions} {...props} />
    case IconName.QUESTION:
      return <IconQuestion {...dimensions} {...props} />
    case IconName.RECEIVE:
      return <IconReceive {...dimensions} {...props} />
    case IconName.REFRESH:
      return <IconRefresh {...dimensions} {...props} />
    case IconName.REPEAT:
      return <IconRepeat {...dimensions} {...props} />
    case IconName.REWARDS:
      return <IconRewards {...dimensions} {...props} />
    case IconName.SEARCH:
      return <IconSearch {...dimensions} {...props} />
    case IconName.SECURITY:
      return <IconSecurity {...dimensions} {...props} />
    case IconName.SELL:
      return <IconSell {...dimensions} {...props} />
    case IconName.SEND:
      return <IconSend {...dimensions} {...props} />
    case IconName.SETTINGS:
      return <IconSettings {...dimensions} {...props} />
    case IconName.SHARE_ANDROID:
      return <IconShareAndroid {...dimensions} {...props} />
    case IconName.SHARE_IOS:
      return <IconShareIos {...dimensions} {...props} />
    case IconName.SIGNOUT:
      return <IconSignout {...dimensions} {...props} />
    case IconName.SUBDIRECTORY:
      return <IconSubdirectory {...dimensions} {...props} />
    case IconName.SUPPORT:
      return <IconSupport {...dimensions} {...props} />
    case IconName.SWAP:
      return <IconSwap {...dimensions} {...props} />
    case IconName.SYNC:
      return <IconSync {...dimensions} {...props} />
    case IconName.TAG_SELL:
      return <IconTagSell {...dimensions} {...props} />
    case IconName.TIMEOUT:
      return <IconTimeout {...dimensions} {...props} />
    case IconName.TOR:
      return <IconTor {...dimensions} {...props} />
    case IconName.TRADE:
      return <IconTrade {...dimensions} {...props} />
    case IconName.TRADE_FAB:
      return <IconTradeFab {...dimensions} {...props} />
    case IconName.TRIANGLE_DOWN:
      return <IconTriangleDown {...dimensions} {...props} />
    case IconName.TRIANGLE_UP:
      return <IconTriangleUp {...dimensions} {...props} />
    case IconName.UNFOLD_LESS:
      return <IconUnfoldLess {...dimensions} {...props} />
    case IconName.UNFOLD_MORE:
      return <IconUnfoldMore {...dimensions} {...props} />
    case IconName.UNLOCKED:
      return <IconUnlocked {...dimensions} {...props} />
    case IconName.USER:
      return <IconUser {...dimensions} {...props} />
    case IconName.USER_ADD:
      return <IconUserAdd {...dimensions} {...props} />
    case IconName.VERIFIED:
      return <IconVerified {...dimensions} {...props} />
    case IconName.VISIBILITY_OFF:
      return <IconVisibilityOff {...dimensions} {...props} />
    case IconName.VISIBILITY_ON:
      return <IconVisibilityOn {...dimensions} {...props} />
    case IconName.WALLET:
      return <IconWallet {...dimensions} {...props} />
    case IconName.WITHDRAW:
      return <IconWithdraw {...dimensions} {...props} />
    default:
      return <IconBlockchain {...dimensions} {...props} />
  }
}

export { IconName, iconSizes }

export default Icon
