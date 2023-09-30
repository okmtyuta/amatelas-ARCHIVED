import { clsx } from 'clsx'
import { ComponentProps, MouseEventHandler } from 'react'
import {
  AlertClose,
  AlertCloseCheckbox,
  AlertCloseLabel,
  AlertCloseSVG,
  AlertExterior,
  AlertHeader,
  AlertSummary,
  AlertSummaryText
} from './alert-parts'
import {
  getVariantClass,
  getAlertSVG,
  getCloseCheckboxId
} from './alert-property-getter'

export type AlertVariant = 'info' | 'error' | 'warning' | 'success'
type AlertClassNames = {
  exterior?: string
  header?: string
  summary?: string
  summaryText?: string
  alertSVG?: string
  close?: string
  closeCheckbox?: string
  closeLabel?: string
  closeSVG?: string
}
type DefaultDivProps = ComponentProps<'div'>
type AlertProps = {
  variant?: AlertVariant
  summary?: string
  onDelete?: MouseEventHandler<SVGSVGElement>
  classNames?: AlertClassNames
} & DefaultDivProps

export const Alert = ({
  variant,
  summary,
  onDelete,
  classNames,
  ...props
}: AlertProps) => {
  const _variantClass = getVariantClass(variant)
  const _alertSVG = getAlertSVG({ variant, className: classNames?.alertSVG })
  const _id = getCloseCheckboxId(props.id)

  return (
    <AlertExterior
      {...props}
      className={clsx(_variantClass, classNames?.exterior)}
    >
      <AlertCloseCheckbox
        className={clsx(classNames?.closeCheckbox)}
        id={_id}
      />

      <AlertHeader className={clsx(classNames?.header)}>
        <AlertSummary>
          {_alertSVG}
          <AlertSummaryText className={clsx(classNames?.summaryText)}>
            {summary}
          </AlertSummaryText>
        </AlertSummary>
        <AlertClose className={clsx(classNames?.close)}>
          <AlertCloseLabel
            className={clsx(classNames?.closeLabel)}
            htmlFor={_id}
          >
            <AlertCloseSVG
              className={clsx(classNames?.closeSVG)}
              onClick={onDelete}
            />
          </AlertCloseLabel>
        </AlertClose>
      </AlertHeader>

      {props.children}
    </AlertExterior>
  )
}
