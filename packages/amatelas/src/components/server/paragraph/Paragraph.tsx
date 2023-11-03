import styles from './paragraph.module.scss'

import { clsx } from 'clsx'
import { ComponentProps } from 'react'

type DefaultParagraphProps = ComponentProps<'p'>
type ParagraphProps = {
  noMargin?: boolean
} & DefaultParagraphProps

const getNoMarginClass = (noMargin?: boolean) => {
  if (noMargin) {
    return styles['no-margin']
  }

  return styles['margin']
}

export const Paragraph = ({ noMargin, ...props }: ParagraphProps) => {
  const noMarginClass = getNoMarginClass(noMargin)
  return (
    <p
      {...props}
      className={clsx(styles['paragraph'], noMarginClass, props.className)}
    >
      {props.children}
    </p>
  )
}
