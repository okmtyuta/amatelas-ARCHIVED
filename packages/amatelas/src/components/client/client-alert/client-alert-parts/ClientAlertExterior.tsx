import { color } from '@root/theme/js/color'
import { css, styled } from 'styled-components'
import { ClientAlertVariant } from '../ClientAlert'
import { ClientAlertCloseCheckbox } from '.'

export const ClientAlertExterior = styled.div<{
  $variant?: ClientAlertVariant
}>`
  &:has(${ClientAlertCloseCheckbox}:checked) {
    display: none;
  }
  padding: 16px;

  color: white;
  fill: white;
  ${(props) => {
    switch (props.$variant) {
      case 'warning':
        return css`
          background-color: ${color.warning};
        `
      case 'info':
        return css`
          background-color: ${color.info};
        `
      case 'error':
        return css`
          background-color: ${color.danger};
        `
      default:
        return css`
          background-color: ${color.info};
        `
    }
  }}
`
