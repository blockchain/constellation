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
  IconWithdraw,
} from './Icons'
import { IconName, IconPropsType } from './types'

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
    case 'apple':
      return <IconApple width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'arrow-down':
      return <IconArrowDown width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'arrow-left':
      return <IconArrowLeft width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'arrow-right':
      return <IconArrowRight width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'arrow-up':
      return <IconArrowUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'backspace':
      return <IconBackspace width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'backup':
      return <IconBackup width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'bank':
      return <IconBank width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'blockchain':
      return <IconBlockchain width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'blockchain-circle':
      return <IconBlockchainCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'calendar':
      return <IconCalendar width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'call':
      return <IconCall width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'camera':
      return <IconCamera width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'cart':
      return <IconCart width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'chart':
      return <IconChart width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'chart-bubbles':
      return <IconChartBubbles width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'chart-pie':
      return <IconChartPie width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'check':
      return <IconCheck width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'check-circle':
      return <IconCheckCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'chevron-down':
      return <IconChevronDown width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'chevron-left':
      return <IconChevronLeft width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'chevron-right':
      return <IconChevronRight width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'chevron-up':
      return <IconChevronUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'clipboard':
      return <IconClipboard width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'close':
      return <IconClose width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'close-circle':
      return <IconCloseCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'close-circle-v2':
      return <IconCloseCircleV2 width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'close-v2':
      return <IconCloseV2 width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'color-picker':
      return <IconColorPicker width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'comment':
      return <IconComment width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'components':
      return <IconComponents width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'computer':
      return <IconComputer width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'copy':
      return <IconCopy width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'credit-card':
      return <IconCreditCard width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'delete':
      return <IconDelete width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'deposit':
      return <IconDeposit width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'download':
      return <IconDownload width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'edit':
      return <IconEdit width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'education':
      return <IconEducation width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'email':
      return <IconEmail width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'error':
      return <IconError width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'exchange':
      return <IconExchange width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'expandless':
      return <IconExpandLess width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'expandmore':
      return <IconExpandMore width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'explore':
      return <IconExplore width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'faceid':
      return <IconFaceId width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'favorite':
      return <IconFavorite width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'filter':
      return <IconFilter width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'fingerprint':
      return <IconFingerprint width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'flag':
      return <IconFlag width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'flashoff':
      return <IconFlashOff width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'flashon':
      return <IconFlashOn width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'fullscreen':
      return <IconFullscreen width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'fullscreen-exit':
      return <IconFullscreenExit width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'globe':
      return <IconGlobe width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'google-translate':
      return <IconGoogleTranslate width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'hardware':
      return <IconHardware width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'history':
      return <IconHistory width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'home':
      return <IconHome width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'identification':
      return <IconIdentification width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'information':
      return <IconInformation width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'key':
      return <IconKey width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'keyboard':
      return <IconKeyboard width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'laptop':
      return <IconLaptop width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'legal':
      return <IconLegal width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'line-chart-up':
      return <IconLineChartUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'link':
      return <IconLink width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'list-bullet':
      return <IconListBullet width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'loading':
      return <IconLoading width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'lock':
      return <IconLock width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'logout':
      return <IconLogout width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'marketup':
      return <IconMarketUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'menu':
      return <IconMenu width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'microphone':
      return <IconMicrophone width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'minus-circle':
      return <IconMinusCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'money-usd':
      return <IconMoneyUsd width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'more-horizontal':
      return <IconMoreHorizontal width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'more-vertical':
      return <IconMoreVertical width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'new-window':
      return <IconNewWindow width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'notification':
      return <IconNotification width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'notification-off':
      return <IconNotificationOff width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'paperclip':
      return <IconPaperclip width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'pending':
      return <IconPending width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'people':
      return <IconPeople width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'phone':
      return <IconPhone width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'placeholder':
      return <IconPlaceholder width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'play-circle':
      return <IconPlayCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'plus':
      return <IconPlus width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'plus-circle':
      return <IconPlusCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'portfolio':
      return <IconPortfolio width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'present':
      return <IconPresent width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'print':
      return <IconPrint width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'private':
      return <IconPrivate width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'qrcode':
      return <IconQrCode width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'question':
      return <IconQuestion width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'question-circle':
      return <IconQuestionCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'receive':
      return <IconReceive width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'refresh':
      return <IconRefresh width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'repeat':
      return <IconRepeat width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'rewards':
      return <IconRewards width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'rewards-circle':
      return <IconRewardsCircle width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'search':
      return <IconSearch width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'security':
      return <IconSecurity width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'sell':
      return <IconSell width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'send':
      return <IconSend width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'settings':
      return <IconSettings width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'share-android':
      return <IconShareAndroid width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'share-ios':
      return <IconShareIos width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'signout':
      return <IconSignout width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'subdirectory':
      return <IconSubdirectory width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'support':
      return <IconSupport width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'swap':
      return <IconSwap width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'sync':
      return <IconSync width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'tag-sell':
      return <IconTagSell width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'timeout':
      return <IconTimeout width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'tor':
      return <IconTor width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'trade':
      return <IconTrade width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'transact':
      return <IconTransact width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'transact-close':
      return <IconTransactClose width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'triangle-down':
      return <IconTriangleDown width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'triangle-up':
      return <IconTriangleUp width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'unfold-less':
      return <IconUnfoldLess width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'unfold-more':
      return <IconUnfoldMore width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'unlocked':
      return <IconUnlocked width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'user':
      return <IconUser width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'user-add':
      return <IconUserAdd width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'verified':
      return <IconVerified width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'visibility-off':
      return <IconVisibilityOff width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'visibility-on':
      return <IconVisibilityOn width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'wallet':
      return <IconWallet width={iconSize[size]} height={iconSize[size]} {...props} />
    case 'withdraw':
      return <IconWithdraw width={iconSize[size]} height={iconSize[size]} {...props} />
    default:
      return <IconBlockchain width={iconSize[size]} height={iconSize[size]} {...props} />
  }
}

const Icon = (props: IconPropsType) => getIcon(props)

export { iconSize }

export default Icon
