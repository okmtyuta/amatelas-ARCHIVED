// Refer to https://mui.com/material-ui/react-snackbar/

import { ComponentProps } from 'react'
import { clsx } from 'clsx'
import styles from './snack.module.scss'
import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@root/svg'

type SnackVariant = 'info' | 'error' | 'warning' | 'success'
type SnackPosition = 'top' | 'bottom' | 'left' | 'right'

type DefaultDivProps = ComponentProps<'div'>
type SnackProps = {
  variant?: SnackVariant
  // label?: string
  position?: SnackPosition
} & DefaultDivProps

const getVariantClass = (variant?: SnackVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}
const getSnackIcon = (variant?: SnackVariant) => {
  const getSnackVariant = (variant?: SnackVariant) => {
    if (variant) {
      return variant
    }
    return 'info'
  }

  const snackVariant = getSnackVariant(variant)
  const iconClass = styles[`${snackVariant}-icon`]

  if (variant === 'success') {
    return (
      <CheckedCircleSVG className={clsx(styles['snack-icon'], iconClass)} />
    )
  }
  if (variant === 'warning') {
    return <WarningSVG className={clsx(styles['snack-icon'], iconClass)} />
  }
  if (variant === 'error') {
    return <ErrorSVG className={clsx(styles['snack-icon'], iconClass)} />
  }

  return <InfoSVG className={clsx(styles['snack-icon'], iconClass)} />
}
const getInputId = (inputId?: string) => {
  if (inputId) {
    return inputId
  }

  return crypto.randomUUID()
}
const getPositionClass = (position?: SnackPosition) => {
  if (position) {
    return styles[`position-${position}`]
  }

  return styles['position-top']
}

export const Snack = ({ variant, position, ...props }: SnackProps) => {
  const variantClass = getVariantClass(variant)
  const snackIcon = getSnackIcon(variant)

  // TODO: id
  const inputId = getInputId(props.id)
  const positionClass = getPositionClass(position)

  return (
    <div
      {...props}
      className={clsx(styles['snack'], variantClass, positionClass)}
    >
      <input className={styles['input']} type="checkbox" id={inputId} />
      {snackIcon}
      <div>{props.children}</div>
      <label className={styles['close-icon']} htmlFor={inputId}>
        <CloseSVG />
      </label>
    </div>
  )
}
