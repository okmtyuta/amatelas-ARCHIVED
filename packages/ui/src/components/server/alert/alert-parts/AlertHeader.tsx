import { ComponentProps } from 'react'
import styles from '../alert.module.scss'
import { clsx } from 'clsx'

type AlertHeaderProps = ComponentProps<'div'>

export const AlertHeader = ({ className, ...props }: AlertHeaderProps) => {
  return <div {...props} className={clsx(styles['alert-head'], className)} />
}
