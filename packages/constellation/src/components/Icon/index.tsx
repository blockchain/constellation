import React from 'react'
import {
  IconActivity,
  IconAirdrop,
  IconAlert,
  IconAndroid,
  IconApple,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconBackspace,
  IconBackup,
  IconBank,
  IconBlockchain,
  IconBlockchainCircle,
  IconCalendar,
  IconCall,
  IconCamera,
  IconCart,
  IconChart,
  IconChartBubbles,
  IconChartPie,
  IconCheck,
  IconCheckCircle,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClipboard,
  IconClose,
  IconCloseCircle,
  IconCloseCircleV2,
  IconCloseV2,
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
  IconLoading,
  IconLock,
  IconLogout,
  IconMarketUp,
  IconMenu,
  IconMicrophone,
  IconMinusCircle,
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
  IconPlayCircle,
  IconPlus,
  IconPlusCircle,
  IconPortfolio,
  IconPresent,
  IconPrint,
  IconPrivate,
  IconQrCode,
  IconQuestion,
  IconQuestionCircle,
  IconReceive,
  IconReceiveV2,
  IconRefresh,
  IconRepeat,
  IconRewards,
  IconRewardsCircle,
  IconSearch,
  IconSecurity,
  IconSell,
  IconSend,
  IconSendV2,
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
  IconTransact,
  IconTransactClose,
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
} from './Icons/index.js'
import { IconName, IconPropsType } from './types.js'

const iconSize = {
  lg: 48,
  md: 24,
  sm: 16,
}

