// Refer to https://mui.com/material-ui/react-text-field/

import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'

import '@okmtyuta/awesome-css/reset.css'
import filled from './filled.module.scss'
import standard from './standard.module.scss'
import outlined from './outlined.module.scss'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type DefaultInputProps = ComponentProps<'input'>
type TextfiledProps = {
  variant?: Variant
  type?: TextfieldType
  helper?: ReactNode
  validate?: boolean
  prefix?: string
  suffix?: string
} & DefaultInputProps

const getStyles = (variant?: Variant) => {
  if (variant === 'filled') {
    return filled
  } else if (variant === 'outlined') {
    return outlined
  } else if (variant === 'standard') {
    return standard
  }

  return standard
}

export const Textfield = ({
  variant,
  validate,
  className,
  helper,
  prefix,
  suffix,
  ...props
}: TextfiledProps) => {
  const styles = getStyles(variant)
  return (
    <>
      <div
        className={clsx({
          [styles['text-field']]: true,
          [styles['validate']]: validate
        })}
      >
        <label className={styles['placeholder']}>
          {props.required ? `${props.placeholder}*` : props.placeholder}
        </label>

        <div className={clsx(styles['addon-input'])}>
          {prefix && <span className={clsx(styles['prefix'])}>{prefix}</span>}
          <input
            {...props}
            className={clsx({
              [styles['input']]: true,
              className: !!className,
              [styles['prefixed']]: !!prefix,
              [styles['suffixed']]: !!suffix
            })}
            placeholder=" "
            type="text"
          />
          {suffix && <span className={styles['suffix']}>{suffix}</span>}
        </div>
      </div>

      <div className={styles['helper']}>
        {helper ? <div className={styles['helper-text']}>{helper}</div> : null}
      </div>
    </>
  )
}
