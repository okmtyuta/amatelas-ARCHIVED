import { classNames } from '../../classNames'
import { Margin, MarginSize, XYMargin, DirectionalMargin } from './types'

export const isMarginSize = (margin?: Margin): margin is MarginSize => {
  const marginSize = margin as MarginSize
  if (
    marginSize === 'xs' ||
    marginSize === 'sm' ||
    marginSize === 'md' ||
    marginSize === 'lg' ||
    marginSize === 'xl' ||
    marginSize === 'none'
  ) {
    return true
  }

  return false
}
export const isXYMargin = (margin?: Margin): margin is XYMargin => {
  const xyMargin = margin as XYMargin
  if ('x' in xyMargin || 'y' in xyMargin) {
    return true
  }

  // empty ok
  if (Object.keys(xyMargin).length === 0) {
    return true
  }

  return false
}
export const isDirectionalMargin = (
  margin?: Margin
): margin is DirectionalMargin => {
  const directionalMargin = margin as DirectionalMargin
  if (
    'top' in directionalMargin ||
    'left' in directionalMargin ||
    'bottom' in directionalMargin ||
    'right' in directionalMargin
  ) {
    return true
  }

  // empty ok
  if (Object.keys(directionalMargin).length === 0) {
    return true
  }

  return false
}

export const createGetMarginClass = (
  styles: CSSModuleClasses,
  defaultMargin?: Margin
) => {
  const getMarginClass = (inputMargin?: Margin) => {
    const margin = inputMargin || defaultMargin

    if (!margin) {
      return
    }

    if (isMarginSize(margin)) {
      return styles[`${margin}-margin`]
    }

    if (isXYMargin(margin)) {
      const classes = []
      if (margin.x) {
        classes.push(styles[`${margin.x}-margin-x`])
      }
      if (margin.y) {
        classes.push(styles[`${margin.y}-margin-y`])
      }
      return classNames(...classes)
    }

    if (isDirectionalMargin(margin)) {
      const classes = []
      if (margin.top) {
        classes.push(styles[`${margin.top}-margin-top`])
      }
      if (margin.left) {
        classes.push(styles[`${margin.left}-margin-left`])
      }
      if (margin.bottom) {
        classes.push(styles[`${margin.right}-margin-right`])
      }
      if (margin.right) {
        classes.push(styles[`${margin.bottom}-margin-bottom`])
      }
      return classNames(...classes)
    }
  }

  return getMarginClass
}
