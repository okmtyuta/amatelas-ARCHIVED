import { ComponentProps } from 'react'
import styles from '../alert.module.scss'
import { clsx } from 'clsx'

type AlertSummaryTextProps = ComponentProps<'span'>

export const AlertSummaryText = ({
  className,
  ...props
}: AlertSummaryTextProps) => {
  return <span {...props} className={clsx(styles['summary-text'], className)} />
}
