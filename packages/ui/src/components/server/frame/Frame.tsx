import styles from './frame.module.scss'
import { ComponentProps } from 'react'
import { clsx } from 'clsx'

type FrameWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type DefaultDivProps = ComponentProps<'div'>
type FrameProps = {
  width?: FrameWidth
} & DefaultDivProps

const getWidthClass = (width?: FrameWidth) => {
  if (width) {
    return styles[width]
  }

  return styles['md']
}

export const Frame = ({ width, ...props }: FrameProps) => {
  const widthClass = getWidthClass(width)
  return (
    <div
      {...props}
      className={clsx(styles['frame'], widthClass, props.className)}
    >
      {props.children}
    </div>
  )
}
