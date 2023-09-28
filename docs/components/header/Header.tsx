import { Link, Sticky, Typography } from '@okmtyuta/amatelas/server'
import styles from './header.module.scss'
import { GitHubLogoSVG } from '../svg'
import { StorybookLogoSVG } from '../svg/StorybookLogoSVG'

export const Header = () => {
  return (
    <Sticky position="top" className={styles['header']}>
      <div className={styles['header-content']}>
        <Typography color="primary" fontFamily="anton">
          <Link href="/">AmatelasUI</Link>
        </Typography>
        <div className={styles['links']}>
          <Link href="https://github.com/okmtyuta/amatelas">
            <div className={styles['github-logo-svg-exterior']}>
              <GitHubLogoSVG className={styles['github-logo-svg']} />
            </div>
          </Link>
          <Link href="https://storybook.amatelas.dev">
            <div className={styles['storybook-logo-svg-exterior']}>
              <StorybookLogoSVG className={styles['storybook-logo-svg']} />
            </div>
          </Link>
        </div>
      </div>
    </Sticky>
  )
}
