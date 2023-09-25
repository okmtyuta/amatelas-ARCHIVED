import { ComponentProps, ReactNode } from 'react'
import styles from './accordion.module.scss'
import { clsx } from 'clsx'
import { ExpandMoreSVG } from '@root/svg/ExpandMoreSVG'

type DefaultDetailsProps = ComponentProps<'details'>

interface AccordionProps extends DefaultDetailsProps {
  summary: ReactNode
  classNames?: {
    root?: string
    summary?: string
    content?: string
  }
}

export const Accordion = ({
  summary,
  children,
  classNames,
  ...props
}: AccordionProps) => {
  return (
    <details
      {...props}
      className={clsx(styles['accordion'], props.className, classNames?.root)}
    >
      <summary className={clsx(styles['summary'], classNames?.summary)}>
        {summary}{' '}
        <ExpandMoreSVG
          className={clsx(styles['expand-more-svg'], classNames?.content)}
        />
      </summary>
      <div>{children}</div>
    </details>
  )
}
