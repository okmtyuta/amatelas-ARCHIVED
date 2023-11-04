import { ComponentPropsWithoutRef, ElementType } from 'react'

import styles from './typography.module.scss'
import { clsx } from 'clsx'

type FontFamily =
  | 'sans-serif'
  | 'serif'
  | 'sans-serif-jp'
  | 'serif-jp'
  | 'inherit'
type Color =
  | 'text'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'inherit'
  | 'primary'
type FontType =
  | 'title'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline'
  | 'inherit'
type FontSize = FontType
type FontWeight = FontType | 'bold'

type FontStyle = 'italic' | 'oblique'

type TypographyConfig = {
  fontFamily?: FontFamily
  color?: Color
  fontSize?: FontSize
  fontWeight?: FontWeight
  fontStyle?: FontStyle
}

export type TypographyProps<T extends ElementType> = {
  tag?: T
} & Omit<ComponentPropsWithoutRef<T>, 'tag'> &
  TypographyConfig

const getFontFamily = (fontFamily?: FontFamily) => {
  if (fontFamily) {
    return styles[`font-family-${fontFamily}`]
  }

  return undefined
}
const getColor = (color?: Color) => {
  if (color) {
    return styles[`color-${color}`]
  }

  return undefined
}
const getFontSize = (fontSize?: FontSize) => {
  if (fontSize) {
    return styles[`font-size-${fontSize}`]
  }

  return undefined
}
const getFontWeight = (fontWeight?: FontWeight) => {
  if (fontWeight) {
    return styles[`font-weight-${fontWeight}`]
  }

  return undefined
}
const getFontStyle = (fontStyle?: FontStyle) => {
  if (fontStyle) {
    return styles[`font-style-${fontStyle}`]
  }

  return undefined
}

export const Typography = <T extends ElementType = 'span'>({
  tag,
  fontFamily,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  children,
  className,
  ...props
}: TypographyProps<T>) => {
  const Tag = tag ?? 'span'

  const fontFamilyClass = getFontFamily(fontFamily)
  const colorClass = getColor(color)
  const fontSizeClass = getFontSize(fontSize)
  const fontWeightClass = getFontWeight(fontWeight)
  const fontStyleClass = getFontStyle(fontStyle)

  return (
    <Tag
      className={clsx(
        fontFamilyClass,
        colorClass,
        fontSizeClass,
        fontWeightClass,
        fontStyleClass,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
