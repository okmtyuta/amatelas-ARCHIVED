// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import '@okmtyuta/amatelas-theme/v2/color.css'
import '@okmtyuta/amatelas-css/amatelas-button.css'
import { Color } from '@root/types'

type Variant = 'standard' | 'outlined' | 'filled'
type MaterialButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

const CLASS_PREFIX = 'AMUI_amatelas-material-button_'
const prefixed = (target: string) => {
  return `${CLASS_PREFIX}${target}`
}

export type MaterialButtonProps<T extends ElementType> = {
  as?: T
  width?: Width
  variant?: Variant
  color?: MaterialButtonColor
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

export const MaterialButton = <T extends ElementType = 'button'>({
  as,
  width,
  variant,
  color,
  ...props
}: MaterialButtonProps<T>) => {
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
