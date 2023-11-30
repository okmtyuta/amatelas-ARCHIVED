// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import '@okmtyuta/amatelas-theme/v2/color.css'
import '@okmtyuta/amatelas-css/amatelas-button.css'
import { Color } from '@root/types'

import { type MaterialButtonVariant } from '@okmtyuta/_amatelas-theme/types'
import { getMaterialButtonPrefixed } from '@okmtyuta/_amatelas-theme/helper'

type MaterialButtonColor = Color
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type MaterialButtonProps<T extends ElementType> = {
  as?: T
  width?: Width
  variant?: MaterialButtonVariant
  color?: MaterialButtonColor
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

export const MaterialButton = <T extends ElementType = 'button'>({
  as,
  width,
  variant,
  color,
  ...props
}: MaterialButtonProps<T>) => {
  const _Button = as ?? 'button'
  const _color = getColor(color)
  const _width = getWidth(width)

  const prefixed = getMaterialButtonPrefixed(variant)

  return (
    <_Button
      {...props}
      className={clsx(prefixed(), prefixed(_color), prefixed(_width))}
    >
      {props.children}
    </_Button>
  )
}
