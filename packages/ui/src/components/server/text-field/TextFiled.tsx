// Refer to https://mui.com/material-ui/react-text-field/

import { ComponentProps } from 'react'
import { clsx } from 'clsx'

import filled from './filled.module.scss'
import standard from './standard.module.scss'
import outlined from './outlined.module.scss'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type DefaultInputProps = ComponentProps<'input'>
type TextFiledProps = {
  variant?: Variant
  type?: TextfieldType
  helper?: string
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

export const TextField = ({ variant, ...props }: TextFiledProps) => {
  const styles = getStyles(variant)
  return (
    <div className={clsx(styles['text-field'])}>
      <input className={clsx(styles['input'])} placeholder=" " type="text" />
      <label className={styles['placeholder']}>{props.placeholder}</label>

      {variant === 'outlined' ? (
        <span className={styles['placeholder-background']}>
          {props.placeholder}
        </span>
      ) : null}
    </div>
  )
}
