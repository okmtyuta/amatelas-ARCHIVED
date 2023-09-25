import { Sticky, Typography } from '@okmtyuta/amui/ui'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <Sticky position="top" className={styles['header']}>
      <div className={styles['header-content']}>
        <Typography color="primary" fontFamily="anton">
          AmUI
        </Typography>
      </div>
    </Sticky>
  )
}
