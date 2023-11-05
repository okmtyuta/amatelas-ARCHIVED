// Refer to https://mui.com/material-ui/react-snackbar/

import { ComponentProps, useId } from 'react'
import { clsx } from 'clsx'
import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@root/svg'

import '@okmtyuta/amatelas-theme/color.css'
import '@okmtyuta/amatelas-theme/layer.css'
import '@okmtyuta/amatelas-css/amatelas-snack.css'

type SnackVariant = 'info' | 'danger' | 'warning' | 'success'
type SnackPosition = 'top' | 'bottom' | 'left' | 'right'

type DefaultDivProps = ComponentProps<'div'>
type SnackProps = {
  variant?: SnackVariant
  // label?: string
  position?: SnackPosition
} & DefaultDivProps

const getVariant = (variant?: SnackVariant) => {
  if (variant) {
    return variant
  }

  return 'info'
}
const getIcon = (variant?: SnackVariant) => {
  const snackVariant = getVariant(variant)
  const icon = `${snackVariant}-icon`

  if (variant === 'success') {
    return <CheckedCircleSVG className={clsx('icon', icon)} />
  }
  if (variant === 'warning') {
    return <WarningSVG className={clsx('icon', icon)} />
  }
  if (variant === 'danger') {
    return <ErrorSVG className={clsx('icon', icon)} />
  }

  return <InfoSVG className={clsx('icon', icon)} />
}
const getPosition = (position?: SnackPosition) => {
  // TODO: ここの実装
  if (position) {
    return `${position}`
  }

  return 'top'
}

export const Snack = ({ variant, position, ...props }: SnackProps) => {
  const _variant = getVariant(variant)
  const _icon = getIcon(variant)
  const _id = useId()
  const _position = getPosition(position)

  return (
    <div {...props} className={clsx('amatelas-snack', _variant, _position)}>
      <input className={'input'} type="checkbox" id={_id} />
      {_icon}
      <div>{props.children}</div>
      <label className={'close-icon'} htmlFor={_id}>
        <CloseSVG />
      </label>
    </div>
  )
}
