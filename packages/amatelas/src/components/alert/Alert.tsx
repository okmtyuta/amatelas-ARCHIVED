import { clsx } from 'clsx'
import { ComponentProps, MouseEventHandler, useId } from 'react'
import {
  AlertCloseSVG,
  AlertErrorSVG,
  AlertInfoSVG,
  AlertSuccessSVG,
  AlertWarningSVG
} from './AlertSVG'

import styles from './alert.module.scss'

export type AlertVariant = 'info' | 'error' | 'warning' | 'success'

type DefaultDivProps = ComponentProps<'div'>
type AlertProps = {
  variant?: AlertVariant
  summary?: string
  onDelete?: MouseEventHandler<SVGSVGElement>
} & DefaultDivProps

export const getVariantClass = (variant?: AlertVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}

const getAlertSVG = (params: { variant?: AlertVariant }) => {
  const getAlertVariant = (variant?: AlertVariant) => {
    if (variant) {
      return variant
    }
    return 'info'
  }

  const alertVariant = getAlertVariant(params.variant)
  const iconClass = styles[`${alertVariant}-svg`]

  if (alertVariant === 'success') {
    return <AlertSuccessSVG className={clsx(iconClass)} />
  }
  if (alertVariant === 'warning') {
    return <AlertWarningSVG className={clsx(iconClass)} />
  }
  if (alertVariant === 'error') {
    return <AlertErrorSVG className={clsx(iconClass)} />
  }

  return <AlertInfoSVG className={clsx(iconClass)} />
}

export const Alert = ({ variant, summary, onDelete, ...props }: AlertProps) => {
  const _variantClass = getVariantClass(variant)
  const _alertSVG = getAlertSVG({ variant })
  const _id = useId()

  return (
    <div className={clsx(styles['alert'], _variantClass)}>
      <input className={clsx(styles['input'])} id={_id} type="checkbox" />

      <div className={clsx(styles['alert-head'])}>
        <div className={clsx(styles['summary'])}>
          {_alertSVG}
          <span className={clsx(styles['summary-text'])}>{summary}</span>
        </div>

        <span className={clsx(styles['close'])}>
          <label htmlFor={_id} className={clsx(styles['close-label'])}>
            <AlertCloseSVG onClick={onDelete} />
          </label>
        </span>
      </div>

      {props.children}
    </div>
  )
}
