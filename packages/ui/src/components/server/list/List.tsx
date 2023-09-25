import { ComponentProps } from 'react'
import styles from './list.module.scss'
import { clsx } from 'clsx'

type Gap = 'xs' | 'md' | 'xl'
type Margin = 'xs' | 'md' | 'xl'

type DefaultListProps = ComponentProps<'ul'>
type ListProps = {
  // ordered?: boolean
  gap?: Gap
  margin?: Margin
} & DefaultListProps

type DefaultListItemProps = ComponentProps<'li'>
type ListItemProps = DefaultListItemProps

const getGapClass = (gap?: Gap) => {
  if (gap) {
    return styles[`gap-${gap}`]
  }

  return styles['gap-md']
}
const getMarginClass = (margin?: Margin) => {
  if (margin) {
    return styles[`margin-${margin}`]
  }

  return styles['margin-md']
}

export const List = ({ gap, margin, ...props }: ListProps) => {
  const gapClass = getGapClass(gap)
  const marginClass = getMarginClass(margin)
  // TODO: ol
  // if (ordered) {
  //   return (
  //     <ol
  //       {...props}
  //       className={clsx(
  //         styles['list'],
  //         styles['ordered'],
  //         gapClass,
  //         marginClass,
  //         props.className
  //       )}
  //     >
  //       {props.children}
  //     </ol>
  //   )
  // }
  return (
    <ul
      {...props}
      className={clsx(
        styles['list'],
        styles['unordered'],
        gapClass,
        marginClass
      )}
    >
      {props.children}
    </ul>
  )
}

export const ListItem = ({ ...props }: ListItemProps) => {
  return (
    <li {...props} className={styles['list-item']}>
      {props.children}
    </li>
  )
}
