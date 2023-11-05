// Refer to https://mui.com/material-ui/react-chip/

import { ComponentPropsWithoutRef, ElementType } from 'react'
import { clsx } from 'clsx'

import '@okmtyuta/amatelas-theme/color.css'
import '@okmtyuta/amatelas-css/amatelas-chip.css'

type Variant = 'filled' | 'outlined'
type Color = 'danger' | 'info' | 'success' | 'warning'

type MaterialChipProps<T extends ElementType> = {
  as?: T
  variant?: Variant
  color?: Color
  shade?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const getVariant = (variant?: Variant) => {
  if (variant) {
    return `${variant}`
  }

  return 'outlined'
}
const getColor = (color?: Color) => {
  if (color) {
    return color
  }

  return 'info'
}

export const MaterialChip = <T extends ElementType = 'span'>({
  as,
  variant,
  color,
  ...props
}: MaterialChipProps<T>) => {
  const _Chip = as ?? 'span'
  const _variant = getVariant(variant)
  const _color = getColor(color)
  return (
    <_Chip
      {...props}
      className={clsx('amatelas-material-chip', _variant, _color)}
    >
      <span className="text">{props.children}</span>
    </_Chip>
  )
}
