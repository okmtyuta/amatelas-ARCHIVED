import { ComponentProps } from 'react'
import styles from '../alert.module.scss'
import { clsx } from 'clsx'

type AlertSummaryProps = ComponentProps<'div'>

export const AlertSummary = ({ className, ...props }: AlertSummaryProps) => {
  return <div {...props} className={clsx(styles['summary'], className)} />
}
