import { ComponentProps, useId } from 'react'
import styles from './radio.module.scss'
import { DangerousSVG, DoneSVG } from '@root/svg'
import clsx from 'clsx'

type DefaultFieldsetProps = ComponentProps<'fieldset'>
type RadioGroupProps = DefaultFieldsetProps

export const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
  return <fieldset {...props} className={clsx(styles['fieldset'], className)} />
}

type DefaultInputProps = ComponentProps<'input'>
type RadioButtonProps = DefaultInputProps

export const RadioButton = ({ children, ...props }: RadioButtonProps) => {
  const _id = useId()
  return (
    <label htmlFor={_id} className={styles['radio']}>
      <input
        {...props}
        className={styles['radio-input']}
        id={_id}
        type="radio"
      />
      <span className={clsx(styles['checked'], styles['marker'])}>
        <DoneSVG />
      </span>
      <span className={clsx(styles['unchecked'], styles['marker'])}>
        <DangerousSVG />
      </span>
      <span className={styles['detail']}>{children}</span>
    </label>
  )
}
