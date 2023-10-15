import { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './link.module.scss'
import { clsx } from 'clsx'
import { NorthEastSVG } from '@root/svg'

type Color = 'danger' | 'warning' | 'success' | 'info'
type Hover = {
  underline?: boolean
  color?: Color
}

type LinkProps<T extends ElementType> = {
  tag?: T
  underline?: boolean
  external?: boolean
  color?: Color
  hover?: Hover
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

export const Link = <T extends ElementType = 'a'>({
  tag,
  underline,
  external,
  color,
  hover,
  ...props
}: LinkProps<T>) => {
  const Tag = tag ?? 'a'

  return (
    <Tag
      {...props}
      className={clsx({
        [styles['underline']]: underline,
        [styles['link']]: true,
        [styles['hover-underline']]: hover?.underline,
        [styles['color-danger']]: color === 'danger',
        [styles['color-waring']]: color === 'warning',
        [styles['color-info']]: color === 'info',
        [styles['color-success']]: color === 'success',
        [styles['hover-color-danger']]: hover?.color === 'danger',
        [styles['hover-color-waring']]: hover?.color === 'warning',
        [styles['hover-color-info']]: hover?.color === 'info',
        [styles['hover-color-success']]: hover?.color === 'success',
        [props.className]: true
      })}
    >
      <span>{props.children}</span>
      {external ? (
        <span className={styles['external']}>
          <NorthEastSVG weight={300} className={styles['north-east-svg']} />
        </span>
      ) : null}
    </Tag>
  )
}
