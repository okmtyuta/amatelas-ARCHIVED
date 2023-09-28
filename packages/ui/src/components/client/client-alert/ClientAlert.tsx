import { ComponentProps, MouseEventHandler, useState } from 'react'
import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@root/svg'

import { css, styled } from 'styled-components'
import { color } from '@root/theme/js/color'

type ClientAlertVariant = 'info' | 'error' | 'warning' | 'success'
type DefaultDivProps = ComponentProps<'div'>

type ClientAlertProps = {
  variant?: ClientAlertVariant
  label?: string
  onDelete?: MouseEventHandler<SVGSVGElement>
} & DefaultDivProps

const AlertExterior = styled.div<{
  $variant?: ClientAlertVariant
  $hidden?: boolean
}>`
  ${(props) => {
    if (props.$hidden) {
      return css`
        display: none;
      `
    }

    return css`
      display: flex;
    `
  }}
  padding: 16px;

  color: white;
  fill: white;
  justify-content: space-between;
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
const AlertLabel = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
  background-color: #17a2b8;
`
const AlertLabelContent = styled.span`
  font-weight: bold;
  display: inline-flex;
  align-items: center;
`
const AlertClose = styled.span`
  flex-shrink: 0;
`
const AlertCloseLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: blue;
  }
`
const AlertCloseIcon = styled(CloseSVG)`
  cursor: pointer;
  user-select: none;
`
const AlertSuccessSVG = styled(CheckedCircleSVG)`
  flex-shrink: 0;
`
const AlertWarningSVG = styled(WarningSVG)`
  flex-shrink: 0;
`
const AlertErrorSVG = styled(ErrorSVG)`
  flex-shrink: 0;
`
const AlertInfoSVG = styled(InfoSVG)`
  flex-shrink: 0;
`

const getAlertVariant = (variant?: ClientAlertVariant) => {
  if (variant) {
    return variant
  }
  return 'info'
}
const getAlertIcon = (variant?: ClientAlertVariant) => {
  switch (variant) {
    case 'error':
      return <AlertErrorSVG />
    case 'success':
      return <AlertSuccessSVG />
    case 'warning':
      return <AlertWarningSVG />
    default:
      return <AlertInfoSVG />
  }
}

export const ClientAlert = ({
  variant,
  label,
  onDelete,
  ...props
}: ClientAlertProps) => {
  const v = getAlertVariant(variant)
  const alertIcon = getAlertIcon(variant)
  const [hidden, setHidden] = useState<boolean>(false)

  return (
    <AlertExterior $hidden={hidden} $variant={v}>
      <div>
        <AlertLabel>
          {alertIcon}
          <AlertLabelContent>{label}</AlertLabelContent>
        </AlertLabel>
        <div>{props.children}</div>
      </div>

      <AlertClose>
        <AlertCloseLabel>
          <AlertCloseIcon
            onClick={(e) => {
              setHidden(true)
              if (onDelete) {
                onDelete(e)
              }
            }}
          />
        </AlertCloseLabel>
      </AlertClose>
    </AlertExterior>
  )
}
