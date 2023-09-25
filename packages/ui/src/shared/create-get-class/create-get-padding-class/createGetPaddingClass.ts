import { classNames } from '../../classNames'
import { Padding, PaddingSize, XYPadding, DirectionalPadding } from './types'

const isPaddingSize = (padding?: Padding): padding is PaddingSize => {
  const paddingSize = padding as PaddingSize
  if (
    paddingSize === 'xs' ||
    paddingSize === 'sm' ||
    paddingSize === 'md' ||
    paddingSize === 'lg' ||
    paddingSize === 'xl' ||
    paddingSize === 'none'
  ) {
    return true
  }

  return false
}
const isXYPadding = (padding?: Padding): padding is XYPadding => {
  const xyPadding = padding as XYPadding
  if ('x' in xyPadding || 'y' in xyPadding) {
    return true
  }

  return false
}
const isDirectionalPadding = (
  padding?: Padding
): padding is DirectionalPadding => {
  const directionalPadding = padding as DirectionalPadding
  if (
    'top' in directionalPadding ||
    'left' in directionalPadding ||
    'bottom' in directionalPadding ||
    'right' in directionalPadding
  ) {
    return true
  }

  return false
}

export const createGetPaddingClass = (
  styles: CSSModuleClasses,
  defaultPadding?: Padding
) => {
  const getPaddingClass = (inputPadding?: Padding) => {
    const padding = inputPadding || defaultPadding

    if (!padding) {
      return
    }

    if (isPaddingSize(padding)) {
      return styles[`${padding}-padding`]
    }

    if (isXYPadding(padding)) {
      const classes = []
      if (padding.x) {
        classes.push(styles[`${padding.x}-padding-x`])
      }
      if (padding.y) {
        classes.push(styles[`${padding.y}-padding-y`])
      }
      return classNames(...classes)
    }

    if (isDirectionalPadding(padding)) {
      const classes = []
      if (padding.top) {
        classes.push(styles[`${padding.top}-padding-top`])
      }
      if (padding.left) {
        classes.push(styles[`${padding.left}-padding-left`])
      }
      if (padding.bottom) {
        classes.push(styles[`${padding.right}-padding-right`])
      }
      if (padding.right) {
        classes.push(styles[`${padding.bottom}-padding-bottom`])
      }
      return classNames(...classes)
    }
  }

  return getPaddingClass
}
