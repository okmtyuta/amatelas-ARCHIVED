import { ComponentProps } from 'react'
import { clsx } from 'clsx'

import '@okmtyuta/amatelas-theme/color.css'
import '@okmtyuta/amatelas-css/amatelas-list.css'

type DefaultListProps = ComponentProps<'ul'>
type ListProps = {
  // ordered?: boolean
} & DefaultListProps

const PREFIX = 'AMUI-components_'
const SUB_PREFIX = 'list_'
const prefixed = (target?: string) => {
  if (target) {
    return `${PREFIX}${SUB_PREFIX}${target}`
  }

  return `${PREFIX}${SUB_PREFIX}`
}

export const List = ({ ...props }: ListProps) => {
  return (
    <ul {...props} className={clsx(prefixed(), props.className)}>
      {props.children}
    </ul>
  )
}
