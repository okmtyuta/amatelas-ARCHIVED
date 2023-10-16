import { ComponentProps } from 'react'
import styles from './blockquote.module.scss'

type DefaultBlockquoteProps = ComponentProps<'blockquote'>
type BlockquoteProps = DefaultBlockquoteProps

export const Blockquote = ({ ...props }: BlockquoteProps) => {
  return (
    <blockquote {...props} className={styles['blockquote']}>
      {props.children}
    </blockquote>
  )
}
