import { ComponentProps, useId } from 'react'
import styles from './checkbox.module.scss'
import { DangerousSVG, DoneSVG } from '@root/svg'
import clsx from 'clsx'

type DefaultFieldsetProps = ComponentProps<'fieldset'>
type CheckboxGroupProps = DefaultFieldsetProps

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  return <fieldset {...props} />
}

type DefaultInputProps = ComponentProps<'input'>
type CheckboxProps = DefaultInputProps

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  const _id = useId()
  return (
    <label htmlFor={_id} className={styles['checkbox']}>
      <input
        {...props}
        className={styles['checkbox-input']}
        id={_id}
        type="checkbox"
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
