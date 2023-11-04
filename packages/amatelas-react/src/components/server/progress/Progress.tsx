// Refer to https://mui.com/material-ui/react-progress/

import { ComponentProps } from 'react'
import styles from './progress.module.scss'
import { clsx } from 'clsx'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Color = 'info' | 'danger' | 'warning' | 'success' | 'text' | 'white'
type DefaultSpanProps = ComponentProps<'span'>
type ProgressProps = {
  color?: Color
  size?: Size
  classNames?: {
    exterior?: string
    circle?: string
  }
} & DefaultSpanProps

const getColor = (color?: Color) => {
  if (color) {
    return color
  }

  return 'text'
}
const getSize = (size?: Size) => {
  if (size) {
    return size
  }

  return 'md'
}

export const Progress = ({
  color,
  size,
  classNames,
  ...props
}: ProgressProps) => {
  const _color = getColor(color)
  const _size = getSize(size)
  return (
    <span
      {...props}
      className={clsx(
        styles['progress'],
        styles[_color],
        styles[_size],
        classNames?.exterior
      )}
    >
      <svg
        className={clsx(styles['svg'], classNames?.circle)}
        viewBox="22 22 44 44"
      >
        <circle
          className={styles['circle']}
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        />
      </svg>
    </span>
  )
}
