import styles from './paragraph.module.scss'
import { Typography } from '../typography/Typography'
import { clsx } from 'clsx'
import { ComponentProps } from 'react'

type TypographyProps = ComponentProps<typeof Typography>
type ParagraphProps = {
  noMargin?: boolean
} & TypographyProps

const getNoMarginClass = (noMargin?: boolean) => {
  if (noMargin) {
    return styles['no-margin']
  }

  return styles['margin']
}

export const Paragraph = ({
  children,
  className,
  noMargin,
  ...props
}: ParagraphProps) => {
  const noMarginClass = getNoMarginClass(noMargin)
  return (
    <Typography
      {...props}
      className={clsx(styles['paragraph'], noMarginClass, className)}
      tag="p"
    >
      {children}
    </Typography>
  )
}
