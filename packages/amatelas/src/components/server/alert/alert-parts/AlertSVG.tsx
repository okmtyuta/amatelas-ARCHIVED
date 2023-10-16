import { ComponentProps } from 'react'
import styles from '../alert.module.scss'
import { clsx } from 'clsx'
import {
  CheckedCircleSVG,
  CloseSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG
} from '@root/svg'

type AlertCloseSVGProps = ComponentProps<typeof CloseSVG>

type AlertSuccessProps = ComponentProps<typeof CheckedCircleSVG>
type AlertWarningProps = ComponentProps<typeof WarningSVG>
type AlertErrorProps = ComponentProps<typeof ErrorSVG>
type AlertInfoProps = ComponentProps<typeof InfoSVG>

export const AlertCloseSVG = ({ className, ...props }: AlertCloseSVGProps) => {
  return (
    <CloseSVG {...props} className={clsx(styles['close-svg'], className)} />
  )
}

export const AlertSuccessSVG = ({ className, ...props }: AlertSuccessProps) => {
  return (
    <CheckedCircleSVG
      {...props}
      className={clsx(styles['label-svg'], className)}
    />
  )
}
export const AlertWarningSVG = ({ className, ...props }: AlertWarningProps) => {
  return (
    <WarningSVG {...props} className={clsx(styles['label-svg'], className)} />
  )
}
export const AlertErrorSVG = ({ className, ...props }: AlertErrorProps) => {
  return (
    <ErrorSVG {...props} className={clsx(styles['label-svg'], className)} />
  )
}
export const AlertInfoSVG = ({ className, ...props }: AlertInfoProps) => {
  return <InfoSVG {...props} className={clsx(styles['label-svg'], className)} />
}
