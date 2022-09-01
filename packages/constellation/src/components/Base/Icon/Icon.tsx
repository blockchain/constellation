import React from 'react'

import { IconSizes, Props } from './Icon.types'
/**
 * All icon SVGs are imported here and exported as Icon components
 */
import iconActivity from './icons/icon-activity.svg'
import iconAirdrop from './icons/icon-airdrop.svg'
import iconAlert from './icons/icon-alert.svg'
import iconAndroid from './icons/icon-android.svg'
import iconApple from './icons/icon-apple.svg'
import iconArrowDown from './icons/icon-arrow-down.svg'
import iconArrowDownLeft from './icons/icon-arrow-down-left.svg'
import iconArrowLeft from './icons/icon-arrow-left.svg'
import iconArrowRight from './icons/icon-arrow-right.svg'
import iconArrowUp from './icons/icon-arrow-up.svg'
import iconArrowUpRight from './icons/icon-arrow-up-right.svg'
import iconBackspaceAndroid from './icons/icon-backspace-android.svg'
import iconBackup from './icons/icon-backup.svg'
import iconBank from './icons/icon-bank.svg'
import iconBlockchain from './icons/icon-blockchain.svg'
import iconBlockchainCircle from './icons/icon-blockchain-circle.svg'
import iconBlockchainLogo from './icons/icon-blockchain-logo.svg'
import iconCalendar from './icons/icon-calendar.svg'
import iconCall from './icons/icon-call.svg'
import iconCamera from './icons/icon-camera.svg'
import iconCart from './icons/icon-cart.svg'
import iconChartBar from './icons/icon-chart-bar.svg'
import iconChartBubble from './icons/icon-chart-bubble.svg'
import iconChartPie from './icons/icon-chart-pie.svg'
import iconChat from './icons/icon-chat.svg'
import iconCheck from './icons/icon-check.svg'
import iconCheckCircle from './icons/icon-check-circle.svg'
import iconChevronDown from './icons/icon-chevron-down.svg'
import iconChevronDownV2 from './icons/icon-chevron-down-v2.svg'
import iconChevronLeft from './icons/icon-chevron-left.svg'
import iconChevronLeftV2 from './icons/icon-chevron-left-v2.svg'
import iconChevronRight from './icons/icon-chevron-right.svg'
import iconChevronRightV2 from './icons/icon-chevron-right-v2.svg'
import iconChevronUp from './icons/icon-chevron-up.svg'
import iconChevronUpV2 from './icons/icon-chevron-up-v2.svg'
import iconClipboard from './icons/icon-clipboard.svg'
import iconClose from './icons/icon-close.svg'
import iconCloseCircle from './icons/icon-close-circle.svg'
import iconCloseCircleV2 from './icons/icon-close-circle-v2.svg'
import iconCloseV2 from './icons/icon-close-v2.svg'
import iconCloud from './icons/icon-cloud.svg'
import iconCloudDone from './icons/icon-cloud-done.svg'
import iconCloudDownload from './icons/icon-cloud-download.svg'
import iconCloudUpload from './icons/icon-cloud-upload.svg'
import iconColorPicker from './icons/icon-color-picker.svg'
import iconComponents from './icons/icon-components.svg'
import iconComputer from './icons/icon-computer.svg'
import iconCopy from './icons/icon-copy.svg'
import iconCreditCard from './icons/icon-credit-card.svg'
import iconDelete from './icons/icon-delete.svg'
import iconDeposit from './icons/icon-deposit.svg'
import iconDownload from './icons/icon-download.svg'
import iconEdit from './icons/icon-edit.svg'
import iconEducation from './icons/icon-education.svg'
import iconEmail from './icons/icon-email.svg'
import iconError from './icons/icon-error.svg'
import iconExchange from './icons/icon-exchange.svg'
import iconExpandLess from './icons/icon-expand-less.svg'
import iconExpandMore from './icons/icon-expand-more.svg'
import iconExplore from './icons/icon-explore.svg'
import iconFacebook from './icons/icon-facebook.svg'
import iconFaceId from './icons/icon-faceId.svg'
import iconFavoriteFilled from './icons/icon-favorite-filled.svg'
import iconFilter from './icons/icon-filter.svg'
import iconFingerprint from './icons/icon-fingerprint.svg'
import iconFlag from './icons/icon-flag.svg'
import iconFlashOff from './icons/icon-flash-off.svg'
import iconFlashOn from './icons/icon-flash-on.svg'
import iconFullscreen from './icons/icon-fullscreen.svg'
import iconFullscreenExit from './icons/icon-fullscreen-exit.svg'
import iconGithub from './icons/icon-github.svg'
import iconGlobe from './icons/icon-globe.svg'
import iconGoogleAuthenticator from './icons/icon-google-authenticator.svg'
import iconGoogleTranslate from './icons/icon-google-translate.svg'
import iconHardware from './icons/icon-hardware.svg'
import iconHistory from './icons/icon-history.svg'
import iconHome from './icons/icon-home.svg'
import iconIdentification from './icons/icon-identification.svg'
import iconImage from './icons/icon-image.svg'
import iconInformation from './icons/icon-information.svg'
import iconInstagram from './icons/icon-instagram.svg'
import iconKey from './icons/icon-key.svg'
import iconKeyboard from './icons/icon-keyboard.svg'
import iconLaptop from './icons/icon-laptop.svg'
import iconLegal from './icons/icon-legal.svg'
import iconLineChartUp from './icons/icon-line-chart-up.svg'
import iconLink from './icons/icon-link.svg'
import iconLinkedIn from './icons/icon-linked-in.svg'
import iconListBullets from './icons/icon-list-bullets.svg'
import iconLoading from './icons/icon-loading.svg'
import iconLockClosed from './icons/icon-lock-closed.svg'
import iconLockOpen from './icons/icon-lock-open.svg'
import iconLogout from './icons/icon-logout.svg'
import iconMarketUp from './icons/icon-market-up.svg'
import iconMedium from './icons/icon-medium.svg'
import iconMenu from './icons/icon-menu.svg'
import iconMicrophone from './icons/icon-microphone.svg'
import iconMinus from './icons/icon-minus.svg'
import iconMinusCircle from './icons/icon-minus-circle.svg'
import iconMoneyUsd from './icons/icon-money-usd.svg'
import iconMoreHorizontal from './icons/icon-more-horizontal.svg'
import iconMoreVertical from './icons/icon-more-vertical.svg'
import iconNewWindow from './icons/icon-new-window.svg'
import iconNft from './icons/icon-nft.svg'
import iconNotificationOff from './icons/icon-notification-off.svg'
import iconNotificationOn from './icons/icon-notification-on.svg'
import iconPending from './icons/icon-pending.svg'
import iconPeople from './icons/icon-people.svg'
import iconPercent from './icons/icon-percent.svg'
import iconPhone from './icons/icon-phone.svg'
import iconPin from './icons/icon-pin.svg'
import iconPlaceholder from './icons/icon-placeholder.svg'
import iconPlayCircle from './icons/icon-play-circle.svg'
import iconPlus from './icons/icon-plus.svg'
import iconPlusCircle from './icons/icon-plus-circle.svg'
import iconPortfolio from './icons/icon-portfolio.svg'
import iconPresent from './icons/icon-present.svg'
import iconPrint from './icons/icon-print.svg'
import iconPrivate from './icons/icon-private.svg'
import iconQrCode from './icons/icon-qr-code.svg'
import iconQuestion from './icons/icon-question.svg'
import iconQuestionCircle from './icons/icon-question-circle.svg'
import iconReceive from './icons/icon-receive.svg'
import iconReceiveV2 from './icons/icon-receive-v2.svg'
import iconReddit from './icons/icon-reddit.svg'
import iconRefresh from './icons/icon-refresh.svg'
import iconRepeat from './icons/icon-repeat.svg'
import iconRewards from './icons/icon-rewards.svg'
import iconRewardsCircle from './icons/icon-rewards-circle.svg'
import iconSearch from './icons/icon-search.svg'
import iconSell from './icons/icon-sell.svg'
import iconSend from './icons/icon-send.svg'
import iconSendV2 from './icons/icon-send-v2.svg'
import iconSettings from './icons/icon-settings.svg'
import iconShareAndroid from './icons/icon-share-android.svg'
import iconShareIos from './icons/icon-share-ios.svg'
import iconShield from './icons/icon-shield.svg'
import iconSignout from './icons/icon-signout.svg'
import iconSlack from './icons/icon-slack.svg'
import iconSubdirectory from './icons/icon-subdirectory.svg'
import iconSupport from './icons/icon-support.svg'
import iconSwap from './icons/icon-swap.svg'
import iconSync from './icons/icon-sync.svg'
import iconTag from './icons/icon-tag.svg'
import iconTimeout from './icons/icon-timeout.svg'
import iconTor from './icons/icon-tor.svg'
import iconTrade from './icons/icon-trade.svg'
import iconTriangleDown from './icons/icon-triangle-down.svg'
import iconTriangleUp from './icons/icon-triangle-up.svg'
import iconTwitter from './icons/icon-twitter.svg'
import iconUnfoldLess from './icons/icon-unfold-less.svg'
import iconUnfoldMore from './icons/icon-unfold-more.svg'
import iconUser from './icons/icon-user.svg'
import iconUserAdd from './icons/icon-user-add.svg'
import iconVerified from './icons/icon-verified.svg'
import iconVisibilityOff from './icons/icon-visibility-off.svg'
import iconVisibilityOn from './icons/icon-visibility-on.svg'
import iconWallet from './icons/icon-wallet.svg'
import iconWarningTriangle from './icons/icon-warning-triangle.svg'
import iconWithdraw from './icons/icon-withdraw.svg'
import iconYubiKey from './icons/icon-yubi-key.svg'

