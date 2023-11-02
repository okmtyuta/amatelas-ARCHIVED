import { Space, Typography, Link } from '@okmtyuta/amatelas/server'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      Designed by
      <Space />
      <Typography color="primary">
        <Link href="/">okmtyuta</Link>
      </Typography>
    </footer>
  )
}
