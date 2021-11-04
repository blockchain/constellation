import { IconNameType, IconType } from './types'
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
  IconRefresh,
  IconRepeat,
  IconRewards,
  IconRewardsCircle,
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
  IconWithdraw
} from '../Icons'
import { IconProps } from '../Icons/types'

const getIcon = (name: IconNameType, props: IconProps) => {
  switch (name) {
    case 'activity':
      return <IconActivity {...props} />
    case 'airdrop':
      return <IconAirdrop {...props} />
    case 'alert':
      return <IconAlert {...props} />
    case 'android':
      return <IconAndroid {...props} />
    case 'apple':
      return <IconApple {...props} />
    case 'arrow-down':
      return <IconArrowDown {...props} />
    case 'arrow-left':
      return <IconArrowLeft {...props} />
    case 'arrow-right':
      return <IconArrowRight {...props} />
    case 'arrow-up':
      return <IconArrowUp {...props} />
    case 'backspace':
      return <IconBackspace {...props} />
    case 'backup':
      return <IconBackup {...props} />
    case 'bank':
      return <IconBank {...props} />
    case 'blockchain':
      return <IconBlockchain {...props} />
    case 'blockchain-circle':
      return <IconBlockchainCircle {...props} />
    case 'calendar':
      return <IconCalendar {...props} />
    case 'call':
      return <IconCall {...props} />
    case 'camera':
      return <IconCamera {...props} />
    case 'cart':
      return <IconCart {...props} />
    case 'chart':
      return <IconChart {...props} />
    case 'chart-bubbles':
      return <IconChartBubbles {...props} />
    case 'chart-pie':
      return <IconChartPie {...props} />
    case 'check':
      return <IconCheck {...props} />
    case 'check-circle':
      return <IconCheckCircle {...props} />
    case 'chevron-down':
      return <IconChevronDown {...props} />
    case 'chevron-left':
      return <IconChevronLeft {...props} />
    case 'chevron-right':
      return <IconChevronRight {...props} />
    case 'chevron-up':
      return <IconChevronUp {...props} />
    case 'clipboard':
      return <IconClipboard {...props} />
    case 'close':
      return <IconClose {...props} />
    case 'close-circle':
      return <IconCloseCircle {...props} />
    case 'close-circle-v2':
      return <IconCloseCircleV2 {...props} />
    case 'close-v2':
      return <IconCloseV2 {...props} />
    case 'color-picker':
      return <IconColorPicker {...props} />
    case 'comment':
      return <IconComment {...props} />
    case 'components':
      return <IconComponents {...props} />
    case 'computer':
      return <IconComputer {...props} />
    case 'copy':
      return <IconCopy {...props} />
    case 'credit-card':
      return <IconCreditCard {...props} />
    case 'delete':
      return <IconDelete {...props} />
    case 'deposit':
      return <IconDeposit {...props} />
    case 'download':
      return <IconDownload {...props} />
    case 'edit':
      return <IconEdit {...props} />
    case 'education':
      return <IconEducation {...props} />
    case 'email':
      return <IconEmail {...props} />
    case 'error':
      return <IconError {...props} />
    case 'exchange':
      return <IconExchange {...props} />
    case 'expandless':
      return <IconExpandLess {...props} />
    case 'expandmore':
      return <IconExpandMore {...props} />
    case 'explore':
      return <IconExplore {...props} />
    case 'faceid':
      return <IconFaceId {...props} />
    case 'favorite':
      return <IconFavorite {...props} />
    case 'filter':
      return <IconFilter {...props} />
    case 'fingerprint':
      return <IconFingerprint {...props} />
    case 'flag':
      return <IconFlag {...props} />
    case 'flashoff':
      return <IconFlashOff {...props} />
    case 'flashon':
      return <IconFlashOn {...props} />
    case 'fullscreen':
      return <IconFullscreen {...props} />
    case 'fullscreen-exit':
      return <IconFullscreenExit {...props} />
    case 'globe':
      return <IconGlobe {...props} />
    case 'google-translate':
      return <IconGoogleTranslate {...props} />
    case 'hardware':
      return <IconHardware {...props} />
    case 'history':
      return <IconHistory {...props} />
    case 'home':
      return <IconHome {...props} />
    case 'identification':
      return <IconIdentification {...props} />
    case 'information':
      return <IconInformation {...props} />
    case 'key':
      return <IconKey {...props} />
    case 'keyboard':
      return <IconKeyboard {...props} />
    case 'laptop':
      return <IconLaptop {...props} />
    case 'legal':
      return <IconLegal {...props} />
    case 'line-chart-up':
      return <IconLineChartUp {...props} />
    case 'link':
      return <IconLink {...props} />
    case 'list-bullet':
      return <IconListBullet {...props} />
    case 'loading':
      return <IconLoading {...props} />
    case 'lock':
      return <IconLock {...props} />
    case 'logout':
      return <IconLogout {...props} />
    case 'marketup':
      return <IconMarketUp {...props} />
    case 'menu':
      return <IconMenu {...props} />
    case 'microphone':
      return <IconMicrophone {...props} />
    case 'minus-circle':
      return <IconMinusCircle {...props} />
    case 'money-usd':
      return <IconMoneyUsd {...props} />
    case 'more-horizontal':
      return <IconMoreHorizontal {...props} />
    case 'more-vertical':
      return <IconMoreVertical {...props} />
    case 'new-window':
      return <IconNewWindow {...props} />
    case 'notification':
      return <IconNotification {...props} />
    case 'notification-off':
      return <IconNotificationOff {...props} />
    case 'paperclip':
      return <IconPaperclip {...props} />
    case 'pending':
      return <IconPending {...props} />
    case 'people':
      return <IconPeople {...props} />
    case 'phone':
      return <IconPhone {...props} />
    case 'placeholder':
      return <IconPlaceholder {...props} />
    case 'play-circle':
      return <IconPlayCircle {...props} />
    case 'plus':
      return <IconPlus {...props} />
    case 'plus-circle':
      return <IconPlusCircle {...props} />
    case 'portfolio':
      return <IconPortfolio {...props} />
    case 'present':
      return <IconPresent {...props} />
    case 'print':
      return <IconPrint {...props} />
    case 'private':
      return <IconPrivate {...props} />
    case 'qrcode':
      return <IconQrCode {...props} />
    case 'question':
      return <IconQuestion {...props} />
    case 'question-circle':
      return <IconQuestionCircle {...props} />
    case 'receive':
      return <IconReceive {...props} />
    case 'refresh':
      return <IconRefresh {...props} />
    case 'repeat':
      return <IconRepeat {...props} />
    case 'rewards':
      return <IconRewards {...props} />
    case 'rewards-circle':
      return <IconRewardsCircle {...props} />
    case 'search':
      return <IconSearch {...props} />
    case 'security':
      return <IconSecurity {...props} />
    case 'sell':
      return <IconSell {...props} />
    case 'send':
      return <IconSend {...props} />
    case 'settings':
      return <IconSettings {...props} />
    case 'share-android':
      return <IconShareAndroid {...props} />
    case 'share-ios':
      return <IconShareIos {...props} />
    case 'signout':
      return <IconSignout {...props} />
    case 'subdirectory':
      return <IconSubdirectory {...props} />
    case 'support':
      return <IconSupport {...props} />
    case 'swap':
      return <IconSwap {...props} />
    case 'sync':
      return <IconSync {...props} />
    case 'tag-sell':
      return <IconTagSell {...props} />
    case 'timeout':
      return <IconTimeout {...props} />
    case 'tor':
      return <IconTor {...props} />
    case 'trade':
      return <IconTrade {...props} />
    case 'transact':
      return <IconTransact {...props} />
    case 'transact-close':
      return <IconTransactClose {...props} />
    case 'triangle-down':
      return <IconTriangleDown {...props} />
    case 'triangle-up':
      return <IconTriangleUp {...props} />
    case 'unfold-less':
      return <IconUnfoldLess {...props} />
    case 'unfold-more':
      return <IconUnfoldMore {...props} />
    case 'unlocked':
      return <IconUnlocked {...props} />
    case 'user':
      return <IconUser {...props} />
    case 'user-add':
      return <IconUserAdd {...props} />
    case 'verified':
      return <IconVerified {...props} />
    case 'visibility-off':
      return <IconVisibilityOff {...props} />
    case 'visibility-on':
      return <IconVisibilityOn {...props} />
    case 'wallet':
      return <IconWallet {...props} />
    case 'withdraw':
      return <IconWithdraw {...props} />
  }
}

const Icon = ({ name, ...props }: IconType) => {
  return getIcon(name, props)
}

export default Icon
