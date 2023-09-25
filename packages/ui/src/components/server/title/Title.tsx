import styles from './title.module.scss'
import { Avatar } from '../avatar/Avatar'
import { Link } from '../link/Link'
import { ComponentProps } from 'react'

interface Author {
  name: string
  href: string
  account: string
}

type DefaultHeadingProps = ComponentProps<'h1'>
type TitleProps = {
  posted?: string
  modified?: string
  authors?: Author[]
} & DefaultHeadingProps

interface AuthorsProps {
  authors?: Author[]
}

const Authors = (props: AuthorsProps) => {
  if (!props.authors || props.authors.length === 0) {
    return null
  }

  return (
    <>
      <div className={styles['posted-by-label']}>Posted by</div>
      <div className={styles['authors']}>
        {props.authors.map((author) => {
          return (
            <Link key={crypto.randomUUID()} href={author.href}>
              <Avatar name={author.name} account={author.account} />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export const Title = ({ posted, modified, authors, ...props }: TitleProps) => {
  return (
    <div className={styles['title']}>
      {posted != null && <div className={styles.posted}>{posted}</div>}
      <h1 className={styles['title-label']}>{props.children}</h1>

      <Authors authors={authors} />
    </div>
  )
}
