import { ComponentProps, useId } from 'react'
import styles from './switch.module.scss'
import clsx from 'clsx'

type Color = 'danger' | 'info' | 'success' | 'warning'
type DefaultInputProps = ComponentProps<'input'>

type SwitchProps = {
  color?: Color
} & DefaultInputProps

export const Switch = ({ color, ...props }: SwitchProps) => {
  const _id = useId()
  return (
    <span
      className={clsx({
        [styles['switch']]: true,
        [styles['info']]: color === 'info' || !color,
        [styles['warning']]: color === 'warning',
        [styles['danger']]: color === 'danger',
        [styles['success']]: color === 'success'
      })}
    >
      <input
        {...props}
        id={_id}
        className={clsx({
          [styles['switch-input']]: true
        })}
        type="checkbox"
      />
      <label htmlFor={_id} className={styles['switch-ball']} />
      <label htmlFor={_id} className={styles['switch-bar']} />
    </span>
  )
}
