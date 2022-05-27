import { ButtonOverlayProps } from './ButtonOverlay.types'
import { ButtonLoadingOverlay, ButtonSuccessOverlay } from './components'

const ButtonOverlay: ButtonOverlayProps = {
  Loading: ButtonLoadingOverlay,
  Success: ButtonSuccessOverlay,
}

export { ButtonOverlay }
