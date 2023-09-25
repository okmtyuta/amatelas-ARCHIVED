import { ComponentProps } from 'react'
import styles from './fixed.module.scss'
import positionalMarginStyles from '@theme/css/position/get-positional-margin.module.scss'
import { PositionalMargin } from '@root/shared/create-get-class/create-get-positional-margin-class/types'
import { clsx } from 'clsx'
import { createGetPositionalMarginClass } from '@root/shared/create-get-class/create-get-positional-margin-class/createGetPositionalMarginClass'

type FixedPosition = 'top' | 'bottom' | 'left' | 'right'

type DefaultDivProps = ComponentProps<'div'>
type FixedProps = {
  position?: FixedPosition
  positionalMargin?: PositionalMargin
} & DefaultDivProps

const getPositionClass = (position?: FixedPosition) => {
  if (position) {
    return styles[`position-${position}`]
  }

  return styles['position-top']
}

export const Fixed = (props: FixedProps) => {
  const positionClass = getPositionClass(props.position)
  const positionalMarginClass = createGetPositionalMarginClass(
    positionalMarginStyles
  )(props.positionalMargin)
  return (
    <div
      className={clsx(
        styles['fixed'],
        positionClass,
        positionalMarginClass,
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
