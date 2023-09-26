import { Space, Typography, Link } from '@okmtyuta/amatelas'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      Designed by
      <Space />
      <Typography color="primary" fontFamily="anton">
        <Link href="/">okmtyuta</Link>
      </Typography>
    </footer>
  )
}
