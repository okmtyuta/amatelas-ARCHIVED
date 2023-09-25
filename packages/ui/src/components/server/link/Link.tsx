import { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './link.module.scss'
import { clsx } from 'clsx'
import { NorthEastSVG } from '@root/svg'


type LinkProps<T extends ElementType> = {
  tag?: T
  underlined?: boolean
  external?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'> 

const getUnderlineClass = (underlined?: boolean) => {
  if (underlined) {
    return styles['underline']
  }
}

export const Link = <T extends ElementType = 'a'>({
  tag,
  underlined,
  external,
  ...props
}: LinkProps<T>) => {
  const Tag = tag ?? 'a'
  const underlineClass = getUnderlineClass(underlined)
  return (
    <Tag
      {...props}
      className={clsx(underlineClass, styles['link'], props.className)}
    >
      <span>{props.children}</span>{' '}
      {external ? <NorthEastSVG className={styles['north-east-svg']} /> : null}
    </Tag>
  )
}
