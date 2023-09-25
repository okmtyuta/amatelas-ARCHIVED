// Refer to https://mui.com/material-ui/react-chip/

import { ComponentProps } from 'react'
import styles from './chip.module.scss'
import { clsx } from 'clsx'

type Variant = 'filled' | 'outlined'
type Color = 'text' | 'danger' | 'info' | 'success' | 'warning'

type DefaultSpanProps = ComponentProps<'span'>

type ChipProps = {
  variant?: Variant
  color?: Color
  shade?: boolean
} & DefaultSpanProps

const getVariantClass = (variant?: Variant) => {
  if (variant) {
    return styles[`${variant}-chip`]
  }

  return styles['outlined-chip']
}
const getColorClass = (color?: Color) => {
  if (color) {
    return styles[color]
  }

  return styles['text']
}
const getShadeClass = (shade?: boolean) => {
  if (shade) {
    return styles['shade']
  }

  return ''
}

export const Chip = ({ variant, color, shade, ...props }: ChipProps) => {
  const variantClass = getVariantClass(variant)
  const colorClass = getColorClass(color)
  const shadeClass = getShadeClass(shade)
  return (
    <span
      {...props}
      className={clsx(styles['chip'], variantClass, colorClass, shadeClass)}
    >
      <span className={styles['text']}>{props.children}</span>
    </span>
  )
}
