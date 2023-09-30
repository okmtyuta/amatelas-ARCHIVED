import { createElement } from 'react'
import { AlertVariant } from '../Alert'
import {
  AlertErrorSVG,
  AlertInfoSVG,
  AlertSuccessSVG,
  AlertWarningSVG
} from '../alert-parts'
import { clsx } from 'clsx'
import styles from '../alert.module.scss'

export const getAlertSVG = (params: {
  variant?: AlertVariant
  className?: string
}) => {
  const getAlertVariant = (variant?: AlertVariant) => {
    if (variant) {
      return variant
    }
    return 'info'
  }

  const alertVariant = getAlertVariant(params.variant)
  const iconClass = styles[`${alertVariant}-svg`]

  if (alertVariant === 'success') {
    return createElement(AlertSuccessSVG, {
      className: clsx(iconClass, params.className)
    })
  }
  if (alertVariant === 'warning') {
    return createElement(AlertWarningSVG, {
      className: clsx(iconClass, params.className)
    })
  }
  if (alertVariant === 'error') {
    return createElement(AlertErrorSVG, {
      className: clsx(iconClass, params.className)
    })
  }

  return createElement(AlertInfoSVG, {
    className: clsx(iconClass, params.className)
  })
}
