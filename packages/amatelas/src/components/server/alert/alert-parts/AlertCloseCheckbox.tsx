import { ComponentProps } from 'react'
import styles from '../alert.module.scss'
import { clsx } from 'clsx'

type AlertCloseCheckboxProps = ComponentProps<'input'>

export const AlertCloseCheckbox = ({
  className,
  ...props
}: AlertCloseCheckboxProps) => {
  return (
    <input
      {...props}
      className={clsx(styles['input'], className)}
      type="checkbox"
    />
  )
}