const sizeMap: Record<IconSizes, number> = {
  large: 2.25,
  medium: 1.5,
  small: 1,
}

/**
 * Icons are used to represent common actions, such as "Add/Remove",
 * "Open/Close", or concepts such as "Location" or "User". The component
 * renders an inline SVG. Where possible, it is preferable to import and use
 * only the individual Icon components required.
 *
 * This function is used to generate an Icon component from an SVG. All props are forwarded to the inner `<svg>` element.
 * This includes all appropriate HTML attributes or aria tags.
 */
export const createIconComponent =
  (Icon: React.ElementType): React.FC<Props> =>
  ({ color, size = 'small', titleId, ...otherProps }) => {
    const remSize = typeof size === 'number' ? `${size}rem` : `${sizeMap[size]}rem`

    return (
      <Icon
        {...{
          color: color ? `${color}` : 'inherit',
        }}
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        width={remSize}
        height={remSize}
        aria-labelledby={titleId}
        focusable='false'
        {...otherProps}
      />
    )
  }

export const IconActivity = createIconComponent(iconActivity)
export const IconAirdrop = createIconComponent(iconAirdrop)
export const IconAlert = createIconComponent(iconAlert)
export const IconAndroid = createIconComponent(iconAndroid)
export const IconApple = createIconComponent(iconApple)
export const IconArrowDown = createIconComponent(iconArrowDown)
export const IconArrowDownLeft = createIconComponent(iconArrowDownLeft)
export const IconArrowLeft = createIconComponent(iconArrowLeft)
export const IconArrowRight = createIconComponent(iconArrowRight)
export const IconArrowUp = createIconComponent(iconArrowUp)
export const IconArrowUpRight = createIconComponent(iconArrowUpRight)
export const IconBackspaceAndroid = createIconComponent(iconBackspaceAndroid)
export const IconBackup = createIconComponent(iconBackup)
export const IconBank = createIconComponent(iconBank)
export const IconBlockchain = createIconComponent(iconBlockchain)
export const IconBlockchainCircle = createIconComponent(iconBlockchainCircle)
export const IconBlockchainLogo = createIconComponent(iconBlockchainLogo)
export const IconCalendar = createIconComponent(iconCalendar)
export const IconCall = createIconComponent(iconCall)
export const IconCamera = createIconComponent(iconCamera)
export const IconCart = createIconComponent(iconCart)
export const IconChartBar = createIconComponent(iconChartBar)
export const IconChartBubble = createIconComponent(iconChartBubble)
export const IconChartPie = createIconComponent(iconChartPie)
export const IconChat = createIconComponent(iconChat)
export const IconCheck = createIconComponent(iconCheck)
export const IconCheckCircle = createIconComponent(iconCheckCircle)
export const IconChevronDown = createIconComponent(iconChevronDown)
export const IconChevronDownV2 = createIconComponent(iconChevronDownV2)
export const IconChevronLeft = createIconComponent(iconChevronLeft)
export const IconChevronLeftV2 = createIconComponent(iconChevronLeftV2)
export const IconChevronRight = createIconComponent(iconChevronRight)
export const IconChevronRightV2 = createIconComponent(iconChevronRightV2)
export const IconChevronUp = createIconComponent(iconChevronUp)
export const IconChevronUpV2 = createIconComponent(iconChevronUpV2)
export const IconClipboard = createIconComponent(iconClipboard)
export const IconClose = createIconComponent(iconClose)
export const IconCloseCircle = createIconComponent(iconCloseCircle)
export const IconCloseCircleV2 = createIconComponent(iconCloseCircleV2)
export const IconCloseV2 = createIconComponent(iconCloseV2)
export const IconCloud = createIconComponent(iconCloud)
export const IconCloudDone = createIconComponent(iconCloudDone)
export const IconCloudDownload = createIconComponent(iconCloudDownload)
export const IconCloudUpload = createIconComponent(iconCloudUpload)
export const IconColorPicker = createIconComponent(iconColorPicker)
export const IconComponents = createIconComponent(iconComponents)
export const IconComputer = createIconComponent(iconComputer)
export const IconCopy = createIconComponent(iconCopy)
export const IconCreditCard = createIconComponent(iconCreditCard)
export const IconDelete = createIconComponent(iconDelete)
export const IconDeposit = createIconComponent(iconDeposit)
export const IconDownload = createIconComponent(iconDownload)
export const IconEdit = createIconComponent(iconEdit)
export const IconEducation = createIconComponent(iconEducation)
export const IconEmail = createIconComponent(iconEmail)
export const IconError = createIconComponent(iconError)
export const IconExchange = createIconComponent(iconExchange)
export const IconExpandLess = createIconComponent(iconExpandLess)
export const IconExpandMore = createIconComponent(iconExpandMore)
export const IconExplore = createIconComponent(iconExplore)
export const IconFacebook = createIconComponent(iconFacebook)
export const IconFaceId = createIconComponent(iconFaceId)
export const IconFavoriteFilled = createIconComponent(iconFavoriteFilled)
export const IconFilter = createIconComponent(iconFilter)
export const IconFingerprint = createIconComponent(iconFingerprint)
export const IconFlag = createIconComponent(iconFlag)
export const IconFlashOff = createIconComponent(iconFlashOff)
export const IconFlashOn = createIconComponent(iconFlashOn)
export const IconFullscreen = createIconComponent(iconFullscreen)
export const IconFullscreenExit = createIconComponent(iconFullscreenExit)
export const IconGithub = createIconComponent(iconGithub)
export const IconGlobe = createIconComponent(iconGlobe)
export const IconGoogleAuthenticator = createIconComponent(iconGoogleAuthenticator)
export const IconGoogleTranslate = createIconComponent(iconGoogleTranslate)
export const IconHardware = createIconComponent(iconHardware)
export const IconHistory = createIconComponent(iconHistory)
export const IconHome = createIconComponent(iconHome)
export const IconIdentification = createIconComponent(iconIdentification)
export const IconImage = createIconComponent(iconImage)
export const IconInformation = createIconComponent(iconInformation)
export const IconInstagram = createIconComponent(iconInstagram)
export const IconKey = createIconComponent(iconKey)
export const IconKeyboard = createIconComponent(iconKeyboard)
export const IconLaptop = createIconComponent(iconLaptop)
export const IconLegal = createIconComponent(iconLegal)
export const IconLineChartUp = createIconComponent(iconLineChartUp)
export const IconLink = createIconComponent(iconLink)
export const IconLinkedIn = createIconComponent(iconLinkedIn)
export const IconListBullets = createIconComponent(iconListBullets)
export const IconLoading = createIconComponent(iconLoading)
export const IconLockClosed = createIconComponent(iconLockClosed)
export const IconLockOpen = createIconComponent(iconLockOpen)
export const IconLogout = createIconComponent(iconLogout)
export const IconMarketUp = createIconComponent(iconMarketUp)
export const IconMedium = createIconComponent(iconMedium)
export const IconMenu = createIconComponent(iconMenu)
export const IconMicrophone = createIconComponent(iconMicrophone)
export const IconMinus = createIconComponent(iconMinus)
export const IconMinusCircle = createIconComponent(iconMinusCircle)
export const IconMoneyUsd = createIconComponent(iconMoneyUsd)
export const IconMoreHorizontal = createIconComponent(iconMoreHorizontal)
export const IconMoreVertical = createIconComponent(iconMoreVertical)
export const IconNewWindow = createIconComponent(iconNewWindow)
export const IconNft = createIconComponent(iconNft)
export const IconNotificationOff = createIconComponent(iconNotificationOff)
export const IconNotificationOn = createIconComponent(iconNotificationOn)
export const IconPending = createIconComponent(iconPending)
export const IconPeople = createIconComponent(iconPeople)
export const IconPercent = createIconComponent(iconPercent)
export const IconPhone = createIconComponent(iconPhone)
export const IconPin = createIconComponent(iconPin)
export const IconPlaceholder = createIconComponent(iconPlaceholder)
export const IconPlayCircle = createIconComponent(iconPlayCircle)
export const IconPlus = createIconComponent(iconPlus)
export const IconPlusCircle = createIconComponent(iconPlusCircle)
export const IconPortfolio = createIconComponent(iconPortfolio)
export const IconPresent = createIconComponent(iconPresent)
export const IconPrint = createIconComponent(iconPrint)
export const IconPrivate = createIconComponent(iconPrivate)
export const IconQrCode = createIconComponent(iconQrCode)
export const IconQuestion = createIconComponent(iconQuestion)
export const IconQuestionCircle = createIconComponent(iconQuestionCircle)
export const IconReceive = createIconComponent(iconReceive)
export const IconReceiveV2 = createIconComponent(iconReceiveV2)
export const IconReddit = createIconComponent(iconReddit)
export const IconRefresh = createIconComponent(iconRefresh)
export const IconRepeat = createIconComponent(iconRepeat)
export const IconRewards = createIconComponent(iconRewards)
export const IconRewardsCircle = createIconComponent(iconRewardsCircle)
export const IconSearch = createIconComponent(iconSearch)
export const IconSell = createIconComponent(iconSell)
export const IconSend = createIconComponent(iconSend)
export const IconSendV2 = createIconComponent(iconSendV2)
export const IconSettings = createIconComponent(iconSettings)
export const IconShareAndroid = createIconComponent(iconShareAndroid)
export const IconShareIos = createIconComponent(iconShareIos)
export const IconShield = createIconComponent(iconShield)
export const IconSignout = createIconComponent(iconSignout)
export const IconSlack = createIconComponent(iconSlack)
export const IconSubdirectory = createIconComponent(iconSubdirectory)
export const IconSupport = createIconComponent(iconSupport)
export const IconSwap = createIconComponent(iconSwap)
export const IconSync = createIconComponent(iconSync)
export const IconTag = createIconComponent(iconTag)
export const IconTimeout = createIconComponent(iconTimeout)
export const IconTor = createIconComponent(iconTor)
export const IconTrade = createIconComponent(iconTrade)
export const IconTriangleDown = createIconComponent(iconTriangleDown)
export const IconTriangleUp = createIconComponent(iconTriangleUp)
export const IconTwitter = createIconComponent(iconTwitter)
export const IconUnfoldLess = createIconComponent(iconUnfoldLess)
export const IconUnfoldMore = createIconComponent(iconUnfoldMore)
export const IconUser = createIconComponent(iconUser)
export const IconUserAdd = createIconComponent(iconUserAdd)
export const IconVerified = createIconComponent(iconVerified)
export const IconVisibilityOff = createIconComponent(iconVisibilityOff)
export const IconVisibilityOn = createIconComponent(iconVisibilityOn)
export const IconWallet = createIconComponent(iconWallet)
export const IconWarningTriangle = createIconComponent(iconWarningTriangle)
export const IconWithdraw = createIconComponent(iconWithdraw)
export const IconYubiKey = createIconComponent(iconYubiKey)
