// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import styles from './button.module.scss'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { Progress } from '../progress'

type Variant = 'standard' | 'outlined' | 'filled'
type Color = 'text' | 'danger' | 'info' | 'success' | 'warning'
type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | "auto" | "half" | "quarter"

export type ButtonProps<T extends ElementType> = {
  as?: T
  width?: Width
  variant?: Variant
  color?: Color
  shade?: boolean
  loading?: boolean
  spinner?: ReactNode
  classNames?: {
    exterior?: string
  }
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

  return 'text'
}
const getShadeClass = (shade?: boolean) => {
  if (shade) {
    return styles['shade']
  }

  return ''
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
const getWidthClass = (width?: Width) => {
  if (width) {
    return styles[width]
  }

  return styles['auto']
}

export const Button = <T extends ElementType = 'button'>({
  as,
  width,
  variant,
  color,
  shade,
  loading,
  spinner,
  classNames,
  ...props
}: ButtonProps<T>) => {
  const _Button = as ?? 'button'
  const _variant = getVariant(variant)
  const _color = getColor(color)
  const _shadeClass = getShadeClass(shade)
  const _spinner = getSpinner(_color, _variant, spinner)
  const _widthClass = getWidthClass(width)

  return (
    <_Button
      {...props}
      className={clsx(
        styles['button'],
        styles[_variant],
        styles[_color],
        _widthClass,
        _shadeClass,
        classNames?.exterior
      )}
    >
      {loading ? _spinner : <></>}
      {props.children}
    </_Button>
  )
}
