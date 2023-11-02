import { ComponentProps, MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'

import {
  AlertCloseSVG,
  AlertErrorSVG,
  AlertInfoSVG,
  AlertSuccessSVG,
  AlertWarningSVG
} from './AlertSVG'

import { color } from '@root/theme/js/color'
import { padding, withPaddingSizeUnit } from '@root/theme/js/padding'
import { margin, withMarginSizeUnit } from '@root/theme/js/margin'

export type ControlledAlertVariant = 'info' | 'error' | 'warning' | 'success'

type DefaultDivProps = ComponentProps<'div'>
type ControlledAlertProps = {
  variant?: ControlledAlertVariant
  summary?: string
  onDelete?: MouseEventHandler<SVGSVGElement>
  close?: boolean
} & DefaultDivProps

export const getVariant = (variant?: ControlledAlertVariant) => {
  if (variant) {
    return variant
  }

  return 'info'
}

const getAlertSVG = (params: { variant?: ControlledAlertVariant }) => {
  const alertVariant = getVariant(params.variant)

  if (alertVariant === 'success') {
    return <AlertSuccessSVG />
  }
  if (alertVariant === 'warning') {
    return <AlertWarningSVG />
  }
  if (alertVariant === 'error') {
    return <AlertErrorSVG />
  }

  return <AlertInfoSVG />
}

const AlertHead = styled.div`
  display: flex;
  justify-content: space-between;
`
const AlertSummary = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: ${withMarginSizeUnit(margin.mdMargin)};
`
const AlertSummaryText = styled.span`
  font-weight: bold;
  display: inline-flex;
  align-items: center;
`
const AlertClose = styled.span`
  flex-shrink: 0;
`
const AlertCloseLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transform: translate(4px, -4px);
  cursor: pointer;
`
type AlertProps = {
  $variant: ControlledAlertVariant
  $close?: boolean
}
const Alert = styled.div<AlertProps>`
  padding: ${withPaddingSizeUnit(padding.lgPadding)};
  color: white;
  fill: white;
  ${(props) => {
    if (props.$close) {
      return css`
        display: none;
      `
    }
  }}
  ${(props) => {
    if (props.$variant === 'info') {
      return css`
        background-color: ${color.info};
        ${AlertCloseLabel}:hover {
          border-radius: 50%;
          background-color: blue;
        }
      `
    }
    if (props.$variant === 'error') {
      return css`
        background-color: ${color.danger};
        ${AlertCloseLabel}:hover {
          border-radius: 50%;
          background-color: red;
        }
      `
    }
    if (props.$variant === 'warning') {
      return css`
        background-color: ${color.warning};
        ${AlertCloseLabel}:hover {
          border-radius: 50%;
          background-color: yellow;
        }
      `
    }
    if (props.$variant === 'success') {
      return css`
        background-color: ${color.success};
        ${AlertCloseLabel}:hover {
          border-radius: 50%;
          background-color: green;
        }
      `
    }
  }}
`

export const ControlledAlert = ({
  variant,
  summary,
  onDelete,
  close,
  ...props
}: ControlledAlertProps) => {
  const _variant = getVariant(variant)
  const _alertSVG = getAlertSVG({ variant })

  return (
    <Alert $variant={_variant} $close={close}>
      <AlertHead>
        <AlertSummary>
          {_alertSVG}
          <AlertSummaryText>{summary}</AlertSummaryText>
        </AlertSummary>
        <AlertClose>
          <AlertCloseLabel>
            <AlertCloseSVG onClick={onDelete} />
          </AlertCloseLabel>
        </AlertClose>
      </AlertHead>
      {props.children}
    </Alert>
  )
}
