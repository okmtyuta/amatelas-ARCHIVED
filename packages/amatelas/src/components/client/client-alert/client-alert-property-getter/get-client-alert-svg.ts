import { createElement } from 'react'
import { ClientAlertVariant } from '../ClientAlert'
import {
  ClientAlertErrorSVG,
  ClientAlertSuccessSVG,
  ClientAlertWarningSVG,
  ClientAlertInfoSVG
} from '../client-alert-parts'

export const getClientAlertSVG = (variant?: ClientAlertVariant) => {
  switch (variant) {
    case 'error':
      return createElement(ClientAlertErrorSVG)
    case 'success':
      return createElement(ClientAlertSuccessSVG)
    case 'warning':
      return createElement(ClientAlertWarningSVG)
    default:
      return createElement(ClientAlertInfoSVG)
  }
}
