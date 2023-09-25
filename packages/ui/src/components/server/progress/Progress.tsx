// Refer to https://mui.com/material-ui/react-progress/

import { ComponentProps } from 'react'
import styles from './progress.module.scss'
import { clsx } from 'clsx'

type ProgressVariant = 'info' | 'danger' | 'warning' | 'success'

type DefaultSpanProps = ComponentProps<'span'>
type ProgressProps = {
  variant?: ProgressVariant
} & DefaultSpanProps

const getProgressVariantClass = (variant?: ProgressVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}

export const Progress = ({ variant, ...props }: ProgressProps) => {
  const progressVariantClass = getProgressVariantClass(variant)

  return (
    <span {...props} className={clsx(styles['progress'], progressVariantClass)}>
      <svg className={styles['svg']} viewBox="22 22 44 44">
        <circle
          className={styles['circle']}
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        ></circle>
      </svg>
    </span>
  )
}
