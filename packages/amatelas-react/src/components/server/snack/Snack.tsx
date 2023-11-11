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
import { Color } from '@root/types'

type SnackVariant = 'info' | 'alert' | 'warning' | 'success'
type SnackColor = Color
type SnackPosition = 'top' | 'bottom' | 'left' | 'right'

type DefaultDivProps = ComponentProps<'div'>
type SnackProps = {
  variant?: SnackVariant
  color?: SnackColor
  // label?: string
  position?: SnackPosition
} & DefaultDivProps

const PREFIX = 'AMUI-components_'
const SUB_PREFIX = 'snack_'
const prefixed = (target?: string) => {
  if (target) {
    return `${PREFIX}${SUB_PREFIX}${target}`
  }

  return `${PREFIX}${SUB_PREFIX}`
}

const getIcon = (variant?: SnackVariant) => {
  if (variant === 'success') {
    return <CheckedCircleSVG className={clsx(prefixed('icon'))} />
  }
  if (variant === 'warning') {
    return <WarningSVG className={clsx(prefixed('icon'))} />
  }
  if (variant === 'alert') {
    return <ErrorSVG className={clsx(prefixed('icon'))} />
  }

  return <InfoSVG className={clsx(prefixed('icon'))} />
}
const getPosition = (position?: SnackPosition) => {
  // TODO: ここの実装
  if (position) {
    return `${position}`
  }

  return 'top'
}
const getSnackColor = (color?: SnackColor, variant?: SnackVariant) => {
  if (color) {
    return color
  }

  if (variant) {
    return variant
  }

  return 'info'
}

export const Snack = ({ variant, position, color, ...props }: SnackProps) => {
  const _color = getSnackColor(color)
  const _icon = getIcon(variant)
  const _id = useId()
  const _position = getPosition(position)

  return (
    <div
      {...props}
      className={clsx(prefixed(), prefixed(_color), prefixed(_position))}
    >
      <input className={prefixed('input')} type="checkbox" id={_id} />
      {_icon}
      <div>{props.children}</div>
      <label className={prefixed('close-icon')} htmlFor={_id}>
        <CloseSVG />
      </label>
    </div>
  )
}
