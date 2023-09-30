import { ComponentProps } from 'react'
import styles from '../alert.module.scss'
import { clsx } from 'clsx'

type AlertCloseLabelProps = ComponentProps<'label'>

export const AlertCloseLabel = ({
  className,
  ...props
}: AlertCloseLabelProps) => {
  return <label {...props} className={clsx(styles['close-label'], className)} />
}
