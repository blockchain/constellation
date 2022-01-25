/* eslint-disable simple-import-sort/imports */
import React from 'react'

import { colors } from '../../colors'
import { IconComponentProps, IconNameType } from './types'

// icon imports
import Activity from './icons/activity.svg'
import Airdrop from './icons/airdrop.svg'
import Alert from './icons/alert.svg'
import Android from './icons/android.svg'
import Apple from './icons/apple.svg'
import ArrowDown from './icons/arrowDown.svg'
import ArrowLeft from './icons/arrowLeft.svg'
import ArrowRight from './icons/arrowRight.svg'
import ArrowUp from './icons/arrowUp.svg'
import BackspaceAndroid from './icons/backspaceAndroid.svg'
import Backup from './icons/backup.svg'
import Bank from './icons/bank.svg'
import Blockchain from './icons/blockchain.svg'
import BlockchainCircle from './icons/blockchainCircle.svg'
import Calendar from './icons/calendar.svg'
import Call from './icons/call.svg'
import Camera from './icons/camera.svg'
import Cart from './icons/cart.svg'
import ChartBar from './icons/chartBar.svg'
import Chat from './icons/chat.svg'
import Check from './icons/check.svg'
import CheckCircle from './icons/checkCircle.svg'
import ChevronDown from './icons/chevronDown.svg'
import ChevronDownV2 from './icons/chevronDownV2.svg'
import ChevronLeft from './icons/chevronLeft.svg'
import ChevronLeftV2 from './icons/chevronLeftV2.svg'
import ChevronRight from './icons/chevronRight.svg'
import ChevronRightV2 from './icons/chevronRightV2.svg'
import ChevronUp from './icons/chevronUp.svg'
import ChevronUpV2 from './icons/chevronUpV2.svg'
import Clipboard from './icons/clipboard.svg'
import Close from './icons/close.svg'
import CloseCircle from './icons/closeCircle.svg'
import CloseCircleV2 from './icons/closeCircleV2.svg'
import CloseV2 from './icons/closeV2.svg'
import Cloud from './icons/cloud.svg'
import CloudDone from './icons/cloudDone.svg'
import CloudDownload from './icons/cloudDownload.svg'
import CloudUpload from './icons/cloudUpload.svg'
import ColorPicker from './icons/colorPicker.svg'
import Components from './icons/components.svg'
import Computer from './icons/computer.svg'
import Copy from './icons/copy.svg'
import CreditCard from './icons/creditCard.svg'
import Delete from './icons/delete.svg'
import Deposit from './icons/deposit.svg'
import Download from './icons/download.svg'
import Edit from './icons/edit.svg'
import Education from './icons/education.svg'
import Email from './icons/email.svg'
import Error from './icons/error.svg'
import Exchange from './icons/exchange.svg'
import ExpandLess from './icons/expandLess.svg'
import ExpandMore from './icons/expandMore.svg'
import Explore from './icons/explore.svg'
import FaceId from './icons/faceId.svg'
import FavoriteFilled from './icons/favoriteFilled.svg'
import FavoriteOutline from './icons/favoriteOutline.svg'
import Filter from './icons/filter.svg'
import Fingerprint from './icons/fingerprint.svg'
import Flag from './icons/flag.svg'
import FlashOff from './icons/flashOff.svg'
import FlashOn from './icons/flashOn.svg'
import Fullscreen from './icons/fullscreen.svg'
import FullscreenExit from './icons/fullscreenExit.svg'
import Globe from './icons/globe.svg'
import GoogleTranslate from './icons/googleTranslate.svg'
import Hardware from './icons/hardware.svg'
import History from './icons/history.svg'
import Home from './icons/home.svg'
import Identification from './icons/identification.svg'
import Image from './icons/image.svg'
import Information from './icons/information.svg'
import Key from './icons/key.svg'
import Keyboard from './icons/keyboard.svg'
import Laptop from './icons/laptop.svg'
import Legal from './icons/legal.svg'
import LineChartUp from './icons/lineChartUp.svg'
import Link from './icons/link.svg'
import ListBullets from './icons/listBullets.svg'
import LockClosed from './icons/lockClosed.svg'
import LockOpen from './icons/lockOpen.svg'
import Logout from './icons/logout.svg'
import MarketUp from './icons/marketUp.svg'
import Menu from './icons/menu.svg'
import Microphone from './icons/microphone.svg'
import MinusCircle from './icons/minusCircle.svg'
import MoneyUsd from './icons/moneyUsd.svg'
import MoreHorizontal from './icons/moreHorizontal.svg'
import MoreVertical from './icons/moreVertical.svg'
import NewWindow from './icons/newWindow.svg'
import Nft from './icons/nft.svg'
import NotificationOff from './icons/notificationOff.svg'
import NotificationOn from './icons/notificationOn.svg'
// import  from './icons/'

