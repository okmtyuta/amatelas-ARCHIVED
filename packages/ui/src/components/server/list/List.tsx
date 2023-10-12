import { ComponentProps } from 'react'
import styles from './list.module.scss'
import { clsx } from 'clsx'
import { DangerousSVG, DiscSVG, DoneSVG } from '@root/svg'

type Gap = 'xs' | 'md' | 'xl'
type Margin = 'xs' | 'md' | 'xl'
type MarkerType = 'done' | 'dangerous'
type Marker = MarkerType

type DefaultListProps = ComponentProps<'ul'>
type ListProps = {
  // ordered?: boolean
  gap?: Gap
  margin?: Margin
} & DefaultListProps

type DefaultListItemProps = ComponentProps<'li'>
type ListItemProps = DefaultListItemProps & {
  marker?: Marker
}

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

const getMarker = (marker?: Marker) => {
  if (marker === 'done') {
    return <DoneSVG className={styles['done']} />
  }

  if (marker === 'dangerous') {
    return <DangerousSVG className={styles['dangerous']} />
  }

  return <DiscSVG className={styles['disc']} />
}

export const ListItem = ({ marker, ...props }: ListItemProps) => {
  const _marker = getMarker(marker)
  return (
    <li {...props} className={styles['list-item']}>
      <span className={styles['marker']}>{_marker}</span>
      <span>{props.children}</span>
    </li>
  )
}
