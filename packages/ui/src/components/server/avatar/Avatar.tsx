import { clsx } from 'clsx'
import { AccountSVG } from '@root/svg'
import styles from './avatar.module.scss'
import { ComponentProps } from 'react'

type DefaultSpanProps = ComponentProps<'span'>
type AvatarProps = {
  name?: string
  account?: string
  iconUrl?: string
} & DefaultSpanProps

const getIcon = (iconUrl?: string) => {
  if (iconUrl) {
    return <img className={styles['avatar-image']} src={iconUrl} />
  }

  return <AccountSVG className={styles['avatar-image']} />
}

export const Avatar = ({ name, account, iconUrl, ...props }: AvatarProps) => {
  const icon = getIcon(iconUrl)
  return (
    <span {...props} className={clsx(styles['avatar'], props.className)}>
      <span>
        <div>{icon}</div>
      </span>
      <span className={styles['avatar-info']}>
        <span className={styles['avatar-name']}>{name}</span>
        <span className={styles['avatar-account']}>{account}</span>
      </span>
    </span>
  )
}
