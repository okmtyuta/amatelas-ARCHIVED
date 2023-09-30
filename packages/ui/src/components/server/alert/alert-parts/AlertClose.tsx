import { ComponentProps } from 'react'
import styles from '../alert.module.scss'
import { clsx } from 'clsx'

type AlertCloseProps = ComponentProps<'span'>

export const AlertClose = ({ className, ...props }: AlertCloseProps) => {
  return <span {...props} className={clsx(styles['close'], className)} />
}
