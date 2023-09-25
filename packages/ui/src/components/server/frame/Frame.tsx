import styles from './frame.module.scss'
import { ComponentProps } from 'react'
import { clsx } from 'clsx'
import { Typography } from '../typography/Typography'

type TypographyProps = ComponentProps<typeof Typography>

type FrameWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type FrameProps = {
  width?: FrameWidth
} & TypographyProps

const getWidthClass = (width?: FrameWidth) => {
  if (width) {
    return styles[width]
  }

  return styles['md']
}

export const Frame = ({ children, className, width, ...props }: FrameProps) => {
  const widthClass = getWidthClass(width)
  return (
    <Typography
      {...props}
      tag="div"
      className={clsx(styles['frame'], widthClass, className)}
    >
      {children}
    </Typography>
  )
}
