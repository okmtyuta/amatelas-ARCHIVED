import { ComponentProps } from 'react'
import styles from './sticky.module.scss'
import { clsx } from 'clsx'

type StickyPosition = 'top' | 'bottom' | 'left' | 'right'
type DefaultDivProps = ComponentProps<'div'>
type StickyProps = {
  position?: StickyPosition
} & DefaultDivProps

const getPositionClass = (position?: StickyPosition) => {
  if (position) {
    return styles[`position-${position}`]
  }

  return styles['position-top']
}

export const Sticky = ({ position, ...props }: StickyProps) => {
  const positionClass = getPositionClass(position)

  return (
    <div
      {...props}
      className={clsx(styles['sticky'], positionClass, props.className)}
    >
      {props.children}
    </div>
  )
}
