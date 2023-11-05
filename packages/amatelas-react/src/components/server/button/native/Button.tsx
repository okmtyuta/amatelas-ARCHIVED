// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { Progress } from '../..'

import '@okmtyuta/amatelas-theme/color.css'
import '@okmtyuta/amatelas-css/amatelas-button.css'

const CLASS_PREFIX = 'AMUI_amatelas-button_'
const prefixed = (target: string) => {
  return `${CLASS_PREFIX}${target}`
}

type Variant = 'standard' | 'outlined' | 'filled'
type Color = 'danger' | 'info' | 'success' | 'warning'
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

export type ButtonProps<T extends ElementType> = {
  as?: T
  width?: Width
  variant?: Variant
  color?: Color
  loading?: boolean
  spinner?: ReactNode
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
const getSpinner = (color: Color, variant: Variant, spinner?: ReactNode) => {
  if (spinner) {
    return spinner
  }

  if (variant === 'filled') {
    return <Progress size="xs" color="white" />
  }

  return <Progress size="xs" color={color} />
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
  loading,
  spinner,
  ...props
}: ButtonProps<T>) => {
  const _Button = as ?? 'button'
  const _variant = getVariant(variant)
  const _color = getColor(color)
  const _spinner = getSpinner(_color, _variant, spinner)
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
      {loading ? _spinner : <></>}
      {props.children}
    </_Button>
  )
}