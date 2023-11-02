import { Sticky, Typography } from '@okmtyuta/amatelas'
import styles from './header.module.css'

export const Header = () => {
  return (
    <Sticky position="top" className={styles['header']}>
      <div className={styles['header-content']}>
        <Typography color="primary">AmatelasUI</Typography>
      </div>
    </Sticky>
  )
}
