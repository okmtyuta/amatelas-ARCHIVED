import { ComponentProps, ReactNode } from 'react'
import styles from './accordion.module.scss'
import { clsx } from 'clsx'
import { ExpandMoreSVG } from '@root/svg/ExpandMoreSVG'

type DefaultDetailsProps = ComponentProps<'details'>

type AccordionProps = {
  summary: ReactNode
} & DefaultDetailsProps

export const Accordion = ({ summary, ...props }: AccordionProps) => {
  return (
    <details {...props} className={clsx(styles['accordion'], props.className)}>
      <summary className={clsx(styles['summary'])}>
        {summary} <ExpandMoreSVG className={clsx(styles['expand-more-svg'])} />
      </summary>
      <div>{props.children}</div>
    </details>
  )
}
