import { ComponentProps } from 'react'
import styles from './highlight.module.scss'
import { clsx } from 'clsx'

type Color =
  | 'info'
  | 'success'
  | 'danger'
  | 'warning'
  | 'text'
  | 'primary'
  | 'secondary'
  | 'tertiary'

type DefaultSpanProps = ComponentProps<'span'>
type HighlightProps = {
  color?: Color
} & DefaultSpanProps

const getColorClass = (color?: Color) => {
  if (color) {
    return styles[color]
  }

  return styles['primary']
}

export const Highlight = ({ color, ...props }: HighlightProps) => {
  const colorClass = getColorClass(color)

  return (
    <span {...props} className={clsx(styles.highlight, colorClass)}>
      {props.children}
    </span>
  )
}
