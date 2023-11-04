import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './heading.module.scss'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps<T extends ElementType> = {
  as?: HeadingType
  noMargin?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const getMarginClass = (noMargin?: boolean) => {
  if (noMargin) {
    return styles['no-margin']
  }

  return styles['margin']
}

export const Heading = <T extends ElementType = 'h1'>({
  as,
  className,
  noMargin,
  ...props
}: HeadingProps<T>) => {
  const _H = as ?? 'h1'
  const _marginClass = getMarginClass(noMargin)

  return <_H {...props} className={clsx(className, styles[_H], _marginClass)} />
}
