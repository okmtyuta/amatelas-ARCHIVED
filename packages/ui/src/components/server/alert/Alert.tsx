import { clsx } from 'clsx'
import styles from './alert.module.scss'
import { ComponentProps, useId } from 'react'
import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@root/svg'

type AlertVariant = 'info' | 'error' | 'warning' | 'success'
type DefaultDivProps = ComponentProps<'div'>

type AlertProps = {
  variant?: AlertVariant
  label?: string
} & DefaultDivProps

const getVariantClass = (variant?: AlertVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}
const getAlertIcon = (variant?: AlertVariant) => {
  const getAlertVariant = (variant?: AlertVariant) => {
    if (variant) {
      return variant
    }
    return 'info'
  }

  const alertVariant = getAlertVariant(variant)
  const iconClass = styles[`${alertVariant}-icon`]

  if (variant === 'success') {
    return (
      <CheckedCircleSVG className={clsx(styles['label-icon'], iconClass)} />
    )
  }
  if (variant === 'warning') {
    return <WarningSVG className={clsx(styles['label-icon'], iconClass)} />
  }
  if (variant === 'error') {
    return <ErrorSVG className={clsx(styles['label-icon'], iconClass)} />
  }

  return <InfoSVG className={clsx(styles['label-icon'], iconClass)} />
}
const getInputId = (inputId?: string) => {
  if (inputId) {
    return inputId
  }

  // TODO: 一位じゃないので変更が必要
  return useId()
}

export const Alert = ({ variant, label, ...props }: AlertProps) => {
  const variantClass = getVariantClass(variant)
  const alertIcon = getAlertIcon(variant)
  const inputId = getInputId(props.id)

  return (
    <div {...props} className={clsx(styles['alert'], variantClass)}>
      <input className={styles['input']} type="checkbox" id={inputId} />
      <div>
        <div className={styles['label']}>
          {alertIcon}
          <span className={styles['label-content']}>{label}</span>
        </div>
        <div>{props.children}</div>
      </div>
      <span className={styles['close']}>
        <label className={styles['close-label']} htmlFor={inputId}>
          <CloseSVG className={styles['close-icon']} />
        </label>
      </span>
    </div>
  )
}
