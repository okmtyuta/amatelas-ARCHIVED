import { ComponentProps } from 'react'
import { clsx } from 'clsx'

import '@okmtyuta/amatelas-theme/color.css'
import './highlight.css'

type Color = 'info' | 'success' | 'danger' | 'warning'

type DefaultSpanProps = ComponentProps<'span'>
type HighlightProps = {
  color?: Color
} & DefaultSpanProps

const getColor = (color?: Color) => {
  if (color) {
    return color
  }

  return 'info'
}

export const Highlight = ({ color, ...props }: HighlightProps) => {
  const colorClass = getColor(color)

  return (
    <span {...props} className={clsx('amatelas-highlight', colorClass)}>
      {props.children}
    </span>
  )
}