const getIcon = ({ name, size = 'md', ...props }: IconPropsType) => {
  switch (name) {
    case IconName.ACTIVITY:
      return <IconActivity width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.AIRDROP:
      return <IconAirdrop width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.ALERT:
      return <IconAlert width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.ANDROID:
      return <IconAndroid width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.APPLE:
      return <IconApple width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.ARROW_DOWN:
      return <IconArrowDown width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.ARROW_LEFT:
      return <IconArrowLeft width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.ARROW_RIGHT:
      return <IconArrowRight width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.ARROW_UP:
      return <IconArrowUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.BACKSPACE:
      return <IconBackspace width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.BACKUP:
      return <IconBackup width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.BANK:
      return <IconBank width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.BLOCKCHAIN:
      return <IconBlockchain width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.BLOCKCHAIN_CIRCLE:
      return <IconBlockchainCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CALENDAR:
      return <IconCalendar width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CALL:
      return <IconCall width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CAMERA:
      return <IconCamera width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CART:
      return <IconCart width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHART:
      return <IconChart width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHART_BUBBLES:
      return <IconChartBubbles width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHART_PIE:
      return <IconChartPie width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHECK:
      return <IconCheck width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHECK_CIRCLE:
      return <IconCheckCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHEVRON_DOWN:
      return <IconChevronDown width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHEVRON_LEFT:
      return <IconChevronLeft width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHEVRON_RIGHT:
      return <IconChevronRight width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CHEVRON_UP:
      return <IconChevronUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CLIPBOARD:
      return <IconClipboard width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CLOSE:
      return <IconClose width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CLOSE_CIRCLE:
      return <IconCloseCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CLOSE_CIRCLE_V2:
      return <IconCloseCircleV2 width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CLOSE_V2:
      return <IconCloseV2 width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.COLOR_PICKER:
      return <IconColorPicker width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.COMMENT:
      return <IconComment width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.COMPONENTS:
      return <IconComponents width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.COMPUTER:
      return <IconComputer width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.COPY:
      return <IconCopy width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.CREDIT_CARD:
      return <IconCreditCard width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.DELETE:
      return <IconDelete width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.DEPOSIT:
      return <IconDeposit width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.DOWNLOAD:
      return <IconDownload width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.EDIT:
      return <IconEdit width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.EDUCATION:
      return <IconEducation width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.EMAIL:
      return <IconEmail width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.ERROR:
      return <IconError width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.EXCHANGE:
      return <IconExchange width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.EXPANDLESS:
      return <IconExpandLess width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.EXPANDMORE:
      return <IconExpandMore width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.EXPLORE:
      return <IconExplore width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FACEID:
      return <IconFaceId width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FAVORITE:
      return <IconFavorite width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FILTER:
      return <IconFilter width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FINGERPRINT:
      return <IconFingerprint width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FLAG:
      return <IconFlag width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FLASHOFF:
      return <IconFlashOff width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FLASHON:
      return <IconFlashOn width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FULLSCREEN:
      return <IconFullscreen width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.FULLSCREEN_EXIT:
      return <IconFullscreenExit width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.GLOBE:
      return <IconGlobe width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.GOOGLE_TRANSLATE:
      return <IconGoogleTranslate width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.HARDWARE:
      return <IconHardware width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.HISTORY:
      return <IconHistory width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.HOME:
      return <IconHome width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.IDENTIFICATION:
      return <IconIdentification width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.INFORMATION:
      return <IconInformation width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.KEY:
      return <IconKey width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.KEYBOARD:
      return <IconKeyboard width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.LAPTOP:
      return <IconLaptop width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.LEGAL:
      return <IconLegal width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.LINE_CHART_UP:
      return <IconLineChartUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.LINK:
      return <IconLink width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.LIST_BULLET:
      return <IconListBullet width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.LOADING:
      return <IconLoading width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.LOCK:
      return <IconLock width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.LOGOUT:
      return <IconLogout width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.MARKETUP:
      return <IconMarketUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.MENU:
      return <IconMenu width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.MICROPHONE:
      return <IconMicrophone width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.MINUS_CIRCLE:
      return <IconMinusCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.MONEY_USD:
      return <IconMoneyUsd width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.MORE_HORIZONTAL:
      return <IconMoreHorizontal width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.MORE_VERTICAL:
      return <IconMoreVertical width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.NEW_WINDOW:
      return <IconNewWindow width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.NOTIFICATION:
      return <IconNotification width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.NOTIFICATION_OFF:
      return <IconNotificationOff width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PAPERCLIP:
      return <IconPaperclip width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PENDING:
      return <IconPending width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PEOPLE:
      return <IconPeople width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PHONE:
      return <IconPhone width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PLACEHOLDER:
      return <IconPlaceholder width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PLAY_CIRCLE:
      return <IconPlayCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PLUS:
      return <IconPlus width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PLUS_CIRCLE:
      return <IconPlusCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PORTFOLIO:
      return <IconPortfolio width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PRESENT:
      return <IconPresent width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PRINT:
      return <IconPrint width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.PRIVATE:
      return <IconPrivate width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.QRCODE:
      return <IconQrCode width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.QUESTION:
      return <IconQuestion width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.QUESTION_CIRCLE:
      return <IconQuestionCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.RECEIVE:
      return <IconReceive width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.RECEIVE_V2:
      return <IconReceiveV2 width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.REFRESH:
      return <IconRefresh width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.REPEAT:
      return <IconRepeat width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.REWARDS:
      return <IconRewards width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.REWARDS_CIRCLE:
      return <IconRewardsCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SEARCH:
      return <IconSearch width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SECURITY:
      return <IconSecurity width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SELL:
      return <IconSell width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SEND:
      return <IconSend width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SEND_V2:
      return <IconSendV2 width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SETTINGS:
      return <IconSettings width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SHARE_ANDROID:
      return <IconShareAndroid width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SHARE_IOS:
      return <IconShareIos width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SIGNOUT:
      return <IconSignout width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SUBDIRECTORY:
      return <IconSubdirectory width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SUPPORT:
      return <IconSupport width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SWAP:
      return <IconSwap width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.SYNC:
      return <IconSync width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.TAG_SELL:
      return <IconTagSell width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.TIMEOUT:
      return <IconTimeout width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.TOR:
      return <IconTor width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.TRADE:
      return <IconTrade width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.TRANSACT:
      return <IconTransact width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.TRANSACT_CLOSE:
      return <IconTransactClose width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.TRIANGLE_DOWN:
      return <IconTriangleDown width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.TRIANGLE_UP:
      return <IconTriangleUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.UNFOLD_LESS:
      return <IconUnfoldLess width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.UNFOLD_MORE:
      return <IconUnfoldMore width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.UNLOCKED:
      return <IconUnlocked width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.USER:
      return <IconUser width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.USER_ADD:
      return <IconUserAdd width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.VERIFIED:
      return <IconVerified width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.VISIBILITY_OFF:
      return <IconVisibilityOff width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.VISIBILITY_ON:
      return <IconVisibilityOn width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.WALLET:
      return <IconWallet width={iconSize[size]} height={iconSize[size]} {...props} />
    case IconName.WITHDRAW:
      return <IconWithdraw width={iconSize[size]} height={iconSize[size]} {...props} />
    default:
      return <IconBlockchain width={iconSize[size]} height={iconSize[size]} {...props} />
  }
}

const Icon = (props: IconPropsType) => getIcon(props)

export { iconSize }

export default Icon
