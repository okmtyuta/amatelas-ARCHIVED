import { styled } from 'styled-components'

export const ClientAlertCloseLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transform: translate(4px, -4px);
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: blue;
  }
`
