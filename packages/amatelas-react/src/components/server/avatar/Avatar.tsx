import { clsx } from 'clsx'
import { AccountSVG } from '@root/svg'
import { ComponentProps } from 'react'

import './avatar.css'

type DefaultSpanProps = ComponentProps<'span'>
type AvatarProps = {
  name?: string
  account?: string
  iconUrl?: string
} & DefaultSpanProps

const getIcon = (iconUrl?: string) => {
  if (iconUrl) {
    return <img className={'avatar-image'} src={iconUrl} />
  }

  return <AccountSVG className={'avatar-image'} />
}

export const Avatar = ({ name, account, iconUrl, ...props }: AvatarProps) => {
  const icon = getIcon(iconUrl)
  return (
    <span {...props} className={clsx('avatar', props.className)}>
      <span>
        <div>{icon}</div>
      </span>
      <span className={'avatar-info'}>
        <span className={'avatar-name'}>{name}</span>
        <span className={'avatar-account'}>{account}</span>
      </span>
    </span>
  )
}
