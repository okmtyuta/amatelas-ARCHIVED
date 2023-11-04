import { ComponentProps } from 'react'

import './blockquote.css'

type DefaultBlockquoteProps = ComponentProps<'blockquote'>
type BlockquoteProps = DefaultBlockquoteProps

export const Blockquote = ({ ...props }: BlockquoteProps) => {
  return (
    <blockquote {...props} className={'blockquote'}>
      {props.children}
    </blockquote>
  )
}
