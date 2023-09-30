import { Space, Typography } from '@okmtyuta/amatelas'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      Designed by
      <Space />
      <Typography color="primary" fontFamily="anton">
        okmtyuta
      </Typography>
    </footer>
  )
}