import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@root/svg'
import styled from 'styled-components'

export const AlertCloseSVG = styled(CloseSVG)`
  cursor: pointer;
  user-select: none;
`

export const AlertSuccessSVG = styled(CheckedCircleSVG)`
  flex-shrink: 0;
`
export const AlertWarningSVG = styled(WarningSVG)`
  flex-shrink: 0;
`

export const AlertErrorSVG = styled(ErrorSVG)`
  flex-shrink: 0;
`

export const AlertInfoSVG = styled(InfoSVG)`
  flex-shrink: 0;
`
