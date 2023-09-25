import { ComponentProps, createElement } from 'react'
import styles from './heading.module.scss'
import { clsx } from 'clsx'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

// TODO: h1 - h6?
type DefaultHeadingProps = ComponentProps<'h1'>
type HeadingProps = {
  type?: HeadingType
  center?: boolean
  noMargin?: boolean
} & DefaultHeadingProps

const getHeadingType = (type?: HeadingType) => {
  if (type) {
    return type
  }

  return 'h1'
}

const getCenterClass = (center?: boolean) => {
  if (center) {
    return styles['center']
  }
}
const getMarginClass = (noMargin?: boolean) => {
  if (noMargin) {
    return styles['no-margin']
  }

  return styles['margin']
}

export const Heading = ({ type, center, noMargin, ...props }: HeadingProps) => {
  const h = getHeadingType(type)
  const centerClass = getCenterClass(center)
  const marginClass = getMarginClass(noMargin)

  const heading = createElement(h, {
    ...props,
    className: clsx(styles[h], centerClass, marginClass)
  })

  return heading
}
