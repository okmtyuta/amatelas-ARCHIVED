// Refer to https://mui.com/material-ui/react-text-field/

import { ComponentProps, ReactNode, useId } from 'react'
import { clsx } from 'clsx'

import '@okmtyuta/awesome-css/reset.css'
import filled from './filled.module.scss'
import standard from './standard.module.scss'
import outlined from './outlined.module.scss'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type DefaultTextareaProps = ComponentProps<'textarea'>
type TextFiledProps = {
  variant?: Variant
  type?: TextfieldType
  helper?: ReactNode
  validate?: boolean
} & DefaultTextareaProps

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

export const Textarea = ({
  variant,
  validate,
  className,
  helper,
  ...props
}: TextFiledProps) => {
  const styles = getStyles(variant)
  const _id = useId()
  return (
    <div className={className}>
      <label
        className={clsx({
          [styles['text-field']]: true,
          [styles['validate']]: validate
        })}
        htmlFor={_id}
      >
        <textarea
          {...props}
          id={_id}
          className={clsx(styles['input'])}
          placeholder=" "
        />
        <span className={styles['placeholder']}>
          {props.required ? `${props.placeholder}*` : props.placeholder}
        </span>

        {variant === 'outlined' ? (
          <span className={styles['placeholder-background']}>
            {props.required ? `${props.placeholder}*` : props.placeholder}
          </span>
        ) : null}
      </label>

      <div className={styles['helper']}>
        {helper ? <div className={styles['helper-text']}>{helper}</div> : null}
      </div>
    </div>
  )
}
