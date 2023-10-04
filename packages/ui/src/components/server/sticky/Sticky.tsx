import { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './sticky.module.scss'
import { clsx } from 'clsx'

type Position = 'top' | 'bottom' | 'left' | 'right'
export type StickyProps<T extends ElementType> = {
  as?: T
  position?: Position
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

const getPosition = (position?: Position) => {
  if (position) {
    return position
  }

  return 'top'
}

export const Sticky = <T extends ElementType = 'div'>({
  as,
  position,
  ...props
}: StickyProps<T>) => {
  const _Tag = as ?? 'div'
  const _position = getPosition(position)

  return (
    <_Tag
      {...props}
      className={clsx(styles['sticky'], styles[_position], props.className)}
    />
  )
}
