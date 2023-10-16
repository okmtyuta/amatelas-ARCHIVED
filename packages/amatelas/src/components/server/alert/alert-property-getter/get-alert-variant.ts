import { AlertVariant } from '../Alert'
import styles from '../alert.module.scss'

export const getVariantClass = (variant?: AlertVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}
