import { MaterialTextfieldVariant } from '../../../types'
import {
  standardMaterialTextfieldPrefixed,
  outlinedMaterialTextfieldPrefixed,
  filledMaterialTextfieldPrefixed
} from '../../../prefixed'

export const getMaterialTextfieldPrefixed = (
  variant?: MaterialTextfieldVariant
) => {
  if (variant === 'outlined') {
    return outlinedMaterialTextfieldPrefixed
  } else if (variant === 'filled') {
    return filledMaterialTextfieldPrefixed
  }
  return standardMaterialTextfieldPrefixed
}
