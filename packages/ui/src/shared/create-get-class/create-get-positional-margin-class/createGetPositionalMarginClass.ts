import { classNames } from '../../classNames'
import {
  DirectionalPositionalMargin,
  PositionalMargin,
  PositionalMarginSize,
  XYPositionalMargin
} from './types'

const isPositionalMarginSize = (
  positionalMargin?: PositionalMargin
): positionalMargin is PositionalMarginSize => {
  const positionalMarginSize = positionalMargin as PositionalMarginSize
  if (
    positionalMarginSize === 'xs' ||
    positionalMarginSize === 'sm' ||
    positionalMarginSize === 'md' ||
    positionalMarginSize === 'lg' ||
    positionalMarginSize === 'xl' ||
    positionalMarginSize === 'none'
  ) {
    return true
  }

  return false
}
const isXYMargin = (
  positionalMargin?: PositionalMargin
): positionalMargin is XYPositionalMargin => {
  const xyMargin = positionalMargin as XYPositionalMargin
  if ('x' in xyMargin || 'y' in xyMargin) {
    return true
  }

  return false
}
const isDirectionalPositionalMargin = (
  positionalMargin?: PositionalMargin
): positionalMargin is DirectionalPositionalMargin => {
  const directionalMargin = positionalMargin as DirectionalPositionalMargin
  if (
    'top' in directionalMargin ||
    'left' in directionalMargin ||
    'bottom' in directionalMargin ||
    'right' in directionalMargin
  ) {
    return true
  }

  return false
}

export const createGetPositionalMarginClass = (
  styles: CSSModuleClasses,
  defaultPositionalMargin?: PositionalMargin
) => {
  const getPositionalMarginClass = (
    inputPositionalMargin?: PositionalMargin
  ) => {
    const positionalMargin = inputPositionalMargin || defaultPositionalMargin

    if (!positionalMargin) {
      return
    }

    if (isPositionalMarginSize(positionalMargin)) {
      return styles[`${positionalMargin}-positional-margin`]
    }

    if (isXYMargin(positionalMargin)) {
      const classes = []
      if (positionalMargin.x) {
        classes.push(styles[`${positionalMargin.x}-positional-margin-x`])
      }
      if (positionalMargin.y) {
        classes.push(styles[`${positionalMargin.y}-positional-margin-y`])
      }
      return classNames(...classes)
    }

    if (isDirectionalPositionalMargin(positionalMargin)) {
      const classes = []
      if (positionalMargin.top) {
        classes.push(styles[`${positionalMargin.top}-positional-margin-top`])
      }
      if (positionalMargin.left) {
        classes.push(styles[`${positionalMargin.left}-positional-margin-left`])
      }
      if (positionalMargin.bottom) {
        classes.push(
          styles[`${positionalMargin.right}-positional-margin-right`]
        )
      }
      if (positionalMargin.right) {
        classes.push(
          styles[`${positionalMargin.bottom}-positional-margin-bottom`]
        )
      }
      return classNames(...classes)
    }
  }

  return getPositionalMarginClass
}
