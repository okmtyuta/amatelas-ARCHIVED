import { clsx } from 'clsx'
import styles from './client-alert.module.scss'
import { ComponentProps, MouseEventHandler } from 'react'
import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@root/svg'

type ClientAlertVariant = 'info' | 'error' | 'warning' | 'success'
type DefaultDivProps = ComponentProps<'div'>

type ClientAlertProps = {
  variant?: ClientAlertVariant
  label?: string
  onDeleteClick?: MouseEventHandler<SVGSVGElement>
} & DefaultDivProps

const getVariantClass = (variant?: ClientAlertVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}
const getAlertIcon = (variant?: ClientAlertVariant) => {
  const getAlertVariant = (variant?: ClientAlertVariant) => {
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

  // TODO: useID?
  return crypto.randomUUID()
}

export const ClientAlert = ({
  variant,
  label,
  onDeleteClick,
  ...props
}: ClientAlertProps) => {
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
          <CloseSVG onClick={onDeleteClick} className={styles['close-icon']} />
        </label>
      </span>
    </div>
  )
}
