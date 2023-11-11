import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'
import { ExpandMoreSVG } from '@root/svg/ExpandMoreSVG'

import './accordion.css'
import { accordionPrefixed } from '@okmtyuta/_amatelas-theme/prefixed'

type DefaultDetailsProps = ComponentProps<'details'>

type AccordionProps = {
  summary: ReactNode
} & DefaultDetailsProps

export const Accordion = ({ summary, ...props }: AccordionProps) => {
  return (
    <details {...props} className={clsx(accordionPrefixed(), props.className)}>
      <summary className={clsx(accordionPrefixed('summary'))}>
        {summary}{' '}
        <ExpandMoreSVG className={clsx(accordionPrefixed('expand-more-svg'))} />
      </summary>
      <div>{props.children}</div>
    </details>
  )
}
