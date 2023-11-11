import { ComponentProps, ReactNode } from 'react'
import { DangerousSVG, DiscSVG, DoneSVG } from '@root/svg'

import '@okmtyuta/amatelas-theme/color.css'
import '@okmtyuta/amatelas-css/amatelas-list.css'

type MarkerType = 'done' | 'dangerous'
type Marker = MarkerType

type DefaultListItemProps = ComponentProps<'li'>
type MarkerListItemProps = DefaultListItemProps & {
  marker?: ReactNode
}
type ListItemProps = DefaultListItemProps & {
  marker?: Marker
}

const PREFIX = 'AMUI-components_'
const SUB_PREFIX = 'list-item_'
const prefixed = (target?: string) => {
  if (target) {
    return `${PREFIX}${SUB_PREFIX}${target}`
  }

  return `${PREFIX}${SUB_PREFIX}`
}

const getMarker = (marker?: Marker) => {
  if (marker === 'done') {
    return <DoneSVG className={prefixed('done')} />
  }

  if (marker === 'dangerous') {
    return <DangerousSVG className={prefixed('dangerous')} />
  }

  return <DiscSVG className={prefixed('disc')} />
}

export const MarkerListItem = ({ marker, ...props }: MarkerListItemProps) => {
  return (
    <li {...props} className={prefixed()}>
      <span className={prefixed('marker')}>{marker}</span>
      <span>{props.children}</span>
    </li>
  )
}

export const ListItem = ({ marker, ...props }: ListItemProps) => {
  const _marker = getMarker(marker)
  return (
    <li {...props} className={prefixed()}>
      <span className={prefixed('marker')}>{_marker}</span>
      <span>{props.children}</span>
    </li>
  )
}
