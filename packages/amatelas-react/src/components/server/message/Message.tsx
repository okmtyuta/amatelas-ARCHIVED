// Refer to https://mui.com/material-ui/react-alert/

import { ComponentProps } from 'react'
import styles from './message.module.scss'
import { clsx } from 'clsx'
import { CheckedCircleSVG, WarningSVG, ErrorSVG, InfoSVG } from '@root/svg'

type MessageVariant = 'info' | 'success' | 'warning' | 'error'

type DefaultDivProps = ComponentProps<'div'>
type MessageProps = {
  variant?: MessageVariant
  monochrome?: boolean
} & DefaultDivProps

const getMessageVariant = (variant?: MessageVariant) => {
  if (variant) {
    return variant
  }

  return 'info'
}
const getMessageVariantClass = (variant?: MessageVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}
const getMessageIcon = (variant?: MessageVariant) => {
  const messageVariant = getMessageVariant(variant)
  const iconClass = styles[`${messageVariant}-icon`]
  if (variant === 'success') {
    return <CheckedCircleSVG className={clsx(styles['icon-svg'], iconClass)} />
  }
  if (variant === 'warning') {
    return <WarningSVG className={clsx(styles['icon-svg'], iconClass)} />
  }
  if (variant === 'error') {
    return <ErrorSVG className={clsx(styles['icon-svg'], iconClass)} />
  }

  return <InfoSVG className={clsx(styles['icon-svg'], iconClass)} />
}
const getMessageThemeClass = (monochrome?: boolean) => {
  if (monochrome) {
    return styles['monochrome']
  }

  return styles['colorful']
}

export const Message = ({ variant, monochrome, ...props }: MessageProps) => {
  const messageThemeClass = getMessageThemeClass(monochrome)
  const messageVariantClass = getMessageVariantClass(variant)
  const messageIcon = getMessageIcon(variant)
  return (
    <div
      {...props}
      className={clsx(
        styles['message'],
        messageThemeClass,
        messageVariantClass
      )}
    >
      <div className={styles['icon']}>{messageIcon}</div>
      <div className={styles['content']}>{props.children}</div>
    </div>
  )
}
