import {
  CloseSVG,
  CheckedCircleSVG,
  WarningSVG,
  ErrorSVG,
  InfoSVG
} from '@root/svg'
import styled from 'styled-components'

export const ClientAlertCloseSVG = styled(CloseSVG)`
  cursor: pointer;
  user-select: none;
`
export const ClientAlertSuccessSVG = styled(CheckedCircleSVG)`
  flex-shrink: 0;
`
export const ClientAlertWarningSVG = styled(WarningSVG)`
  flex-shrink: 0;
`
export const ClientAlertErrorSVG = styled(ErrorSVG)`
  flex-shrink: 0;
`
export const ClientAlertInfoSVG = styled(InfoSVG)`
  flex-shrink: 0;
`
