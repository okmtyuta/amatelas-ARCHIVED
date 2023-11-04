import { ComponentProps } from 'react'
import { clsx } from 'clsx'

import './frame.css'

type FrameWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type DefaultDivProps = ComponentProps<'div'>
type FrameProps = {
  width?: FrameWidth
} & DefaultDivProps

const getWidth = (width?: FrameWidth) => {
  if (width) {
    return width
  }

  return 'md'
}

export const Frame = ({ width, ...props }: FrameProps) => {
  const widthClass = getWidth(width)
  return (
    <div
      {...props}
      className={clsx('amatelas-frame', widthClass, props.className)}
    >
      {props.children}
    </div>
  )
}
