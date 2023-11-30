// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import '@okmtyuta/amatelas-theme/v2/color.css'
import '@okmtyuta/amatelas-css/amatelas-button.css'
import { Color } from '@root/types/color/Color'
import { type ButtonVariant } from '@okmtyuta/_amatelas-theme/types'

import { getButtonPrefixed } from '@okmtyuta/_amatelas-theme/helper'

type ButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type ButtonProps<T extends ElementType> = {
  as?: T
  width?: Width
  variant?: ButtonVariant
  color?: ButtonColor
  loading?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

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
  const prefixed = getButtonPrefixed(variant)
  const _color = getColor(color)
  const _width = getWidth(width)

  return (
    <_Button
      {...props}
      className={clsx(prefixed(''), prefixed(_color), prefixed(_width))}
    >
      {props.children}
    </_Button>
  )
}
