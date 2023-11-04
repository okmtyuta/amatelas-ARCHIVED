import { Space, Typography } from '@okmtyuta/amatelas-react'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      Designed by
      <Space />
      <Typography color="primary">okmtyuta</Typography>
    </footer>
  )
}
