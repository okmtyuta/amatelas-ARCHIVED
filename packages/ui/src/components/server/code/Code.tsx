import { ComponentProps } from 'react'

type DefaultCodeProps = ComponentProps<'code'>
type CodeProps = DefaultCodeProps

export const Code = ({ ...props }: CodeProps) => {
  return <code {...props}>{props.children}</code>
}
