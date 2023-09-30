import { ComponentProps, MouseEventHandler } from 'react'

import {
  ClientAlertClose,
  ClientAlertCloseCheckbox,
  ClientAlertCloseLabel,
  ClientAlertCloseSVG,
  ClientAlertExterior,
  ClientAlertHeader,
  ClientAlertSummary,
  ClientAlertSummaryText
} from './client-alert-parts'
import {
  getClientAlertSVG,
  getClientAlertVariant
} from './client-alert-property-getter'

export type ClientAlertVariant = 'info' | 'error' | 'warning' | 'success'
type DefaultDivProps = ComponentProps<'div'>

type ClientAlertProps = {
  variant?: ClientAlertVariant
  summary?: string
  onDelete?: MouseEventHandler<SVGSVGElement>
} & DefaultDivProps

export const ClientAlert = ({
  variant,
  summary,
  onDelete,
  ...props
}: ClientAlertProps) => {
  const _variant = getClientAlertVariant(variant)
  const _alertIcon = getClientAlertSVG(variant)
  const _inputId = crypto.randomUUID()

  return (
    <ClientAlertExterior $variant={_variant}>
      <ClientAlertHeader>
        <ClientAlertCloseCheckbox
          type="checkbox"
          id={_inputId}
          className="alert-input"
        />
        <ClientAlertSummary>
          {_alertIcon}
          <ClientAlertSummaryText>{summary}</ClientAlertSummaryText>
        </ClientAlertSummary>
        <ClientAlertClose>
          <ClientAlertCloseLabel htmlFor={_inputId}>
            <ClientAlertCloseSVG onClick={onDelete} />
          </ClientAlertCloseLabel>
        </ClientAlertClose>
      </ClientAlertHeader>

      <div>{props.children}</div>
    </ClientAlertExterior>
  )
}