// icon component map
const iconComponentMap: {
  [K in IconNameType]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
} = {
  activity: Activity,
  airdrop: Airdrop,
  alert: Alert,
  android: Android,
  apple: Apple,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  backspaceAndroid: BackspaceAndroid,
  backup: Backup,
  bank: Bank,
  blockchain: Blockchain,
  blockchainCircle: BlockchainCircle,
  calendar: Calendar,
  call: Call,
  camera: Camera,
  cart: Cart,
  chartBar: ChartBar,
  chat: Chat,
  check: Check,
  checkCircle: CheckCircle,
  chevronDown: ChevronDown,
  chevronDownV2: ChevronDownV2,
  chevronLeft: ChevronLeft,
  chevronLeftV2: ChevronLeftV2,
  chevronRight: ChevronRight,
  chevronRightV2: ChevronRightV2,
  chevronUp: ChevronUp,
  chevronUpV2: ChevronUpV2,
  clipboard: Clipboard,
  close: Close,
  closeCircle: CloseCircle,
  closeCircleV2: CloseCircleV2,
  closeV2: CloseV2,
  cloud: Cloud,
  cloudDone: CloudDone,
  cloudDownload: CloudDownload,
  cloudUpload: CloudUpload,
  colorPicker: ColorPicker,
  components: Components,
  computer: Computer,
  copy: Copy,
  creditCard: CreditCard,
  delete: Delete,
  deposit: Deposit,
  download: Download,
  edit: Edit,
  education: Education,
  email: Email,
  error: Error,
  exchange: Exchange,
  expandLess: ExpandLess,
  expandMore: ExpandMore,
  explore: Explore,
  faceId: FaceId,
  favoriteFilled: FavoriteFilled,
  favoriteOutline: FavoriteOutline,
  filter: Filter,
  fingerprint: Fingerprint,
  flag: Flag,
  flashOff: FlashOff,
  flashOn: FlashOn,
  fullscreen: Fullscreen,
  fullscreenExit: FullscreenExit,
  globe: Globe,
  googleTranslate: GoogleTranslate,
  hardware: Hardware,
  history: History,
  home: Home,
  identification: Identification,
  image: Image,
  information: Information,
  key: Key,
  keyboard: Keyboard,
  laptop: Laptop,
  legal: Legal,
  lineChartUp: LineChartUp,
  link: Link,
  listBullets: ListBullets,
  lockClosed: LockClosed,
  lockOpen: LockOpen,
  logout: Logout,
  marketUp: MarketUp,
  menu: Menu,
  microphone: Microphone,
  minusCircle: MinusCircle,
  moneyUsd: MoneyUsd,
  moreHorizontal: MoreHorizontal,
  moreVertical: MoreVertical,
  newWindow: NewWindow,
  nft: Nft,
  notificationOff: NotificationOff,
  notificationOn: NotificationOn,
}

const iconSizes = {
  lg: '36px',
  md: '24px',
  sm: '16px',
}

const Icon = ({ color = 'grey800', name, size = 'md' }: IconComponentProps) => {
  const IconComponent = iconComponentMap[name]
  return (
    <div style={{ height: iconSizes[size], width: iconSizes[size] }}>
      <IconComponent fill={colors[color]} />
    </div>
  )
}

export default Icon
