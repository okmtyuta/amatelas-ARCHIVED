import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'
import { ExpandMoreSVG } from '@root/svg/ExpandMoreSVG'

import './accordion.css'

type DefaultDetailsProps = ComponentProps<'details'>

type AccordionProps = {
  summary: ReactNode
} & DefaultDetailsProps

export const Accordion = ({ summary, ...props }: AccordionProps) => {
  return (
    <details {...props} className={clsx('amatelas-accordion', props.className)}>
      <summary className={clsx('summary')}>
        {summary} <ExpandMoreSVG className={clsx('expand-more-svg')} />
      </summary>
      <div>{props.children}</div>
    </details>
  )
}
