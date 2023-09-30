import { ClientAlertVariant } from '../ClientAlert'

export const getClientAlertVariant = (variant?: ClientAlertVariant) => {
  if (variant) {
    return variant
  }
  return 'info'
}
