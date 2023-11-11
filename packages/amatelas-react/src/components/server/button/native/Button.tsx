// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'
// import { Progress } from '../..'

import '@okmtyuta/amatelas-theme/v2/color.css'
import '@okmtyuta/amatelas-css/amatelas-button.css'
import { Color } from '@okmtyuta/_amatelas-theme/color'

const CLASS_PREFIX = 'AMUI_amatelas-button_'
const prefixed = (target: string) => {
  return `${CLASS_PREFIX}${target}`
}

type Variant = 'standard' | 'outlined' | 'filled'
type ButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type ButtonProps<T extends ElementType> = {
  as?: T
  width?: Width
  variant?: Variant
  color?: ButtonColor
  loading?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const getVariant = (variant?: Variant) => {
  if (variant) {
    return variant
  }

  return 'outlined'
}
const getColor = (color?: Color) => {
  if (color) {
    return color
  }

  return 'info'
}
const getWidth = (width?: Width) => {
  if (width) {
    return width
  }

  return 'auto'
}

export const Button = <T extends ElementType = 'button'>({
  as,
  width,
  variant,
  color,
  ...props
}: ButtonProps<T>) => {
  const _Button = as ?? 'button'
  const _variant = getVariant(variant)
  const _color = getColor(color)
  const _width = getWidth(width)

  return (
    <_Button
      {...props}
      className={clsx(
        prefixed(''),
        prefixed(_variant),
        prefixed(_color),
        prefixed(_width)
      )}
    >
      {props.children}
    </_Button>
  )
}
