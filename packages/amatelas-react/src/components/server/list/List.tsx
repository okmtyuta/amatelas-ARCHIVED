import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'
import { DangerousSVG, DiscSVG, DoneSVG } from '@root/svg'

import '@okmtyuta/amatelas-theme/color.css'
import '@okmtyuta/amatelas-css/amatelas-list.css'

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
type MarkerListItemProps = DefaultListItemProps & {
  marker?: ReactNode
}
type ListItemProps = DefaultListItemProps & {
  marker?: Marker
}

const getGap = (gap?: Gap) => {
  if (gap) {
    return `gap-${gap}`
  }

  return 'gap-md'
}
const getMargin = (margin?: Margin) => {
  if (margin) {
    return `margin-${margin}`
  }

  return 'margin-md'
}

const getMarker = (marker?: Marker) => {
  if (marker === 'done') {
    return <DoneSVG className={'done'} />
  }

  if (marker === 'dangerous') {
    return <DangerousSVG className={'dangerous'} />
  }

  return <DiscSVG className={'disc'} />
}

export const List = ({ gap, margin, ...props }: ListProps) => {
  const _gap = getGap(gap)
  const _margin = getMargin(margin)

  return (
    <ul
      {...props}
      className={clsx('amatelas-list', _gap, _margin, props.className)}
    >
      {props.children}
    </ul>
  )
}

export const MarkerListItem = ({ marker, ...props }: MarkerListItemProps) => {
  return (
    <li {...props} className={'amatelas-list-item'}>
      <span className={'marker'}>{marker}</span>
      <span>{props.children}</span>
    </li>
  )
}

export const ListItem = ({ marker, ...props }: ListItemProps) => {
  const _marker = getMarker(marker)
  return (
    <li {...props} className={'amatelas-list-item'}>
      <span className={'marker'}>{_marker}</span>
      <span>{props.children}</span>
    </li>
  )
}
