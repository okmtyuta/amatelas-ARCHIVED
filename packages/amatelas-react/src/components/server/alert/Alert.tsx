import { clsx } from 'clsx'
import { ComponentProps, MouseEventHandler, useId } from 'react'
import {
  AlertCloseSVG,
  AlertErrorSVG,
  AlertInfoSVG,
  AlertSuccessSVG,
  AlertWarningSVG
} from './AlertSVG'

import '@okmtyuta/amatelas-theme/color.css'
import './alert.css'

export type AlertVariant = 'info' | 'danger' | 'warning' | 'success'

type DefaultDivProps = ComponentProps<'div'>
type AlertProps = {
  variant?: AlertVariant
  summary?: string
  onDelete?: MouseEventHandler<SVGSVGElement>
} & DefaultDivProps

export const getVariant = (variant?: AlertVariant) => {
  if (variant) {
    return variant
  }

  return 'info'
}

const getAlertSVG = (params: { variant?: AlertVariant }) => {
  const alertVariant = getVariant(params.variant)

  if (alertVariant === 'success') {
    return <AlertSuccessSVG />
  }
  if (alertVariant === 'warning') {
    return <AlertWarningSVG />
  }
  if (alertVariant === 'danger') {
    return <AlertErrorSVG />
  }

  return <AlertInfoSVG />
}

export const Alert = ({ variant, summary, onDelete, ...props }: AlertProps) => {
  const _variant = getVariant(variant)
  const _alertSVG = getAlertSVG({ variant })
  const _id = useId()

  return (
    <div className={clsx('amatelas-alert', _variant)}>
      <input className={clsx('input')} id={_id} type="checkbox" />

      <div className={clsx('alert-head')}>
        <div className={clsx('summary')}>
          {_alertSVG}
          <span className={clsx('summary-text')}>{summary}</span>
        </div>

        <span className={clsx('close')}>
          <label htmlFor={_id} className={clsx('close-label')}>
            <AlertCloseSVG onClick={onDelete} />
          </label>
        </span>
      </div>

      {props.children}
    </div>
  )
}
