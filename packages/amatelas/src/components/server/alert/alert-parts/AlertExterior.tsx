import { ComponentProps } from 'react'
import styles from '../alert.module.scss'
import { clsx } from 'clsx'

type AlertExteriorProps = ComponentProps<'div'>

export const AlertExterior = ({ className, ...props }: AlertExteriorProps) => {
  return <div {...props} className={clsx(styles['alert'], className)}></div>
}
