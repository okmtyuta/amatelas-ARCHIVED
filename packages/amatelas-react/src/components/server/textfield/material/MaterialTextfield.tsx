// Refer to https://mui.com/material-ui/react-text-field/

import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'

import '@okmtyuta/awesome-css/reset.css'
import {
  standardMaterialTextfieldPrefixed,
  outlinedMaterialTextfieldPrefixed,
  filledMaterialTextfieldPrefixed
} from '@okmtyuta/_amatelas-theme/prefixed'
import './filled.css'
import './standard.css'
import './outlined.css'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type DefaultInputProps = ComponentProps<'input'>
type TextFiledProps = {
  variant?: Variant
  type?: TextfieldType
  helper?: ReactNode
  validate?: boolean
} & DefaultInputProps

const getPrefixed = (variant?: Variant) => {
  switch (variant) {
    case 'outlined':
      return outlinedMaterialTextfieldPrefixed
    case 'filled':
      return filledMaterialTextfieldPrefixed
    case 'standard':
      return standardMaterialTextfieldPrefixed
    default:
      return standardMaterialTextfieldPrefixed
  }
}

export const MaterialTextField = ({
  variant,
  validate,
  className,
  helper,
  ...props
}: TextFiledProps) => {
  const prefixed = getPrefixed(variant)
  return (
    <>
      <div
        className={clsx({
          [prefixed()]: true,
          [prefixed('validate')]: validate
        })}
      >
        <input
          {...props}
          className={clsx(prefixed('input'), className)}
          placeholder=" "
          type="text"
        />
        <label className={prefixed('placeholder')}>
          {props.required ? `${props.placeholder}*` : props.placeholder}
        </label>

        {variant === 'outlined' ? (
          <span className={prefixed('placeholder-background')}>
            {props.required ? `${props.placeholder}*` : props.placeholder}
          </span>
        ) : null}
      </div>

      <div className={prefixed('helper')}>
        {helper ? (
          <div className={prefixed('helper-text')}>{helper}</div>
        ) : null}
      </div>
    </>
  )
}
